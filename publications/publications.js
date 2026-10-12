// The only publication source. Add/remove an object; no manifest or build step.
// Papers are grouped by year (newest first); order within each year follows this list.
// selected: true puts a paper in Selected AND All. false keeps it in All only.
const publications = [
  {
    "title": "Harnessing Magnitude-Only and Complex Measurements for Improved Dynamic MRI Reconstruction with Learned Priors",
    "year": 2026,
    "venue": "IEEE TBME",
    "type": "Journal",
    "authors": [
      "Mahdi Saberi",
      "Yasar Utku Alcalar",
      "Merve Gulle",
      "Chetan Shenoy",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "summary": " ",
    "links": {
      "Paper": "https://arxiv.org/pdf/2608.18036",
    }
  },
  {
    "title": "UDT: Reconciling U-Nets and Diffusion Transformers with Data-Adaptive Token Reduction",
    "year": 2026,
    "venue": "NeurIPS",
    "authors": [
      "Junno Yun",
      "Yasar Utku Alcalar",
      "Mehmet Akcakaya"
    ],
    "selected": true,
    "highlight": "Spotlight · <0.9%",
    "summary": "A U-shaped diffusion transformer that uses data-adaptive token merging for efficient multi-scale processing while preserving the transformer token dimension.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2608.01298",
      "Code": "https://github.com/JN-Yun/UDT"
    }
  },
  {
    "title": "Consistency Models for Fast MRI Using Regularization by Denoising",
    "year": 2026,
    "venue": "IEEE ISBI",
    "authors": [
      "Merve Gulle*",
      "Junno Yun*",
      "Yasar Utku Alcalar",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "",
    "summary": "We investigate consistency models as fast learned priors for accelerated MRI reconstruction using a regularization-by-denoising formulation, targeting accurate reconstruction with substantially fewer model evaluations.",
    "links": {
      "Paper": "https://ieeexplore.ieee.org/document/11516008"
    }
  },
  {
    "title": "PnP-CM: Consistency Models as Plug-and-Play Priors for Inverse Problems",
    "year": 2026,
    "venue": "CVPR",
    "authors": [
      "Yasar Utku Alcalar*",
      "Merve Gulle*",
      "Junno Yun*",
      "Mehmet Akcakaya"
    ],
    "selected": true,
    "highlight": "",
    "summary": "A plug-and-play inverse-problem solver that uses consistency models as learned priors, enabling high-quality reconstruction with very few network evaluations.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2509.22736",
      "Code": "https://github.com/MerveGulle/PnP-CM"
    }
  },
  {
    "title": "No Alignment Needed for Generation: Learning Linearly Separable Representations in Diffusion Models",
    "year": 2025,
    "venue": "arXiv",
    "authors": [
      "Junno Yun",
      "Yasar Utku Alcalar",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "",
    "summary": "Encoder-free geometric regularization that improves the training efficiency and representation quality of flow-based diffusion transformers without external visual encoders.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2509.21565",
      "Code": "https://github.com/JN-Yun/LSEP"
    }
  },
  {
    "title": "A Self-Validation Metric for Referenceless Image Quality Assessment of Computational Imaging Algorithms",
    "year": 2025,
    "venue": "Asilomar",
    "authors": [
      "Pranav Salapaka",
      "Yasar Utku Alcalar",
      "Burhaneddin Yaman",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "",
    "summary": "Image quality assessment (IQA) is essential for evaluating computational imaging algorithms, but standard metrics like PSNR and SSIM require reference images that are often unavailable in medical imaging. As a result, subjective and time-intensive expert evaluations are commonly used instead. In this work, we propose a referenceless, self-validation metric that masks portions of acquired data and evaluates reconstruction performance on those regions. Experiments in MRI show the metric correlates well with traditional reference-based measures.",
    "links": {
      "Paper": "https://ieeexplore.ieee.org/document/11443808"
    }
  },
  {
    "title": "Phase-Adaptive Averaging and Score-Based Denoising for Inverse Problems in Diffusion Imaging",
    "year": 2025,
    "venue": "Asilomar",
    "authors": [
      "Toygan Kilic",
      "Yasar Utku Alcalar",
      "Steen Moeller",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "",
    "summary": "Diffusion magnetic resonance imaging maps brain connectivity but requires many diffusion-weighted images, making high-resolution scans challenging due to low SNR and acceleration limits. Existing AI methods offer limited improvements because of SNR variation across b-values and phase inconsistencies. In this work, we introduced a loss-augmentation strategy that boosts high-b-value SNR using phase-adapted averaging and score-based denoising. Experiments show improved reconstruction quality compared to conventional and standard AI approaches.",
    "links": {
      "Paper": "https://ieeexplore.ieee.org/document/11443707"
    }
  },
  {
    "title": "Automated Tuning for Diffusion Inverse Problem Solvers without Generative Prior Retraining",
    "year": 2025,
    "venue": "IEEE CAMSAP",
    "authors": [
      "Yasar Utku Alcalar",
      "Junno Yun",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "Best Paper Finalist",
    "summary": "We propose Zero-shot Adaptive Diffusion Sampling (ZADS), a self-supervised test-time optimization framework that adaptively tunes data fidelity weights at irregular timesteps without retraining. Unlike our earlier ZAPS method for natural image restoration, which used all acquired measurements, ZADS is tailored for large-scale inverse problems where stronger CG-based updates risk overfitting, motivating hold-out masking. On the fastMRI knee dataset, ZADS achieves state-of-the-art by outperforming recent diffusion-based methods, delivering high-fidelity reconstructions across varying noise schedules and acquisition settings.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2509.09880"
    }
  },
  {
    "title": "Fast MRI for All: Bridging Access Gaps by Training without Raw Data",
    "year": 2025,
    "venue": "NeurIPS",
    "authors": [
      "Yasar Utku Alcalar",
      "Merve Gulle",
      "Mehmet Akcakaya"
    ],
    "selected": true,
    "highlight": "Spotlight · <3.2%",
    "summary": "A data-efficient framework that trains accelerated MRI reconstruction networks from routine clinical images without requiring raw k-space training data.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2411.13022",
      "Code": "https://github.com/ualcalar17/CUPID"
    }
  },
  {
    "title": "Time-Embedded Algorithm Unrolling for Computational MRI",
    "year": 2025,
    "venue": "NeurIPS",
    "authors": [
      "Junno Yun",
      "Yasar Utku Alcalar",
      "Mehmet Akcakaya"
    ],
    "selected": true,
    "highlight": "",
    "summary": "Time-embedded algorithm unrolling makes MRI reconstruction networks iteration-aware without requiring a separate network at every unrolled step.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2510.16321",
      "Code": "https://github.com/JN-Yun/TE-Unrolling-MRI"
    }
  },
  {
    "title": "Edge Computing for Physics-Driven AI in Computational MRI: A Feasibility Study",
    "year": 2025,
    "venue": "IEEE FiCloud",
    "authors": [
      "Yasar Utku Alcalar",
      "Yu Cao",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "",
    "summary": "We propose a physics-driven AI (PD-AI) reconstruction framework optimized for FPGA-based edge computing to address the massive data demands of high-resolution MRI. Our approach leverages  8-bit complex quantization and eliminates redundant FFT/IFFT operations, improving hardware efficiency without sacrificing reconstruction quality. Results demonstrate performance comparable to  conventional PD-AI methods and superior to standard clinical techniques, enabling high-resolution MRI on resource-constrained devices.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2506.03183"
    }
  },
  {
    "title": "Sparsity-Driven Parallel Imaging Consistency for Improved Self-Supervised MRI Reconstruction",
    "year": 2025,
    "venue": "IEEE ICIP",
    "authors": [
      "Yasar Utku Alcalar",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "Spotlight Oral · <3.5%",
    "summary": "In this work, we introduce a physics-driven deep learning (PD-DL) approach for rapid MRI reconstruction without fully sampled reference data. Our method, SPIC-SSDU, enhances self-supervised training with perturbation-based consistency checks in sparse domains, extending conventional k-space masking with a novel term that evaluates the model’s ability to predict carefully designed additive perturbations. This improves robustness at high acceleration rates, reducing artifacts and noise. Tests on the fastMRI knee and brain datasets show improved image quality over existing self-supervised techniques, achieving performance comparable to supervised learning.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2505.24136"
    }
  },
  {
    "title": "Zero-Shot Adaptation for Approximate Posterior Sampling of Diffusion Models in Inverse Problems",
    "year": 2024,
    "venue": "ECCV",
    "authors": [
      "Yasar Utku Alcalar",
      "Mehmet Akcakaya"
    ],
    "selected": true,
    "highlight": "",
    "summary": "Zero-shot adaptation of diffusion posterior sampling that learns data-fidelity weights at test time for faster, robust inverse-problem reconstruction.",
    "links": {
      "Paper": "https://arxiv.org/pdf/2407.11288"
    }
  },
  {
    "title": "A Convex Compressibility-Inspired Unsupervised Loss Function for Physics-Driven Deep Learning Reconstruction",
    "year": 2024,
    "venue": "IEEE ISBI",
    "authors": [
      "Yasar Utku Alcalar",
      "Merve Gulle",
      "Mehmet Akcakaya"
    ],
    "selected": false,
    "highlight": "",
    "summary": "We propose a convex loss function for training physics-driven deep learning (PD-DL) models in fast MRI reconstruction, inspired by statistical image processing and compressed sensing. The loss  evaluates image compressibility with a reweighted ℓ1 norm while enforcing data fidelity, enabling supervised, unsupervised, and zero-shot training.  PD-DL networks trained with this formulation outperform conventional methods and achieve quality comparable to existing supervised and unsupervised approaches.",
    "links": {
      "Paper": "https://ieeexplore.ieee.org/document/10635138"
    }
  }
];
