---
title: 'Amalgamating different JIT compilations in a meta-tracing JIT compiler framework'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Hidehiko Masuhara

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2020-11-15T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2020-11-15T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In Proceedings of the 16th ACM SIGPLAN International Symposium on Dynamic Languages
publication_short: In DLS 2020

abstract: |
    Most virtual machines employ just-in-time (JIT) compilers to achieve high-performance. Trace-based compilation and method-based compilation are two major compilation strategies in JIT compilers. In general, the former excels in compiling programs with more in-depth method calls and more dynamic branches, while the latter is suitable for a wide range of programs. Some previous studies have suggested that each strategy has its advantages and disadvantages, and there is no clear winner.

    In this paper, we present a new approach, namely, the meta-hybrid JIT compilation strategy. It combines trace-based and method-based compilations to utilize the advantages of both strategies. Moreover, it is realized as a meta JIT compiler framework; thus, we can generate a VM with a hybrid JIT compiler that can apply different program parts by merely writing an interpreter with our framework.

    We chose to extend a meta-tracing JIT compiler and supported the two compilations on it. As a prototype, we implemented a simple meta-tracing JIT compiler framework called BacCaml based on the MinCaml compiler by following RPython’s architecture.

    We evaluated its performance by creating a small functional programming language with BacCaml and running microbenchmark programs. Furthermore, we performed a synthetic experiment to confirm that there are programs that run faster by hybrid compilation.

# Summary. An optional shortened abstract.
summary: |
    Most virtual machines employ just-in-time (JIT) compilers to achieve high-performance. Trace-based compilation and method-based compilation are two major compilation strategies in JIT compilers. In general, the former excels in compiling programs with more in-depth method calls and more dynamic branches, while the latter is suitable for a wide range of programs. Some previous studies have suggested that each strategy has its advantages and disadvantages, and there is no clear winner.

    In this paper, we present a new approach, namely, the meta-hybrid JIT compilation strategy. It combines trace-based and method-based compilations to utilize the advantages of both strategies. Moreover, it is realized as a meta JIT compiler framework; thus, we can generate a VM with a hybrid JIT compiler that can apply different program parts by merely writing an interpreter with our framework.

    We chose to extend a meta-tracing JIT compiler and supported the two compilations on it. As a prototype, we implemented a simple meta-tracing JIT compiler framework called BacCaml based on the MinCaml compiler by following RPython’s architecture.

    We evaluated its performance by creating a small functional programming language with BacCaml and running microbenchmark programs. Furthermore, we performed a synthetic experiment to confirm that there are programs that run faster by hybrid compilation.

tags:
  - meta-compiler framework

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
#url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - Adaptive RPython

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

{{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
