---
title: About this build
description: How this reference was generated, what it covers, and how to regenerate it.
---

# About this build

## Provenance

- **Source:** https://github.com/gin-gonic/gin at commit
  `0f09c3a9b4626d9fe9979cf4d0521d6ae32ab646`, checked out verbatim; no source files
  were modified.
- **Snapshot:** `sourcey godoc --module <gin checkout> --packages './...'
  --exclude github.com/gin-gonic/gin/internal` (Go 1.27.3, Sourcey 3.9.5).
  The `internal/` packages are excluded: they are not importable public API.
  The resulting `godoc.json` snapshot is committed in
  this repository, so the site builds identically on machines without a Go
  toolchain (`mode: "snapshot"`).
- **Build:** `sourcey build` with the committed `sourcey.config.ts`
  (`siteUrl: https://gin-sourcey-docs.github.io`, `baseUrl: /gin-sourcey-docs`).
- **Governed run:** the snapshot and build were executed as a runx skill run
  (runx-cli 0.11.1); the sealed receipt reference is recorded with the delivery
  evidence for this build.

## Regenerate

```bash
git clone https://github.com/gin-gonic/gin
cd gin && git checkout 0f09c3a9b4626d9fe9979cf4d0521d6ae32ab646
npx sourcey godoc --module . --packages './...' --exclude github.com/gin-gonic/gin/internal --out godoc.json
npx sourcey build
```

## Why a separate build is useful

Gin's reference material is split across its README, the gin-gonic.com guides, and
pkg.go.dev. A single generated site adds value in three concrete ways: the whole
module (not just the root package) is searchable in one place; every page is a
stable link a maintainer or answerer can cite; and the generated page list makes
documentation coverage measurable — packages and symbols with thin or missing doc
comments become visible as concrete, fixable gaps instead of impressions.
