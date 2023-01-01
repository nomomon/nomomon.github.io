---
description: A proof of concept, Amazon product description generator using GPT-Neo for Texta.ai
imageURL: amazon-product-description.jpeg
date: Aug 15, 2021
endDate: Aug 17, 2021
source: https://github.com/nomomon/Amazon-Product-Description
tags: [python, GPT, web-scraping, project]
publish: true
---

This is a proof of concept for an AI that generates Amazon-like product descriptions **that sell**.

![amazon-product-description](attachments/projects/amazon-product-description.jpeg)

I was contacted by the founder of [Texta.ai](https://texta.ai/) and asked to recreate their product that works cheaper. They used GPT-3 from Open AI to generate text descriptions and their price was not cheap enough to make the business profitable.

I started of by scraping data with Puppeteer from top Amazon products, but that turned out to be a bit of a challenge. Their websites took a tremendous amount of time to load and the scraping process was not very efficient. That's why I changed to a scrapped [dataset](https://jmcauley.ucsd.edu/data/amazon/) by UCSD. All the collected data was cleaned and shaped into prompt templates.

After the data was ready, I fine-tuned multiple [GPT-Neo](https://www.eleuther.ai/projects/gpt-neo/) models using the [Happy Transformer](https://happytransformer.com/) library on Google Colab.

## Results

From the following input:

```python
category = "Sports and Outdoors"
short = "5.25 x 3 x 5.5 inches, 1 pounds, Fit and Fresh, 336KFF, #6 in Sports & Outdoors (See Top 100 in Sports & Outdoors) #1 in Camping Cooler Accessories, , SLIM ICE PACKS, COMPACT DESIGN, LONG-LASTING, HEALTHY AND SAFE"
title = "Fit & Fresh Cool Coolers Reusable Ice Packs, Set of 4, Clear, Package may vary"
n_examples = 5
```

the model generated the following product description:

> **>>>** Fit-Fresh Cooling is a great way to stay cool in your outdoor life and use it on a variety of outdoor activities. The frozen-cooler is made with a reusable ice pack that can be used as a cool-down item or
>
> **>>>** Fit&Fresh Cooling is a lightweight, portable ice pack that fits on most patio decks. It is designed in a compact package with a clean, clean fit and fresh design. It contains 4 stainless steel bottles, as well as a large metal
>
> **>>>** - Fit Ice Pack 2.0oz. IcePack 4.8oz Icepack 1.6oz ice pack Package included
>
> **>>>** 1. The Fit&Fresh Cooling Reusable Ice Pack with the Fresh and Clear Package is easy to clean, durable, and contains enough ice to last you for years 2. Each pack contains 3.6 ounces of ice,
>
> **>>>** Fit&Fresh is a cool new and easy-to-use ice pack that's easy to clean, and a great ice scraper that helps you remove ice from your water bottles. Its perfect for cleaning and having a blast with your family.
