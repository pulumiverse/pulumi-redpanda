
---
title: Redpanda
meta_desc: Provides an overview of the Redpanda Provider for Pulumi.
layout: overview
---

The `Redpanda` provider for Pulumi can be used to provision any of the resources available within the `Redpanda` Cloud Platform.

## Example

{{< chooser language "javascript,typescript,python,go,csharp" >}}

{{% choosable language javascript %}}

```javascript
"use strict";
const redpanda = require("@pulumiverse/redpanda");

const registry = new redpanda.Registry("registry", {
    providerName: "docker-hub",
    endpointUrl: "https://hub.docker.com",
    name: "pulumi-redpanda"
})

const project = new redpanda.Project("project", {
    name: "pulumi-redpanda",
    registryId: registry.registryId,
    public: "true",
})
```

{{% /choosable %}}

{{% choosable language typescript %}}

```typescript
import * as redpanda from '@pulumiverse/redpanda';

let registry = new redpanda.Registry('registry', {
    providerName: "docker-hub",
    endpointUrl: "https://hub.docker.com",
    name: "pulumi-redpanda"
});

let project = new redpanda.Project('project', {
    name: "pulumi-redpanda",
    registryId: registry.registryId,
    public: "true",
});
```

{{% /choosable %}}
{{% choosable language python %}}

```python
import pulumiverse_redpanda as redpanda
import pulumi

registry = redpanda.Registry("registry", name="pulumi-redpanda",
                           endpoint_url="https://redpanda.pulumi.com",
                           provider_name="docker-hub")

project = redpanda.Project("project", name="pulumi-redpanda",
                         registry_id=registry.registry_id,
                         public="true")
```

{{% /choosable %}}
{{% choosable language go %}}

```go
package main

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumiverse/pulumi-redpanda/sdk/v3/go/redpanda"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {

		registry, err := redpanda.NewRegistry(ctx, "registry", &redpanda.RegistryArgs{
			ProviderName: pulumi.String("docker-hub"),
			EndpointUrl:  pulumi.String("https://hub.docker.com"),
			Name:         pulumi.String("pulumi-redpanda"),
		})
		if err != nil {
			return err
		}

		_, err = redpanda.NewProject(ctx, "project", &redpanda.ProjectArgs{
			Name:       pulumi.String("pulumi-redpanda"),
			Public:     pulumi.String("true"),
			RegistryId: registry.RegistryId,
		})
		if err != nil {
			return err
		}
		return nil
	})
}
```

{{% /choosable %}}

{{% choosable language csharp %}}

```csharp
using System.Collections.Generic;
using Pulumi;
using Pulumiverse.Redpanda;

return await Deployment.RunAsync(() =>
{
   var registry = new Registry("registry", new RegistryArgs
   {
      ProviderName= "docker-hub",
      EndpointUrl="https://hub.docker.com",
      Name= "pulumi-redpanda",
   });
   var project = new Project("project", new ProjectArgs
   {
      RegistryId= registry.RegistryId,
      Name= "pulumi-redpanda",
      Public= "true" 
   });
});
```

{{% /choosable %}}

{{< /chooser >}}
