---
title:          "Zero-Shot Adaptation for Approximate Posterior Sampling of Diffusion Models in Inverse Problems"
date:           2024-07-03 00:01:00 +0800
selected:       true
pub:            "European Conference on Computer Vision (ECCV)"
pub_date:       "2024"
abstract: >-
  We introduce  <strong>ZAPS</strong> (Zero-shot Approximate Posterior Sampling), a diffusion-based framework for solving inverse problems with faster inference and improved robustness. Unlike conventional diffusion models that rely on many steps and empirically tuned weights, ZAPS fixes the number of sampling steps and learns log-likelihood weights at each <i>irregular timestep</i> via a physics-guided zero-shot loss. To further reduce computational burden, we approximate the prior Hessian through a learnable diagonalization, enabling efficient training and inference without sacrificing accuracy. Applied to deblurring, inpainting, and super-resolution, ZAPS accelerates inference and improves reconstruction quality over diffusion posterior sampling baselines.
cover:          /assets/pub_cover/ECCV_thumbnail.jpg
authors:
  - Yasar Utku Alcalar
  - Mehmet Akcakaya
links:
  Paper: https://arxiv.org/pdf/2407.11288
---
