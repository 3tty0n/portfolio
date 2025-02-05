---
title: "Threaded Code Generation with a Meta-Tracing JIT Compiler"
authors:
- admin
- Hidehiko Masuhara
- Carl Friedrich Bolz-Tereick
- Youyou Cong
date: "2022-02-01T00:00:00Z"
doi: "10.5381/jot.2022.21.2.a1."

# Schedule page publish date (NOT publication's date).
publishDate: "2022-02-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Journal of Object Technology, 1*(1)"
publication_short: ""

abstract: Language implementation frameworks, e.g., RPython and Truffle/Graal, are practical tools for creating efficient virtual machines, including a well-functioning just-in-time (JIT) compiler. It is demanding to support multitier JIT compilation in such a framework for language developers. This paper presents an idea to generate threaded code by reusing an existing meta-tracing JIT compiler, as well as an interpreter design for it. Our approach does not largely modify RPython itself but constructs an effective interpreter definition to enable threaded code generation in RPython. We expect our system to be extended to support multilevel JIT compilation in the RPython framework. We measured the potential performance of our threaded code generation by simulating its behavior in PyPy. We confirmed that our approach reduced code sizes by 80% and compilation times by 60 % compared to PyPy’s JIT compiler on average, and ran about 7% faster than the interpreter-only execution.

# Summary. An optional shortened abstract.
summary: Language implementation frameworks, e.g., RPython and Truffle/Graal, are practical tools for creating efficient virtual machines, including a well-functioning just-in-time (JIT) compiler. It is demanding to support multitier JIT compilation in such a framework for language developers. This paper presents an idea to generate threaded code by reusing an existing meta-tracing JIT compiler, as well as an interpreter design for it. Our approach does not largely modify RPython itself but constructs an effective interpreter definition to enable threaded code generation in RPython. We expect our system to be extended to support multilevel JIT compilation in the RPython framework. We measured the potential performance of our threaded code generation by simulating its behavior in PyPy. We confirmed that our approach reduced code sizes by 80% and compilation times by 60 % compared to PyPy’s JIT compiler on average, and ran about 7% faster than the interpreter-only execution.

tags:
- meta-compiler framework
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://www.jot.fm/issues/issue_2022_02/article1.pdf
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [Adaptive RPython]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!--

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).

-->
