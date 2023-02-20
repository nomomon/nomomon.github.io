---
description: Personal RSS feed recommender built using React and some machine learning
date: "19 Feb 2023"
tags: [draft]
---

**Table of contents**
- [Classifier](#classifier)
	- [Theory](#theory)
	- [Implementation](#implementation)
- [Preprocessing](#preprocessing)
	- [Stopwords](#Stopwords)
	- [Lemmatisation](#lemmatisation)

This year I've decided to revive in myself the habit of reading. I enjoy reading posts from Habr, Medium, Quanta magazine, Stack Exchange (hot questions) and many more. I had a problem that these platforms are separate and I had to open them one by one to find something I like.

Then, I remembered that sometime ago I used RSS feeds, they share up to date information from a feed that you can subscribe to. However, applications for these feeds did not filter or rank any content that went through, so, I would have huge piles posts that I would try to read through and most of the posts weren't that interesting. 

So, I thought to make my own RSS feed, but with a classifier attached to it that predicts the probability that I will/won't like the post. 

To keep the app simple, I've decided on a [naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) for the ranker, [React](https://reactjs.org/) in [Typescript](https://www.typescriptlang.org/) for frontend and [Firebase](https://firebase.google.com/) for backend. 

## Classifier

First I built the classifier to check if the idea would actually work. The idea behind naive Bayes classifier is to answer the question "what is the probability that a given post $D$ belongs to a given class $C$ (like/dislike)?" or if rephrased with probabilities: what is $p(C | D)$?

### Theory

In the end, I  ended up using this formula for the probability:

$$
p( ❤ | D) = 1 - \frac{1}{1 + e ^ L}
$$
where $L$ is

$$
L = \ln \frac{p(❤)}{p(\neg ❤)}  + \sum_{w_i \in D} \ln \frac{p(w_i | ❤)}{p(w_i | \neg ❤)}.
$$

Looks scary, but actually it's not. Let's break it down.

We'll start off with making our first assumption, a document $D$ that is made up of words $w_i$ can be modeled as a bag of words that have independent distributions and that the $w_i$ appears in a document of class $C$ is $p(w_i | C)$. Then, we can claim that
$$
\tag{1} p(D|C) = \prod_{w_i \in D} p(w_i | C).
$$

Bayes' theorem states that
$$
p(C | D) = \frac{p(C) P(D | C)}{p(D)},
$$
and plugging in $(1)$ results in
$$
\tag{2} p(C | D) = \frac{p(C)}{p(D)} \prod_{w_i \in D} p(w_i | C).
$$
This is the standard formula for a naive Bayes classifier, all you have to do is count up the frequencies, multiply, and compare what probability is greater $p(C_1 | D)$ or $p(C_2 | D)$? 

But, I want to modify it. First, let's take the logarithm of the formula
$$
\tag{3} \ln p(C | D) = \ln \frac{p(C)}{p(D)} + \sum_{w_i \in D} \ln p(w_i | C).
$$
Taking the logarithm of the formula will make sure we avoid problems with small floating points [^log_expl] and also it allows to use addition and subtraction rather than multiplication and division. 

[^log_expl]: This is because probabilities themselves work in the range $[0, 1]$, but if we take the logarithm of the probability then it works in range $(-\infty, 0]$ giving  computer more space to work with and allowing it to be more accurate.

Second, instead of computing the probability, let's compute the likelihood ratio (ratio of the probabilities for like and not like):

$$
\begin{align}
L 
&= \ln p(❤ | D) - \ln p(\neg ❤ | D) \\
&= \ln \frac{p(❤ | D)}{p(\neg ❤ | D)} \\
&= \ln \frac{p(❤)}{p(\neg ❤)}  + \sum_{w_i \in D} \ln \frac{p(w_i | ❤)}{p(w_i | \neg ❤)}.
\end{align} \tag{4}
$$
Using that $p(❤ | D) + p(\neg ❤ | D) = 1$ we get the probability of a like given a document:
$$
\tag{5} p( ❤ | D) = 1 - \frac{1}{1 + e ^ L}.
$$
We got the formula from the beginning. [^L-expl] 

[^L-expl]: One might find it weird that I am taking a long way around to find the probability by introducing $L$ instead of using the formula $(3)$ derived earlier, however, there is a point to that. 
	
	In classical naive Bayes classifier implementations sometimes the probabilities are greater than one and don't even add up to one. This is because because _the assumption we made in the beginning was not true_.
	
	The document does depend on the structure and ordering of the words. Disregarding that results in probabilities that are actually dependent and simply multiplying them will not cut. However, this doesn't make the classifier dysfunctional, even flawed it has proven itself working.
	
	By introducing $L$ and deriving $p(❤ | D)$ from $p(❤ | D) + p(\neg ❤ | D) = 1$ results in probabilities that add up to one.

### Implementation

For the implementation I introduce a tiny constant value `eps`, so that in some cases I avoid division by zero.

```typescript
const eps = 1e-4;

type Freq = {
	like: number,
	dislike: number
}

type Words = {
    like: {
        [word: string]: number
    },
    dislike: {
        [word: string]: number
    }
}
```

First I make a function to compute the sum of an array.
```typescript
const sum = (arr: number[]) => {
	return arr.reduce((a, b) => a + b, eps);
}
```

To compute the probability of a class (prior), I count the frequency of a class in the data, divide it by the total number of occurrences and return the logarithm of it.

```typescript
const log_prior = (
	c: "like" | "dislike", 
	n_messages: Freq
) => {
	const vals = Object.values(n_messages);
	const lp = Math.log(n_messages[c] / sum(vals));
	
	return lp;
}
```

Similarly, I find the probability of a word in a class (likelihood) by counting the frequency the word appears in the class and dividing by the number of words in the class and return the logarithm of it.

```typescript
const log_likelihood = (
	word: string, 
	c: "like" | "dislike", 
	n_words: Words, 
	n_messages: Freq
) => {
	if (n_words[c] && n_words[c].hasOwnProperty(word)) {
		const n_word = n_words[c][word] || 0;
		const n_c = n_messages[c];
		
		return Math.log((n_word + eps) / (n_c + eps));
	}
	else {
		return Math.log(eps);
	}
}
```

Finally, we'll combine it all together to

```javascript
const NaiveBayesClassifier = (
	words: string[], n_messages: Freq, n_words: Words
): number => {
	const log_p_like = log_prior("like", n_messages);
	const log_p_dislike = log_prior("dislike", n_messages);
	
	const log_p_words_like = sum(
		words.map(words => 
			log_likelihood(words, "like", n_words, n_messages)
		)
	);
	
	const log_p_words_dislike = sum(
		words.map(words => 
			log_likelihood(words, "dislike", n_words, n_messages)
		)
	);
	
	const log_p_like_words = log_p_like + log_p_words_like;
	const log_p_dislike_words = log_p_dislike + log_p_words_dislike;
	
	const L = log_p_like_words - log_p_dislike_words;
	const approx_p = 1 - 1/(1 + Math.exp(L));
	
	return approx_p;
};
```

## Preprocessing

### Stopwords

One way to improve the results of a naive Bayes classifier is to remove *stop-words* from the text. Stop-words are frequent words, like _"a"_ and _"the"_, that don't carry much meaning. This was done by filtering words from a list with ~ 100 words.

I downloaded the stop-word lists from [NLTK](https://www.nltk.org/), and cleaned the texts before passing to the classifier.

```typescript
const removeStopWords = (
	words: string[], 
	stopwords: string[]
) => {
    return words.filter(word => !stopwords.includes(word));
}
```

### Lemmatisation

Similarly, lemmatising words improves the classifier. I used the word maps from NLTK.

```typescript
type Lemmatizer = (word: string) => string;

const lemmatize = (
	words: string[], 
	lemmatizer: Lemmatizer
) => {
    return words.map(word => lemmatizer(word));
}
```


## Application

The app was first build in the web and while it works fine on local host with API in Next.js to fetch the posts, it doesn't work just in browser because of CORS. 😒

So, I switched to a React Native app (with expo). It was simple one page app that displayed posts in a card list.

The list of subscribed feeds are in Firebase. Firebase also has a field for a dictionary that counts the frequencies: number of liked/disliked posts, for a word number of posts that are liked/dislike that include it.

They are retrieved in two requests which can be big, but is better than making a thousand requests.

```typescript
export async function getUserRss(): Promise<string[]> {
    const feedsRef = doc(db, `/users/${UID}/feeds/feeds`);
    const feedsSnap = await getDoc(feedsRef);
    const feeds = feedsSnap.data().feeds || [];

    return feeds as string[];
}

async function getUserWords(): Promise<Words> {
    const wordsRef = doc(db, `/users/${auth.currentUser.uid}/words/words`);
    const wordsSnap = await getDoc(wordsRef);
    const words = wordsSnap.data() || { like: {}, dislike: {} };

    return words as Words;
}

async function getUserFreq(): Promise<Freq> {
    const freqDoc = doc(db, 'users', auth.currentUser.uid);
    const freqSnapshot = await getDoc(freqDoc);

    const freq = freqSnapshot.data() || { like: 0, dislike: 0 };

    return freq as Freq;
}
```

When a post is liked/disliked, the frequencies for the words of the post are updated.

```typescript
async function patchUserWords(incrementedWords: Words) {
    const wordsRef = doc(db, `/users/${auth.currentUser.uid}/words/words`);
    const wordsSnap = await getDoc(wordsRef);
    const wordsData = wordsSnap.data() as Words;

    if (wordsData) {
        setDoc(wordsRef, incrementedWords, { merge: true });
    }
    else {
        setDoc(wordsRef, incrementedWords);
    }
}

async function patchUserFreq(score: Score) {
    const freqDoc = doc(db, 'users', auth.currentUser.uid);
    const freqSnapshot = await getDoc(freqDoc);

    if (freqSnapshot.exists()) {
        setDoc(freqDoc, {
            like: increment(score.like),
            dislike: increment(score.dislike)
        }, { merge: true });
    }
    else {
        setDoc(freqDoc, {
            like: score.like,
            dislike: score.dislike
        });
    }
}
```

