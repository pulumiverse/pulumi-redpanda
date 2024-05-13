
---
title: Redpanda Installation & Configuration
meta_desc: Information on how to install the Redpanda provider.
layout: installation
---

## Installation

The Pulumi `Redpanda` provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@pulumiverse/redpanda`](https://www.npmjs.com/package/@pulumiverse/redpanda)
* Python: [`pulumiverse-redpanda`](https://pypi.org/project/pulumiverse-redpanda/)
* Go: [`github.com/pulumiverse/pulumi-redpanda/sdk/v3`](https://pkg.go.dev/github.com/pulumiverse/pulumi-redpanda/sdk/v3)
* .NET: [`Pulumiverse.Redpanda`](https://www.nuget.org/packages/Pulumiverse.Redpanda)

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @pulumiverse/redpanda
```

or `yarn`:

```bash
yarn add @pulumiverse/redpanda
```

### Python

To use from Python, install using `pip`:

```bash
pip install pulumiverse-redpanda
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/pulumiverse/pulumi-redpanda/sdk/v3
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Pulumiverse.Redpanda
```

## Configuration

The following configuration points are available for the `redpanda` provider:

- `redpanda:clientId` - (Required) The Client ID to be used to access redpanda.
- `redpanda:clientSecret` - (Required) The Client Secret to be used to access redpanda.
