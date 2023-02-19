---
description: Personal RSS feed recommender built using React and some machine learning
date: "19 Feb 2023"
tags:
	- draft
---

This year I've decided to revive in myself the habit of reading. I enjoy reading posts from Habr, Medium, Quanta magazine, Stack Exchange (hot questions) and many more. I had a problem that these platforms are separate and I had to open them one by one to find something I like.

Then, I remembered that sometime ago I used RSS feeds, they share up to date information from a feed that you can subscribe to. However, applications for these feeds did not filter or rank any content that went through, so, I would have huge piles posts that I would try to read through and most of the posts weren't that interesting. 

So, I thought to make my own RSS feed, but with a classifier attached to it that predicts the probability that I will/won't like the post. 

To keep the app simple, I've decided on a [naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) for the ranker, [React](https://reactjs.org/) for frontend and [Firebase](https://firebase.google.com/) for backend. 

## Classifier

### Theory

First I built the classifier to check if the idea would actually work. The idea behind naive Bayes classifier is to answer the question "what is the probability that a given post $D$ belongs to a given class $C$ (like/dislike)?" or if rephrased with probabilities: what is $p(C | D)$?

For simplicity we'll  assume that the probability of a document $D$ is in a class $C$ is given by the product of probabilities that the words $w_i$ of $D$ are in $C$:

$$
p(D|C) = \prod_i p(w_i | C)
$$

Using Bayes' theorem
$$
p(C | D) = \frac{p(C) P(D | C)}{p(D)}
$$
Then we get
$$
p(C | D) = \frac{p(C)}{p(D)} \prod_i p(w_i | C)
$$
which we can compute using the frequencies of the words in classes and frequencies of classes.  

That formula is enough to compute the probability, however, we can improve it by 
- taking natural logarithm of each side to avoid problems with small floating points, 
- instead of computing the probability compute the likelihood ratio (ratio of the probabilities like and dislike)

$$
L = \ln \frac{p(❤ | D)}{p(\neg ❤ | D)} = \ln \frac{p(❤)}{p(\neg ❤)}  + \sum_i \ln \frac{p(w_i | ❤)}{p(w_i | \neg ❤)}
$$
Due to the assumptions made in the beginning in reality the probabilities won't add up to one ($p(❤ | D) + p(\neg ❤ | D) \not= 1$) because they are not correct. 

We'll get the probability back from the $L$
$$
p( ❤ | D) = 1 - \frac{1}{1 + e ^ L}
$$

In code it would look something like this

### Implementation

First we'll make a function to compute the sum.
```javascript
const sum = (arr: number[]) => {
	return arr.reduce((a, b) => a + b, eps);
}
```

To compute the log prior, we'll find the frequency of a class and return the log of it.
```javascript
const log_prior = (c: "like" | "dislike", n_messages: Freq) => {
	const vals = Object.values(n_messages);
	const lp = Math.log(n_messages[c] / sum(vals));
	
	return lp;
}
```

Similarly, we'll find the frequency of a word in a class and return the log of it.

```javascript
const log_likelihood = (word: string, c: c, n_words: Words, n_messages: Freq) => {
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

## Application

### Frontend

### Backend

