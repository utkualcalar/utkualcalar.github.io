---
title:          "PnP-CM: Consistency Models as Plug-and-Play Priors for Inverse Problems"
date:           2026-02-21 00:01:00 +0800
selected:       true
pub:            "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)"
pub_date:       "2026"
abstract: >-
  We propose <strong>PnP-CM</strong>, a plug-and-play solver that reinterprets consistency models (CMs) as proximal operators of a learned prior, enabling their seamless integration into plug-and-play (PnP) frameworks. Specifically, PnP-CM is an ADMM-based PnP solver that provides a unified approach to solving a wide range of inverse problems. This is, to the best of our knowledge, the first work to combine consistency models with plug-and-play methods. By incorporating noise perturbations and momentum-based updates, our method is particularly effective in the low-NFE regime. We evaluate PnP-CM on a range of linear and nonlinear inverse problems, including inpainting, super-resolution, Gaussian and nonlinear deblurring, phase retrieval, JPEG restoration, and MRI reconstruction, <i>including the first CM trained on MRI datasets</i>. PnP-CM achieves high-quality reconstructions in as few as 4 NFEs and produces meaningful results in just 2 steps, outperforming existing CM-based solvers.
cover:          /assets/pub_cover/PnP-CM_thumbnail_CVPR26.jpg
authors:
  - Yasar Utku Alcalar*
  - Merve Gulle*
  - Junno Yun*
  - Mehmet Akcakaya
links:
  Paper: https://arxiv.org/pdf/2509.22736
  Code: https://github.com/MerveGulle/PnP-CM
---
