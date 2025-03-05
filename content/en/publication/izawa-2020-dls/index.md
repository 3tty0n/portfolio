---
title: Amalgamating Different JIT Compilations in a Meta-Tracing JIT Compiler Framework

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`),
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Yusuke Izawa
- Hidehiko Masuhara

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2020-11-17'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2025-03-05T15:41:13.836297Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- paper-conference

# Publication name and optional abbreviated publication name.
publication: '*Proceedings of the 16th ACM SIGPLAN International Symposium on Dynamic
  Languages*'
publication_short: ''

doi: 10.1145/3426422.3426977

abstract: Most virtual machines employ just-in-time (JIT) compilers to achieve high-performance.
  Trace-based compilation and method-based compilation are two major compilation strategies
  in JIT compilers. In general, the former excels in compiling programs with more
  in-depth method calls and more dynamic branches, while the latter is suitable for
  a wide range of programs. Some previous studies have suggested that each strategy
  has its advantages and disadvantages, and there is no clear winner.  In this paper,
  we present a new approach, namely, the meta-hybrid JIT compilation strategy. It
  combines trace-based and method-based compilations to utilize the advantages of
  both strategies. Moreover, it is realized as a meta JIT compiler framework; thus,
  we can generate a VM with a hybrid JIT compiler that can apply different program
  parts by merely writing an interpreter with our framework.  We chose to extend a
  meta-tracing JIT compiler and supported the two compilations on it. As a prototype,
  we implemented a simple meta-tracing JIT compiler framework called BacCaml based
  on the MinCaml compiler by following RPython’s architecture.  We evaluated its performance
  by creating a small functional programming language with BacCaml and running microbenchmark
  programs. Furthermore, we performed a synthetic experiment to confirm that there
  are programs that run faster by hybrid compilation.

# Summary. An optional shortened abstract.
summary: ''

tags:
- JIT compiler
- RPython
- meta-tracing JIT compiler
- language implementation framework

# Display this page in a list of Featured pages?
featured: true

# Links
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# Publication image
# Add an image named `featured.jpg/png` to your page's folder then add a caption below.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects: ['internal-project']` links to `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
---

