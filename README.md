# Gin — Sourcey API Reference (community build)

A complete, navigable API reference for the [Gin web framework](https://github.com/gin-gonic/gin),
generated with [Sourcey](https://github.com/sourcey/sourcey) from a pinned upstream
commit and published on GitHub Pages:

**https://gin-sourcey-docs.github.io/gin-sourcey-docs/**

## Provenance

- Upstream: https://github.com/gin-gonic/gin at commit
  `0f09c3a9b4626d9fe9979cf4d0521d6ae32ab646` (10 October 2026), used verbatim.
- License of the documented source: MIT (Copyright (c) 2014-present
  Manuel Martínez-Almeida). This is an independent community documentation build,
  not an official Gin project site. Canonical references remain the upstream repo,
  https://gin-gonic.com, and https://pkg.go.dev/github.com/gin-gonic/gin.
- The `godoc.json` snapshot in this repo was produced by
  `sourcey godoc --module <gin checkout> --packages './...' --exclude github.com/gin-gonic/gin/internal`
  and is committed, so the site builds identically without a Go toolchain
  (`mode: "snapshot"`). The build was executed as a governed
  [runx](https://github.com/runxhq/runx) skill run (runx-cli 0.11.1) with a sealed
  receipt: `sha256:c86ff4c4950b7bec5b633a068f151bbbd03b58fa8194c573e761decfd3d8bc41`.

## Coverage

5 public packages, 576 documented symbols/methods/fields:
`gin` 376 · `gin/render` 106 · `gin/binding` 53 · `gin/ginS` 26 · `gin/codec/json` 15.
The `internal/` packages are excluded on purpose: they are not importable public API.

## Build locally

```bash
npm ci
npx sourcey build -o dist
```

Deployment is the GitHub Actions workflow in `.github/workflows/docs.yml`
(Settings → Pages → Source: GitHub Actions), following Sourcey's own
[deploying guide](https://github.com/sourcey/sourcey/blob/main/docs/deploying.md).

Live reference: https://gin-sourcey-docs.github.io/gin-sourcey-docs/introduction
