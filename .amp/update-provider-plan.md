# Pulumi Redpanda Provider Update Plan

## Current State
- **Current Version**: v0.4.1 (terraform-provider-redpanda)
- **Target Version**: v1.1.0 (latest upstream)
- **Provider Type**: Bridged Terraform provider using pulumi-terraform-bridge
- **Major Version Gap**: Significant updates from v0.4.1 to v1.1.0 (includes v1.0.0 breaking changes)

## Step-by-Step Update Plan

### Phase 1: Preparation & Analysis
- [ ] **1.1** Create a new branch for the update work
  ```bash
  git checkout -b update-terraform-provider-v1.1.0
  ```

- [ ] **1.2** Back up current working provider
  ```bash
  git tag backup-v0.4.1-$(date +%Y%m%d)
  ```

- [ ] **1.3** Analyze breaking changes between v0.4.1 and v1.1.0
  - Review upstream CHANGELOG/release notes for v0.15.0 (API v1 migration)
  - Review v1.0.0 release notes for breaking changes
  - Document any API schema changes that might affect bridge mapping

- [ ] **1.4** Check current bridge tooling compatibility
  - Verify pulumi-terraform-bridge version supports new TF provider features
  - Check if tfgen/bridge tools need updates

### Phase 2: Update Dependencies
- [ ] **2.1** Update go.mod terraform provider dependency
  ```bash
  cd provider/
  go mod edit -require github.com/redpanda-data/terraform-provider-redpanda@v1.1.0
  go mod tidy
  ```

- [ ] **2.2** Update bridge dependencies if needed
  - Check if pulumi-terraform-bridge needs version bump for v1.1.0 compatibility
  - Update bridge version in go.mod if required

- [ ] **2.3** Resolve dependency conflicts
  ```bash
  go mod tidy
  go mod download
  ```

### Phase 3: Bridge Configuration Updates
- [ ] **3.1** Update provider instantiation in resources.go
  - Review if `redpanda.New()` signature changed
  - Update version references to v1.1.0
  - Check if any new provider configuration options are needed

- [ ] **3.2** Check for internal package issues
  - Verify the provider import path still works
  - If getting "use of internal package" errors, implement shim pattern
  - Create provider/shim/ directory with wrapper if needed

- [ ] **3.3** Update schema mappings if needed
  - Check if new resources/data sources were added
  - Update tfbridge.ProviderInfo configuration for new resources
  - Add any new resource/datasource mappings
  - Review for any CSharpName conflicts in dotnet SDK

- [ ] **3.4** Update token mappings
  - Verify existing token generation still works
  - Add mappings for any new resources/datasources
  - Use automatic token mapping if possible

### Phase 4: Code Generation & Schema Updates
- [ ] **4.1** Regenerate provider schema
  ```bash
  make tfgen
  ```

- [ ] **4.2** Review generated schema changes
  - Check provider/cmd/pulumi-resource-redpanda/schema.json for changes
  - Verify no breaking changes in existing resource schemas
  - Document any schema changes for users

- [ ] **4.3** Update bridge metadata
  ```bash
  make provider
  ```

### Phase 5: SDK Generation
- [ ] **5.1** Regenerate all language SDKs
  ```bash
  make build_sdks
  ```

- [ ] **5.2** Verify SDK generation success
  - Check sdk/go/, sdk/python/, sdk/nodejs/, sdk/dotnet/ for proper generation
  - Ensure no build errors in generated SDKs
  - Verify version numbers updated correctly

### Phase 6: Testing & Validation
- [ ] **6.1** Run provider build tests
  ```bash
  make development
  make lint_provider
  ```

- [ ] **6.2** Test provider binary
  ```bash
  make provider
  # Check for warnings about unmapped resources/data sources
  # Ensure no unexpected code snippets warnings
  ```

- [ ] **6.3** Create local test program
  - Copy pulumi-resource-redpanda binary to $PATH
  - Create test program in examples/ directory
  - Use `make install_nodejs_sdk` to link local SDK
  - Test basic resource creation/destruction

