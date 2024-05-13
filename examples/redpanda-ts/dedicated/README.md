## Dedicated Redpanda Cluster
The following Pulumi program creates a dedicated Redpanda cluster in Redpanda's Cloud Platform backed by AWS components. The following resoures are instantianted:
  * Namespace
  * Network
  * Cluster
  * Topic
  * User
  * ACL (not supported yet)

Outputs:
  * Broker URL
  * User Name

### Setup
```bash
yarn link @pulumi/redpanda
yarn install
```

```bash
pulumi stack init dev
```

```bash
pulumi config set redpanda:clientId <CLIENT_ID>
pulumi config set --secret redpanda:clientSecret <CLIENT_SECRET>
```

### Running

```bash
pulumi up
```

### Cleanup

```bash
pulumi destroy
```
