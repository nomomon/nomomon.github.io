---
title: "Molecule Energy Estimator"
description: "The chemical and physical properties of a molecule are determined not only by its structural formula, but also by its conformation – positions of atoms in 3d space."
imageURL: "/images/projects/rucode-5.0-preview.gif"
startDate: "1 Apr, 2022"
endDate: "1 Jul, 2022"
sourceLink: "https://github.com/nomomon/molecule-energy-prediction"
demoLink: ""
tools:
  - "Tensoflow"
  - "Pandas"
  - "Numpy"
achievements: 2
---

![banner](/images/projects/rucode-5.0-preview.gif)

This project started off from me participating in the [RuCode 5.0](https://rucode.net/) hackathon and then led me to write a research report on the topic. Initially, the problem and data were provided by [Artificial Intelligence Research Institute](https://airi.net/).

The chemical and physical properties of a molecule are determined not only by its structural formula, but also by its conformation – positions of atoms in 3d space. An important task when working with molecules is the estimation of their energies. Currently avaliable approxiamtion methods, such as [DFT](https://en.wikipedia.org/wiki/Density_functional_theory), have high accuracy but are computationally expensive.

One proven approach for predicting conformational energies and other chemical and physical properties is the use of GNNs (Graphed Neural Networks) [[Schrödinger network](https://arxiv.org/abs/1706.08566), [Directional Message Passing for Molecular Graphs](https://arxiv.org/abs/2003.03123)].

In this competition, you need to learn how to predict energy from a three-dimensional representation of a molecule. You will be given a set of conformations for a subsample of molecules from the [MOSES](https://github.com/molecularsets/moses) dataset. For some of the conformations, the energy value will also be given.

## Solution

The idea of the initial solution was as follows:

1. Energy has two parts: kinetic and potential energy. The kinetic energy will be assumed to be zero because there is no data on molecule is moving. The potential energy is the sum of the potential energies of all the bonds in the molecule. Or, in other words, the potential energy is the sum of function of these two atoms and the distance between them.

$$E = \sum_{a_i, a_j \in \text{molecule}}{f(a_i, a_j, d_{(i, j)})}$$

2. Energy of a bond is defined in small ranges. So, I made an assumption that it is constant for any two types of atoms.

3. To determine if there is a bond, I checked if the distance between two atoms is smaller than the longest bond length possible.

4. Now, the number of each bond can be passed to a neural network to determine the energy of the molecule. The assumption is that, the neural network will determine the energy of each bond and use that to predict the energy of the molecule.

This is the solution I used in the competition and got to the top 7th place. You can listen to my solution on the [livestream](https://www.youtube.com/watch?v=jGRQjQZg4Ck&t=8577s) (only in russian).

<iframe width="560" height="315" style="display:block; margin:auto; margin-bottom:1em; max-width:100%;" src="https://www.youtube.com/embed/jGRQjQZg4Ck?start=8577" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

After the competition, I did deeper research into the problem and found that the problem is not simple. The problem is that the energy of a bond is not a constant. Actually, bonds has multiple **descrete** energy levels, which are determined by the distance between two atoms.

So, I used another way of determining the bond energy level with a constraint satisfaction solver. I proposed new task to my team and they we solved it. Passing the bond energy levels to the neural network gave better results.

## Achievements

- [7th place in Yandex RuCode 5.0](https://www.kaggle.com/competitions/molecular-energy-estimation-rucode/leaderboard)

- [Approximating the energy of molecules from their three-dimensional representations using neural networks](https://nomomon.github.io/molecule-energy-prediction/report/report.pdf)
