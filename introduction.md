---
title: Introduction
description: What this site is, and where the canonical Gin documentation lives.
---

# Gin Web Framework — Go API Reference

This site is a complete, navigable API reference for [Gin](https://github.com/gin-gonic/gin),
the HTTP web framework written in Go. It was generated with
[Sourcey](https://github.com/sourcey/sourcey) directly from the Gin source code at a
pinned upstream commit, so every page here traces back to real source: package
comments, exported types, functions, methods, and examples.

- **Upstream repository:** https://github.com/gin-gonic/gin
- **Pinned commit:** `0f09c3a9b4626d9fe9979cf4d0521d6ae32ab646` (10 October 2026)
- **License:** MIT (Copyright (c) 2014-present Manuel Martínez-Almeida)
- **Adapter:** Sourcey `godoc` snapshot of the module's public packages (`./...`, `internal/` excluded)

## Is this the official documentation?

No. Gin's canonical references are its [GitHub repository](https://github.com/gin-gonic/gin),
the [gin-gonic.com](https://gin-gonic.com) website, and its package page on
[pkg.go.dev](https://pkg.go.dev/github.com/gin-gonic/gin). This build exists so the
full API surface — including the `binding`, `render`, and `codec` subpackages that
many Gin users never discover — can be browsed, searched, and linked in one static
site, and so coverage gaps in the upstream documentation can be reported against
concrete pages. See [About this build](./about-this-build) for how it was produced
and how to regenerate it.

## Start with the API

The Go API tab documents every exported symbol in the module, package by package.
The packages most users need first:

- `gin` — the framework itself: `Engine`, `Context`, routing, middleware.
- `gin/binding` — request binding and validation for JSON, XML, form, query, and more.
- `gin/render` — the response renderers behind `Context` output methods.
