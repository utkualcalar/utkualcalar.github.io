---
title:          "Consistency Models as Plug-and-Play Priors for Inverse Problems"
date:           2025-09-27 00:01:00 +0800
selected:       false
pub:            "arXiv preprint"
abstract: >-
  We propose <strong>PnP-CM</strong>, a plug-and-play diffusion solver that reinterprets consistency models (CMs) as proximal operators of a prior, enabling fast and flexible inverse problem solving. Built on PnP-ADMM with conjugate gradient acceleration,
  PnP-CM further introduces noise injection and momentum for improved convergence while preserving stability. Applied to inpainting, super-resolution, deblurring, and MRI reconstruction, <i>including the first CM trained on MRI datasets</i>, PnP-CM achieves
  high-quality reconstructions in as few as 4 NFEs and produces meaningful results in just 2 steps, outperforming existing CM-based solvers.
cover:          /assets/pub_cover/PnPCM_thumbnail.jpg
authors:
  - Merve Gulle*
  - Junno Yun*
  - Yasar Utku Alcalar*
  - Mehmet Akcakaya
links:
  Paper: https://arxiv.org/pdf/2509.22736
---
