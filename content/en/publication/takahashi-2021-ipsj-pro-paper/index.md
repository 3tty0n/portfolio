---
title: An approach to collect object graphs for data-structure live programming based
  on a language implementation framework
authors:
- Shusuke Takahashi AND Yusuke Izawa AND Hidehiko Masuhara AND Youyou Cong
date: '2022-01-01'
publishDate: '2025-03-05T15:27:59.420776Z'
publication_types:
- article-journal
publication: '*Journal of Information Processing*'
doi: 10.2197/ipsjjip.30.451
abstract: Data-structure live programming environments execute a program, collect
  object graphs (objects and their mutual references) created and modified during
  the execution, and visualize the graphs as a node-link diagram. Existing implementations
  collect object graphs by instrumenting checkpoints, which traverse reachable objects,
  into every necessary points in the program. Since the cost of each checkpoint is
  proportional to the number of existing objects, its overhead can be huge. This paper
  proposes (1) a method to collect object graphs by recording object creation and
  modification events into an efficient data structure, and (2) to implement the object
  graph collection mechanism by extending a language implemented on top of a language
  implementation framework.  As a result, the overhead of object graph collection
  is merely proportional to the number of object creation/modification operations
  in total. We implemented the proposed mechanism for the Kanon data-structure live
  programming environment by extending GraalJS, which is a JavaScript implementation
  on the Graal/Truffle language implementation framework. We compared our new implementation
  against the original Kanon, which is based on checkpointing, and confirmed that
  our implementation improves program execution (and data collection) speed, and has
  sufficiently small overheads to reconstruct object graphs.
---
