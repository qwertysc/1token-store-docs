# TokenToken Docs

TokenToken documentation site built with VitePress.

## Local Development

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

The static output is generated at:

```text
docs/.vitepress/dist
```

## EdgeOne Makers

This repository includes `edgeone.json`, so EdgeOne Makers can read the build settings directly:

```json
{
  "installCommand": "npm install",
  "buildCommand": "npm run docs:build",
  "outputDirectory": "docs/.vitepress/dist",
  "nodeVersion": "22.11.0"
}
```

Import this repository in EdgeOne Makers:

```text
https://github.com/qwertysc/1token-store-docs
```
