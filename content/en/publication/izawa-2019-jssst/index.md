---
title: A Stack Hybridization for Meta-hybrid Just-in-time Compilation
authors:
- Yusuke Izawa AND Hidehiko Masuhara AND Tomoyuki Aotani AND Youyou Cong
date: '2019-08-27'
publishDate: '2025-03-05T15:48:28.237263Z'
publication_types:
- paper-conference
publication: '*Proceedings of the 36th JSSST Annual Conference*'
abstract: Meta-interpreter-based language implementation frameworks, such as RPython
  and Truffe/Graal, are convenient tool for implementing state-of-the-art virtual
  machines. Those frameworks are classified into trace-based and method- (or ast-)
  based strategies. RPython uses a trace-based policy to compile straight execution
  paths, while Truffe/Graal leverages method invocation to compile entire method bodies.
  Each approach has its own advantages and disadvantages. The trace-based strategy
  is good at compiling pro- grams with many branching possibilities and able to reduce
  the size of compiled code, but it is weak at programs with varying control-flow.
  The method-based strategy is robust with the latter type of programs but it needs
  thorough method-inlining management to achieve excellent performance. To take advantage
  of both strategies, we propose a meta-hybrid compilation technique to integrate
  trace- and method-based compilations, as well as a proof-of-concept implementation
  called BacCaml. To achieve this goal, we develop a stack hybridization mechanism
  which makes it possible to coordinate trace- and method-based meta JIT compilation.
  In the implementation, we extend RPython's architecture and introduced a special
  syntax for realizing this system in a single interpreter definition.
tags:
- PyPy
- BacCaml
- MinCaml
- RPython
links:
- name: URL
  url: http://jssst.or.jp/files/user/taikai/2019/proceedings.html
---
