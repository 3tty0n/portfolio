---
title: "A Lightweight Method for Generating Multi-Tier JIT Compilation Virtual Machine in a Meta-Tracing Compiler Framework"
date: 2025-02-28T00:00:00Z
authors:
- admin
- Hidehiko Masuhara
- Carl Friedrich Bolz-Tereick
doi: ''
featured: true

publicationDate: '2025-02-28T00:00:00Z'

publication_types: ['paper-conference']
publication: In Proceedings of the 39th European Conference on Object-Oriented Programming
publication_short: In ECOOP 2025
abstract: |
    Meta-compiler frameworks can generate high-performance virtual machines (VMs) from interpreter definitions. Despite the success of frameworks such as RPython and Graal/Truffle, creating multi-tier JIT compilation VMs within these frameworks remains challenging. Traditional high-performance VMs address this by using multiple compilers that are optimized for different trade-offs between compilation speed and code quality. Replicating this structure in meta-compiler frameworks, however, involves substantial development effort.

    We propose an approach, in the context of a meta-compiler framework, to adding a lightweight compiler that takes a different compilation strategy from an existing heavyweight compiler without requiring a new JIT compiler backend. By treating interpreter definitions as not only specifications for language semantics but also as compilation strategies, our approach enables RPython to generate the essential components for a multi-tier JIT compilation VM.

    We validate our approach with 2SOM, a two-level compilation VM for Simple Object Machine. 2SOM incorporates two JIT compilers: a tier-1 threaded code generator that quickly produces subroutine threaded code for warm-up phase, and tier-2 tracing JIT compiler that optimizes frequently executed loops. Our performance evaluation, using a program with a realistic workload, showed that 2SOM improved warm-up performance by 15\% from an RPython-based VM in compensation for a peak performance reduction of merely 5\%.
summary: |
    Meta-compiler frameworks can generate high-performance virtual machines (VMs) from interpreter definitions. Despite the success of frameworks such as RPython and Graal/Truffle, creating multi-tier JIT compilation VMs within these frameworks remains challenging. Traditional high-performance VMs address this by using multiple compilers that are optimized for different trade-offs between compilation speed and code quality. Replicating this structure in meta-compiler frameworks, however, involves substantial development effort.

    We propose an approach, in the context of a meta-compiler framework, to adding a lightweight compiler that takes a different compilation strategy from an existing heavyweight compiler without requiring a new JIT compiler backend. By treating interpreter definitions as not only specifications for language semantics but also as compilation strategies, our approach enables RPython to generate the essential components for a multi-tier JIT compilation VM.

    We validate our approach with 2SOM, a two-level compilation VM for Simple Object Machine. 2SOM incorporates two JIT compilers: a tier-1 threaded code generator that quickly produces subroutine threaded code for warm-up phase, and tier-2 tracing JIT compiler that optimizes frequently executed loops. Our performance evaluation, using a program with a realistic workload, showed that 2SOM improved warm-up performance by 15\% from an RPython-based VM in compensation for a peak performance reduction of merely 5\%.
tags:
- meta-compielr framework

projects:
- Adaptive RPython

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
---
