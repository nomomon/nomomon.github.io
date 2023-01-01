---
description: Text generator written in React.js that uses Markov chains to generate text based on a given input.
imageURL: markov-chain-text.jpeg
date: Aug 6, 2022
endDate: Aug 7, 2022
demo: https://nomomon.github.io/markov-chain-text/
source: https://github.com/nomomon/markov-chain-text
tags: [react, node.js, nlp, markov-chain, project]
publish: true
---

![[markov-chain-text.jpeg]]

Recently, I was reading in the Y.Practicum blog and found a [group of posts](https://thecode.media/markov-chain/) there about Markov chains. The articles were written in a easy to understand and engaging way, and I thought it would be interesting to see for myself how the algorithm works.

First of all, the definition:

> Markov chains are a sequence of events or actions, where each new event depends only on the previous one and does not take into account all other events. Such an algorithm does not remember what happened before, but only looks at the previous state.

It will be easier to understand if you look at the following example:

```javascript
const dataset = ["I am a human", "I am a programmer", "I am not a dog"];
```

This dataset results in the following tree diagram:

![[diagram.png]]

In context of text generation, each word is an event. The next word is selected randomly from the words that stood after the last word. The probability of each word transition is determined by the frequency of the pair. After a random word is selected, the same thing is repeated with the sentence until the final word appears.

In the example from the image, after the word “a” in the source text there could be the words “programmer”, “human”, and “dog”. So, the new sentences that can be generated from the dataset are:

> I am not a programmer
>
> I am not a human
>
> I am a dog

It certainly doesn't compare to GPT-3 or Copilot, but the results are sure ridiculous.

## Results

Example in Russian

![demo](https://github.com/nomomon/markov-chain-text/raw/master/screenshot.png)
