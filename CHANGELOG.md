CHANGELOG
=========

## HEAD (Unreleased)

### Major Update: terraform-provider-redpanda v1.1.0
* **BREAKING**: Updated from terraform-provider-redpanda v0.4.1 to v1.1.0
* **NEW**: BYOVPC support for enhanced network control
* **NEW**: Serverless regions support 
* **NEW**: Enhanced monitoring and observability features
* **UPDATED**: Migrated to v1 API (from v0.15.0 upstream)
* **FIXED**: Various stability improvements and bug fixes

### Previous Changes
pulumi-package-publisher
* Use [Pulumi Package Publisher Action](https://github.com/pulumi/pulumi-package-publisher) in release.yml template
* fix dotnetversion typo in release template #94
* fix `/usr/share/dotnet/host/xfr does not exist` issue when running `make build_dotnet`

---
