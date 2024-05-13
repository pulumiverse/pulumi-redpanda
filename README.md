# Redpanda Resource Provider

The Pulumi `redpanda` Resource Provider lets you manage [Redpanda](https://redpanda.com/) resources.

The provider is available as a package in all Pulumi languages:

- JavaScript/TypeScript: [`@pulumiverse/redpanda`](https://www.npmjs.com/package/@pulumiverse/redpanda)
- Python: [`pulumiverse-redpanda`](https://pypi.org/project/pulumiverse-redpanda/)
- Go: [`github.com/pulumiverse/pulumi-redpanda/sdk`](https://pkg.go.dev/github.com/pulumiverse/pulumi-redpanda/sdk)
- .NET: [`Pulumiverse.redpanda`](https://www.nuget.org/packages/Pulumiverse.redpanda)

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @pulumi/redpanda
```

or `yarn`:

```bash
yarn add @pulumi/redpanda
```

### Python

To use from Python, install using `pip`:

```bash
pip install pulumi_redpanda
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/pulumi/pulumi-redpanda/sdk/go/...
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Pulumi.Redpanda
```

## Configuration

The following configuration points are available for the `redpanda` provider:

- `redpanda:clientId` (environment: `CLIENT_ID`)(Required) - The Client ID to be used to access redpanda.
- `redpanda:clientSecret` (environment: `CLIENT_SECRET`)(Required) The Client Secret to be used to access redpanda.

## Reference

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/redpanda/api-docs/).
