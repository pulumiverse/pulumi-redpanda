# GitHub Release Pipeline Remediation Plan

## Current Situation Analysis

### Identified Issues
- All recent release pipeline runs are failing (last 5 releases failed)
- Release workflow triggered on tag pushes (v*.*.*)
- Last successful workflow run was on main branch, not release
- Existing tags: `v0.0.1-alpha`, `v0.0.1`, `v0.0.2-beta`, `sdk/v0.0.1`

### Key Findings
- Release workflow uses GoReleaser with complex multi-job setup
- Two main jobs: `publish_binary` and `publish_sdk` 
- SDK publishing supports Python, Node.js (Go commented out, .NET commented out)
- Publishing to PyPI and NPM registries
- Uses pulumictl for version management

## Remediation Steps

### Phase 1: Investigate Current Failures
1. **Analyze Recent Failed Runs**
   ```bash
   gh run list --workflow=release.yml --limit 5
   gh run view <run-id> --log-failed
   ```

2. **Check Specific Job Failures**
   ```bash
   gh run view <run-id> -j publish_binary --log-failed
   gh run view <run-id> -j publish_sdk --log-failed
   ```

3. **Verify Dependencies and Secrets**
   ```bash
   gh secret list
   # Check for: GITHUB_TOKEN, NPM_TOKEN, PYPI_PASSWORD
   ```

### Phase 2: Validate Build Environment
1. **Test Local Build Process**
   ```bash
   make tfgen
   make build_nodejs
   make build_python
   make build_go
   ```

2. **Verify GoReleaser Configuration**
   ```bash
   goreleaser check
   goreleaser build --snapshot --clean
   ```

3. **Check Version Resolution**
   ```bash
   pulumictl get version --language generic
   ```

### Phase 3: Create Test Release
1. **Create Pre-release Tag for Testing**
   ```bash
   # Use semantic versioning with pre-release identifier
   git tag v0.0.3-test
   git push origin v0.0.3-test
   ```

2. **Monitor Test Release Pipeline**
   ```bash
   gh run watch
   gh run view --log
   ```

3. **If Test Fails, Debug Specific Issues**
   ```bash
   gh run view <run-id> --verbose
   gh run view <run-id> -j <job-name> --log-failed
   ```

### Phase 4: Common Fix Strategies

#### Strategy A: Dependencies/Environment Issues
- Update Go version in workflow if needed
- Verify all required build tools are available
- Check for missing or outdated dependencies

#### Strategy B: Permission/Authentication Issues  
- Verify GitHub token permissions (contents: write, id-token: write)
- Validate NPM_TOKEN and PYPI_PASSWORD secrets
- Check repository settings for Actions permissions

#### Strategy C: Build Process Issues
- Review tfgen step for schema generation failures
- Check for breaking changes in pulumictl or Pulumi CLI
- Validate GoReleaser binary build configuration

#### Strategy D: SDK Publishing Issues
- Test individual SDK builds locally
- Verify publishing credentials and repository access
- Check for package naming conflicts or version issues

### Phase 5: Create Production Release
1. **After Successful Test Release**
   ```bash
   # Create proper semantic version
   git tag v0.0.3
   git push origin v0.0.3
   ```

2. **Monitor Production Release**
   ```bash
   gh run watch
   gh release view v0.0.3
   ```

3. **Verify Published Artifacts**
   - Check GitHub Releases page
   - Verify NPM package: `npm view @pulumiverse/redpanda`
   - Verify PyPI package: `pip search pulumiverse-redpanda`

## Troubleshooting Commands Reference

### GitHub CLI Diagnostics
```bash
# List all workflows
gh workflow list

# View workflow file
gh workflow view release.yml

# List recent runs with details
gh run list --limit 20 --json status,conclusion,workflowName,event

# View specific run details
gh run view <run-id> --json jobs,status,conclusion

# Download run logs for offline analysis
gh run download <run-id>
```

### Local Environment Validation
```bash
# Verify build environment
go version
node --version
python --version

# Test provider build
cd provider && go build ./cmd/pulumi-resource-redpanda

# Test SDK generation
make tfgen

# Test individual SDK builds
make build_nodejs
make build_python
```

### Version and Tag Management
```bash
# List all tags
git tag --list --sort=-version:refname

# Delete problematic tag (if needed)
git tag -d v0.0.x
git push origin --delete v0.0.x

# Create new tag with proper version
git tag -a v0.0.x -m "Release v0.0.x"
git push origin v0.0.x
```

## Success Criteria
- [ ] Test release (v0.0.3-test) completes successfully
- [ ] All binaries built and published to GitHub Releases
- [ ] Python SDK published to PyPI
- [ ] Node.js SDK published to NPM  
- [ ] Production release (v0.0.3) completes successfully
- [ ] All published packages are accessible and functional

## Next Steps After Resolution
1. Document root cause and solution in repository
2. Consider adding workflow status badges to README
3. Set up workflow notifications for future failures
4. Review and potentially improve CI/CD pipeline robustness
