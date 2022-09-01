---
title: What does mathematics say about working at a delivery company?
date: 2 Sep 2022
description: This is some mathy content
imageURL: "/images/posts/2022-09-02/groningen.png"
tags:
  - "math"
  - "delivery"
---

Last year one of my friends worked in a delivery company. Their job was to deliver groceries to customers. And, this friend told me what was their wage. So, I thought, what is the wage of a delivery driver?

In their company, the wage was based on the amount of orders per hour they delivered. For example:

- X euros for 4 orders per hour
- Y euros for 6 orders per hour
- Z euros for 8 orders per hour
- Ω euros for 10 orders per hour

But, on average, what is their wage? Sure, it depends on the speed.

First let's formulate the problem in a mathematical way.

> Monkey is the imaginary grocery delivery service. Their wearhouse is located in the center of a city with radius $R$. The clients are uniformly distributed in the circle. What is the expected value of delivery time?

So, the delivery man is starts off in the center (wearhouse) brings the groceries to the customer and comes back to get ready for the next delivery.

![problem setting](/images/posts/2022-09-02/problem-setting.png)

The expected value of delivery time is the expected value of the distance to the customer divided by the velocity of the delivery man.

$$E(t) = 2 \cdot \frac{E(d)}{v}$$

The value of $E(d)$ can be interpreted as the the expected value of distance between the center and a random uniform point in the circle.

Let's cut the circle into thin rings with radius $r$ and width $\Delta r$. Then the area of these rings is $2\pi r \Delta r$. The probability of getting a point inside this ring is the area of the ring divided by the area of the whole circle.

$$\frac{2\pi r \Delta r}{\pi \cdot R^2}$$

Hence, the expected value of $d$ is

$$
E(d) = \int_{0}^{R}{\frac{2\pi r dr}{\pi \cdot R^2} \cdot r } =
$$

$$
= \int_{0}^{R}{\frac{2 r^2}{ R^2} dr } = \frac{2}{3} (R^3 - 0) / R^2 = \frac{2}{3} R .
$$

This means that the expected value of time is

$$E(t) =\frac{4}{3} R/v$$

But, what does this say about the real world? Well, let's use the same formula, but on the city I live in (Groningen).

![Map of Groningen, radius is 4km](/images/posts/2022-09-02/groningen.png)

By the formula above, the expected value of delivery time is

$$E(t) = \frac{4}{3} \cdot 4000 / v_\text{~m/s}$$

An average e-bike has a velocity of $\approx 6_\text{~m/s}$, plug that in

$$E(t) = \frac{4}{3} \cdot 4000 / 6 = 889 \text{~sec} = 14 \text{~min}$$

To deliver one order! Therefore, on average a person can deliver 4 orders per hour.

$$
$$
