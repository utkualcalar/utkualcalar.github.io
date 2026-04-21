---
title:          "A Self-Validation Metric for Referenceless Image Quality Assessment of Computational Imaging Algorithms"
date:           2025-10-25 00:01:00 +0800
selected:       false
pub:            "59th Asilomar Conference on Signals, Systems, and Computers"
pub_date:       "2025"
abstract: >-
   Image quality assessment (IQA) is imperative in the evaluation of computational imaging algorithms, especially those based on artificial intelligence (AI). Such assessment often relies on comparisons with a reference image through metrics such as peak signal-to-noise ratio (PSNR), structural similarity index measure (SSIM), or other perceptual distance measures. This poses challenges for IQA in a number of medical imaging scenarios, where reference data cannot be acquired due to system, physiological, or time constraints. In such settings, expert image readings have become the norm, but these are both subjective and time-consuming, making them infeasible for large-scale use. In this work, we propose a self-validation metric for referenceless IQA of computational imaging algorithms, with a focus on magnetic resonance imaging (MRI). Inspired by the recent success of holdout/masking strategies in self-supervised training in computational imaging, we develop a novel strategy for masking out parts of the acquired data and calculating the self-validation metric on these points at the output of the algorithm. Experiments using physics-driven AI reconstruction algorithms show that the proposed metric is strongly correlated with standard metrics that rely on reference images.
cover:          /assets/pub_cover/Asilomar1_thumbnail.jpg
authors:
- Pranav Salapaka
- Yasar Utku Alcalar
- Burhaneddin Yaman
- Mehmet Akcakaya
links:
  Paper: https://ieeexplore.ieee.org/document/11443808
---
