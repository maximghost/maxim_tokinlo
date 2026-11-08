---
title: "ghoststructure, my Python data structures library"
tag: "Open source"
date: 2026-11-08
status: "In development · 30%"
summary: "An open-source library of classic data structures in modern Python: typed, tested and documented. PyPI release planned for the end of November 2026."
progress: 30
stack: ["Python", "uv", "pytest", "Hypothesis", "mypy", "Ruff"]
links:
  - { label: "View on GitHub", url: "https://github.com/maximghost/ghoststructure" }
highlights:
  - { label: "Type", value: "Open-source library" }
  - { label: "Language", value: "Python 3.12, fully typed" }
  - { label: "Quality", value: "100% branch coverage, strict mypy" }
  - { label: "Release", value: "PyPI, by the end of November 2026" }
steps:
  - { label: "Foundations and quality tooling", state: done }
  - { label: "Dynamic array", state: current }
  - { label: "Linked lists, stacks and queues", state: next }
  - { label: "Hashing, trees, heaps and graphs", state: next }
  - { label: "Release on PyPI", state: next, note: "End of November 2026" }
order: 2
---

## The project

ghoststructure reimplements the classic data structures in modern Python. Two goals: offer a clean, educational library, and consolidate my own knowledge, one structure at a time.

## The bar

- **Python 3.12** and its modern generics (PEP 695), checked by **mypy in strict mode**.
- **pytest tests** with 100% branch coverage, plus **property-based tests with Hypothesis** that compare each structure against a reference.
- **Ruff** for style and code quality, and Google-style docstrings.
- **uv** to manage the project, a `src/` layout, and types shipped with the package (`py.typed`).

## Where I am

The project's foundations are in place, and the dynamic array is in progress. Linked lists, stacks and queues come next, then hash tables, trees, heaps and graphs.

## Next step

The release on PyPI, planned for the end of November 2026: the library will then install with `pip`, like any other Python package.
