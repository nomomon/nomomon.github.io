---
description: An RSS feed with a Naive Bayes recommender that is learning online.
imageURL: bayes-feed.jpeg
date: 17 Dec, 2022
endDate: 28 Dec, 2022
demo: https://bayes-feed.vercel.app/
source: https://github.com/nomomon/bayes-feed
tags: [next.js, firebase, material-ui, nlp, rss, vercel, project]
publish: true
---

![[bayes-feed.jpeg]]

[RSS feeds](https://ru.wikipedia.org/wiki/RSS) are a convenient and old–fashioned way to follow blogs and websites. 

This December, I returned to reading as my main source of getting information. In doing so, I came across a recommendation system with a Naive Bayes classifier, which was used to filter an RSS feed. This inspired me to create a similar application for myself.

The idea of the project is to collect posts from RSS feeds, use the classifier to predict whether I will like the post or not, and then train the algorithm on my reactions. Hence, this algorithm is learning in [online mode](https://en.wikipedia.org/wiki/Online_machine_learning).

At first I used a Telegram bot as an interface, but I encountered a lot of errors and inconveniences when parsing messages. I also used PocketBase for the backend, but it turned out that it is still in beta and query functions I needed were not available. As the result, I changed the stack to Next.js with MUI for frontend and Firebase for backend.

Update
---

With the latest update, I've made it easier and more efficient for users to access and filter their news.

One of the major updates I've made is the addition of authentication. Now, users can create their own accounts and have all their data stored in a single object, making it easier to query and manage.

I've also streamlined the process of retrieving data by making all necessary requests in a single request. This not only makes the process faster, but it also helps stay within the Firebase free limit. 

But that's not all - I've also improved the functionality of our Naive Bayes classifier. Rather than simply classifying articles as either liked or not liked, it now considers the approximate probability of a user liking an article. This gives users a more personalized experience and helps them find the content that is most relevant to them.

Finally, I've hosted the app on Vercel, a reliable and user-friendly platform. The only issue I've encountered is the limitation of 12 requests for server functions on the free plan. While I understand that paying the $20/month fee will make the app be perfect, I cannot afford that for a personal use project.

Overall, I'm confident that my RSS feed application will provide users with a valuable and enjoyable experience. I hope you'll give it a try and see for yourself!