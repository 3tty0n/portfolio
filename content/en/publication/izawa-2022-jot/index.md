---
title: Threaded Code Generation with a Meta-Tracing JIT Compiler
authors:
- Yusuke Izawa AND Hidehiko Masuhara AND Carl Friedrich Bolz-Tereick AND Youyou Cong
date: '2022-01-01'
publishDate: '2025-03-05T15:27:59.427920Z'
publication_types:
- article-journal
publication: '*Journal of Object Technology*'
doi: 10.5381/jot.2022.21.2.a1
abstract: Language implementation frameworks, e.g., RPython and Truffle/Graal, are
  practical tools for creating efficient virtual machines, including a well-functioning
  just-in-time (JIT) compiler. It is demanding to support multitier JIT compilation
  in such a framework for language developers. This paper presents an idea to generate
  threaded code by reusing an existing meta-tracing JIT compiler, as well as an interpreter
  design for it. Our approach does not largely modify RPython itself but constructs
  an effective interpreter definition to enable threaded code generation in RPython.
  We expect our system to be extended to support multilevel JIT compilation in the
  RPython framework. We measured the potential performance of our threaded code generation
  by simulating its behavior in PyPy. We confirmed that our approach reduced code
  sizes by 80 % and compilation times by 60 % compared to PyPy's JIT compiler on average,
  and ran about 7 % faster than the interpreter-only execution.
links:
- name: arXiv
  url: https://arxiv.org/abs/2106.12496
---
