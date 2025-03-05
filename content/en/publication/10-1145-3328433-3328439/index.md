---
title: Extending a Meta-Tracing Compiler to Mix Method and Tracing Compilation
authors:
- Yusuke Izawa
- Hidehiko Masuhara
- Tomoyuki Aotani
date: '2019-04-02'
publishDate: '2025-03-05T15:27:59.455453Z'
publication_types:
- paper-conference
publication: '*Proceedings of the Conference Companion of the 3rd International Conference
  on Art, Science, and Engineering of Programming*'
doi: 10.1145/3328433.3328439
abstract: Meta-interpreter-based just-in-time compiler frameworks provide a convenient
  way for language designers to implement efficient virtual machines. Those frameworks
  either employ tracing-based or method- (or partial evaluation) based strategies,
  which have their own pros and cons. This paper proposes an approach to enable both
  tracing- and method-based compilation so that the runtime can selectively apply
  an appropriate strategy to different parts of a program. The proposal basically
  extends a meta-tracing compiler to method-based compilation by roll backing at conditional
  branches, trace-splitting at loop entries, and not following at function calls.
  As a proof-of-concept, we implemented a tiny meta-tracing compiler in MinCaml by
  following the RPython's architecture and extended it to support both tracing- and
  method-based compilation.
tags:
- language implementation frameworks
- tracing JIT compilation
- RPython
---
