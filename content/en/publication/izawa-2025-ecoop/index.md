---
title: A Lightweight Method for Generating Multi-Tier JIT Compilation Virtual Machine
  with a Meta-Tracing Compiler Framework

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`),
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Yusuke Izawa AND Hidehiko Masuhara AND Carl Friedrich Bolz-Tereick

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2025-06-30'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2025-03-05T15:41:13.822165Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- paper-conference

# Publication name and optional abbreviated publication name.
publication: '*39th European Conference on Object-Oriented Programming (ECOOP 2025)*'
publication_short: ''

doi: ''

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

# Summary. An optional shortened abstract.
summary: ''

tags:
- JIT compiler
- Adaptive RPython

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

