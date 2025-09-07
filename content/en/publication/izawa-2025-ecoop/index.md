---
title: A Lightweight Method for Generating Multi-Tier JIT Compilation Virtual Machine
  with a Meta-Tracing Compiler Framework
authors:
- Yusuke Izawa AND Hidehiko Masuhara AND Carl Friedrich Bolz-Tereick
date: '2025-06-30'
publishDate: '2025-09-07T20:31:55.305512Z'
publication_types:
- paper-conference
publication: '*39th European Conference on Object-Oriented Programming (ECOOP 2025)*'
doi: 10.4230/LIPIcs.ECOOP.2025.16
abstract: ' Meta-compiler frameworks can generate high-performance virtual machines
  (VMs) from interpreter definitions. Despite the success of frameworks such as RPython
  and Graal/Truffle, creating multi-tier JIT compilation VMs within these frameworks
  remains challenging. Traditional high-performance VMs address this by using multiple  compilers
  that are optimized for different trade-offs between compilation speed and code quality.
  Replicating this structure in meta-compiler frameworks, however, involves  substantial
  development effort.  We propose an approach, in the context of a meta-compiler framework,
  to adding a lightweight compiler that takes a different compilation strategy from
  an existing  heavyweight compiler without requiring a new JIT compiler backend.
  By treating interpreter definitions as not only specifications for language semantics
  but also as compilation strategies, our approach enables RPython to generate the
  essential components for a multi-tier JIT compilation VM. We validate our approach
  with 2SOM, a two-level compilation VM for Simple Object Machine. 2SOM incorporates
  two JIT compilers: a tier-1 threaded code generator that quickly produces subroutine
  threaded code for warm-up phase, and tier-2 tracing JIT compiler that optimizes
  frequently executed loops.  Our performance evaluation, using a program with a realistic
  workload,  showed that 2SOM improved warm-up performance by 15% from an RPython-based
  VM in compensation for a peak performance reduction of merely 5%. '
tags:
- JIT compiler
- Adaptive RPython
featured: true
links:
- name: URL
  url: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2025.16
---
