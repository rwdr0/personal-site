---
layout: ../../layouts/ProjectLayout.astro
title: Neuromancer
description: Real-time 3d Convolutional Neural Network Visualilzer.
tags: ["TypeScript", "Svelte", "3D", "Neural Network"]
githubUrl: https://github.com/rudrowo/neuromancer
liveUrl: https://neuromancer.rudro.me
timestamp: 2025-02-24T02:39:03+00:00
featured: true
filename: neuromancer
---

Real-time 3d Convolutional Neural Network Visualilzer

![Preview video](/neuromancer_peek.gif)

## Tech Used

- [Svelte - UI framework](https://svelte.dev/)
- [Threlte - 3D library based on svelte and three.js](https://threlte.xyz)
- [Open Neural Network Exchange - ONNX Web Runtime](https://onnxruntime.ai)

## Architecture

<img src="/neuromancer.workflow.svg"/>

## Available Models

1. [ convolutional neural network for identifying handwritten digits (MNIST dataset) ](https://github.com/onnx/models/tree/main/validated/vision/classification/mnist)

<br>

> This is a work in progress, more model visualizations are coming soon (e.g squeezeNet, alexNet)

### Inspired by

- [These YouTube Videos](https://www.youtube.com/playlist?list=PLYLFPRdcr4f3uq4ji1JgXTt0gITCitG45)
- [Netron](https://github.com/lutzroeder/netron)
- [Transformer Explainer](https://github.com/poloclub/transformer-explainer)
