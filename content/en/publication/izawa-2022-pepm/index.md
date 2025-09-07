---
title: Two-level Just-in-Time Compilation with One Interpreter and One Engine
authors:
- Yusuke Izawa
- Hidehiko Masuhara
- Carl Friedrich Bolz-Tereick
date: '2022-01-17'
publishDate: '2025-09-07T20:31:55.115664Z'
publication_types:
- paper-conference
publication: '*The ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation*'
abstract: Modern, powerful virtual machines such as those running Java or JavaScript
  support multi-tier JIT compilation and optimization features to achieve their high
  performance. However, implementing and maintaining several compilers/optimizers
  that interact with each other requires hard-working VM developers. In this paper,
  we propose a technique to realize two-level JIT compilation in RPython without implementing
  several interpreters or compilers from scratch. As a preliminary realization, we
  created adaptive RPython, which performs both baseline JIT compilation based on
  threaded code and tracing JIT compilation. We also implemented a small programming
  language with it. Furthermore, we preliminarily evaluated the performance of that
  small language, and our baseline JIT compilation ran 1.77x faster than the interpreter-only
  execution. Furthermore, we observed that when we apply an optimal JIT compilation
  for different target methods, the performance was mostly the same as the one optimizing
  JIT compilation strategy, saving about 40 % of the compilation code size.
links:
- name: arXiv
  url: https://arxiv.org/abs/2201.09268
- name: URL
  url: 
    https://popl22.sigplan.org/details/pepm-2022-papers/3/Two-level-Just-in-Time-Compilation-with-One-Interpreter-and-One-Engine
---
