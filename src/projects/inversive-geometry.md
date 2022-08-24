---
title: Inversive Geometry
description: "This is a simple React.js app that demonstrates the inversive geometry of a point in a circle."
socialImage: "/images/projects/inversive-geometry.jpeg"
startDate: "12 Aug, 2022"
endDate: "14 Aug, 2022"
demoLink: "https://nomomon.github.io/inversive-geometry/"
sourceLink: "https://github.com/nomomon/inversive-geometry"
tools:
  - "React"
  - "Node.js"
---

Geometrical inversion is defined as

> For some point $O$, and radius $R$, geometrical inversion – is a plane transformation where each point $P$ is mapped to a point $P'$, which lies on ray $OP$ and satisfies
> $$OP \times OP' = R^2.$$

This gives rise to an amazing tool to solve olympiad geometric problems.

Back in highschool, I tried to make a program that performs inversion on images. I did succeed, but it seems I lost the code. In general _it was not user-friendly_ because it worked through the terminal.

So, here I am, recreating my dream program as a webapp. This was an interesting project and along the way I came up with a nice optimization that makes the code easy to read.

Working with pixels made the coordinates descrete and to improve the quality of the image I took an average of pixel colors that were mapped to a single point. Instead of taking their mean, I took the root mean squared because that is how pixel colors should be added [[1]](https://www.youtube.com/watch?v=LKnqECcg6Gw&ab_channel=minutephysics).

## A few notes

- If you look at the inversed image, you will see that there are spots with missing pixels. This is because these pixels were mapped outside of the image boudaries (and hence lost).
- The image pixelates quickly, this is because when inverted, multiple pixels outside the circle of inversion are mapped to a pixel inside the circle.
- For the future, it would be cool to add an animation that shows how each pixel is translated.

## Demo

This is an example of how the image is inverted. What you can notice is ...

- Points inside the circle are mapped to points outside the circle.
- By the property of inversion, points $A$ and $A'$ change places, same goes for $B$ and $B'$.
- Points on the dotted circle change thier place, but the dotted circle as a shape doesnot change its place.
- Lines that were not passing through the center of inversion transformed into semicircles that do pass through the center of inversion.

![demo](https://github.com/nomomon/inversive-geometry/raw/master/demo.gif)
