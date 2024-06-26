// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Redpanda
{
    public static class GetNamespace
    {
        /// <summary>
        /// Data source for a Redpanda Cloud namespace
        /// 
        /// 
        /// ## Usage
        /// 
        /// &lt;!--Start PulumiCodeChooser --&gt;
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using Redpanda = Pulumi.Redpanda;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var example = Redpanda.GetNamespace.Invoke(new()
        ///     {
        ///         Id = "namespace_id",
        ///     });
        /// 
        /// });
        /// ```
        /// &lt;!--End PulumiCodeChooser --&gt;
        /// </summary>
        public static Task<GetNamespaceResult> InvokeAsync(GetNamespaceArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetNamespaceResult>("redpanda:index/getNamespace:getNamespace", args ?? new GetNamespaceArgs(), options.WithDefaults());

        /// <summary>
        /// Data source for a Redpanda Cloud namespace
        /// 
        /// 
        /// ## Usage
        /// 
        /// &lt;!--Start PulumiCodeChooser --&gt;
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using Redpanda = Pulumi.Redpanda;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var example = Redpanda.GetNamespace.Invoke(new()
        ///     {
        ///         Id = "namespace_id",
        ///     });
        /// 
        /// });
        /// ```
        /// &lt;!--End PulumiCodeChooser --&gt;
        /// </summary>
        public static Output<GetNamespaceResult> Invoke(GetNamespaceInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetNamespaceResult>("redpanda:index/getNamespace:getNamespace", args ?? new GetNamespaceInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetNamespaceArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// UUID of the namespace
        /// </summary>
        [Input("id", required: true)]
        public string Id { get; set; } = null!;

        public GetNamespaceArgs()
        {
        }
        public static new GetNamespaceArgs Empty => new GetNamespaceArgs();
    }

    public sealed class GetNamespaceInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// UUID of the namespace
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        public GetNamespaceInvokeArgs()
        {
        }
        public static new GetNamespaceInvokeArgs Empty => new GetNamespaceInvokeArgs();
    }


    [OutputType]
    public sealed class GetNamespaceResult
    {
        /// <summary>
        /// UUID of the namespace
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Name of the namespace
        /// </summary>
        public readonly string Name;

        [OutputConstructor]
        private GetNamespaceResult(
            string id,

            string name)
        {
            Id = id;
            Name = name;
        }
    }
}
