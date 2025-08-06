# Agent Instructions for Pulumi Redpanda Provider

## Build/Test/Lint Commands
- **Build**: `make development` (builds provider & SDKs for dev), `make provider` (provider binary), `make build` (full build)
- **Test**: `cd examples && go test -v -tags=all -parallel 4 -timeout 2h` (integration tests), single test: `go test -v -run TestName`
- **Lint**: `make lint_provider` (runs golangci-lint with `.golangci.yml`)
- **SDK Generation**: `make tfgen` (generates schemas), `make build_sdks` (builds all language SDKs)

## Architecture & Structure  
- **Provider**: Bridge for terraform-provider-redpanda using pulumi-terraform-bridge
- **Core Modules**: `provider/` (Go provider code), `sdk/` (generated SDKs for Go/Python/Node.js/.NET), `examples/` (test examples)
- **Entry Points**: `provider/cmd/pulumi-resource-redpanda/` (main provider), `provider/cmd/pulumi-tfgen-redpanda/` (codegen)
- **Bridge**: Uses Pulumi Plugin Framework bridge (`pfbridge`) to wrap Redpanda Terraform provider v0.4.1

## Code Style & Conventions
- **Go Version**: 1.22+ with toolchain, follows standard Go conventions
- **Linting**: golangci-lint with errcheck, gofmt, gosec, govet, ineffassign, revive, unused enabled  
- **Imports**: Group standard/external/internal, use full module paths `github.com/pulumiverse/pulumi-redpanda/`
- **Packages**: Main package `redpanda`, provider module `github.com/pulumiverse/pulumi-redpanda/provider`
- **Naming**: Camel case, descriptive names, follow Pulumi/Terraform naming patterns
- **Config**: Client ID/Secret via env vars `CLIENT_ID`/`CLIENT_SECRET` or config