- [ ] **6.4** Run integration tests
  ```bash
  cd examples
  go test -v -tags=all -parallel 4 -timeout 2h
  # Or run specific language tests:
  # go test -v -tags=nodejs
  # go test -v -tags=python
  # go test -v -tags=golang
  ```

- [ ] **6.5** Test provider functionality
  - Create simple test Pulumi program using key resources
  - Test CRUD operations on main resource types
  - Verify new v1.1.0 features work correctly

- [ ] **6.6** Test SDK imports and basic usage
  - Test Go SDK import and basic resource creation
  - Test Python SDK installation and usage
  - Test Node.js SDK import and usage
  - Verify Go SDK is proper module: `cd sdk && go mod tidy`

### Phase 7: Documentation Updates
- [ ] **7.1** Update version references
  - Update README.md with new version
  - Update CHANGELOG.md with update details
  - Update any version-specific documentation

- [ ] **7.2** Document breaking changes (if any)
  - Create migration guide if v1.0.0+ introduces breaking changes
  - Update examples to reflect any API changes
  - Document new features from v1.1.0

- [ ] **7.3** Update provider metadata
  - Update schema.json attribution/version info
  - Update bridge-metadata.json

### Phase 8: Quality Assurance
- [ ] **8.1** Performance testing
  - Compare provider performance with previous version
  - Test resource creation/update/delete timing
  - Verify no regression in bridge performance

- [ ] **8.2** Compatibility testing
  - Test backward compatibility of existing resources
  - Verify existing Pulumi programs still work
  - Test with different Pulumi CLI versions

### Phase 9: Release Preparation
- [ ] **9.1** Update CI/CD configuration
  - Review .ci-mgmt.yaml configuration
  - Run `make ci-mgmt` to update build workflows
  - Ensure GitHub Actions workflows are current

- [ ] **9.2** Update version strings
  - Update provider/pkg/version/version.go
  - Update release configuration files
  - Verify all version references are consistent

- [ ] **9.3** Prepare release notes
  - Document all changes from v0.4.1 to v1.1.0
  - Highlight new features and improvements
  - Note any breaking changes or migration requirements

- [ ] **9.4** Final testing
  - Run full test suite one more time
  - Test build and release pipeline
  - Verify all CI/CD checks pass

### Phase 10: Deployment
- [ ] **10.1** Clean up development artifacts
  - Remove SETUP.md and setup.sh files (if not already done)
  - Clean up any temporary files or test artifacts
  - Verify all required configurations documented in README

- [ ] **10.2** Create pull request
  - Submit PR with all changes
  - Include detailed description of updates
  - Request review from maintainers

- [ ] **10.3** Merge and tag release
  - Merge approved PR
  - Create release tag
  - Trigger release pipeline

- [ ] **10.4** Verify release
  - Test published packages work correctly
  - Update documentation sites
  - Monitor for any post-release issues

- [ ] **10.5** Registry publication
  - Register provider in Pulumi Registry if not already done
  - Follow Publishing a Community Package guidelines
  - Verify provider appears in registry

## Risk Mitigation
1. **Breaking Changes**: The jump from v0.4.1 to v1.1.0 includes the v1.0.0 major version which likely has breaking changes
2. **API Migration**: v0.15.0 migrated to v1 API - need to ensure bridge handles this correctly
3. **New Features**: Multiple new features (BYOVPC, serverless regions, etc.) may need bridge configuration
4. **Testing**: Extensive testing needed due to significant version jump

## Rollback Plan
- Backup tag created in Phase 1 allows easy rollback
- Keep v0.4.1 branch available for hotfixes if needed
- Document rollback procedure for users if major issues found

## Success Criteria
- [ ] All tests pass
- [ ] Provider builds successfully
- [ ] SDKs generate without errors
- [ ] Existing functionality preserved
- [ ] New v1.1.0 features accessible
- [ ] Documentation updated
- [ ] Release published successfully
