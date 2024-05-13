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
    /// <summary>
    /// Topic represents a Kafka topic configuration
    /// 
    /// Creates a topic in a Redpanda Cluster
    /// 
    /// ## Usage
    /// 
    /// &lt;!--Start PulumiCodeChooser --&gt;
    /// ```csharp
    /// using System.Collections.Generic;
    /// using System.Linq;
    /// using Pulumi;
    /// using Redpanda = Pulumiverse.Redpanda;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var testNamespace = new Redpanda.Namespace("testNamespace");
    /// 
    ///     var config = new Config();
    ///     var region = config.Get("region") ?? "us-east-1";
    ///     var cloudProvider = config.Get("cloudProvider") ?? "aws";
    ///     var testNetwork = new Redpanda.Network("testNetwork", new()
    ///     {
    ///         NamespaceId = testNamespace.Id,
    ///         CloudProvider = cloudProvider,
    ///         Region = region,
    ///         ClusterType = "dedicated",
    ///         CidrBlock = "10.0.0.0/20",
    ///     });
    /// 
    ///     var zones = config.GetObject&lt;dynamic&gt;("zones") ?? new[]
    ///     {
    ///         "use1-az2",
    ///         "use1-az4",
    ///         "use1-az6",
    ///     };
    ///     var throughputTier = config.Get("throughputTier") ?? "tier-1-aws-v2-arm";
    ///     var testCluster = new Redpanda.Cluster("testCluster", new()
    ///     {
    ///         NamespaceId = testNamespace.Id,
    ///         NetworkId = testNetwork.Id,
    ///         CloudProvider = cloudProvider,
    ///         Region = region,
    ///         ClusterType = "dedicated",
    ///         ConnectionType = "public",
    ///         ThroughputTier = throughputTier,
    ///         Zones = zones,
    ///         AllowDeletion = true,
    ///         Tags = 
    ///         {
    ///             { "key", "value" },
    ///         },
    ///     });
    /// 
    ///     var userPw = config.Get("userPw") ?? "password";
    ///     var mechanism = config.Get("mechanism") ?? "scram-sha-256";
    ///     var testUser = new Redpanda.User("testUser", new()
    ///     {
    ///         Password = userPw,
    ///         Mechanism = mechanism,
    ///         ClusterApiUrl = testCluster.ClusterApiUrl,
    ///     });
    /// 
    ///     var partitionCount = config.GetDouble("partitionCount") ?? 3;
    ///     var replicationFactor = config.GetDouble("replicationFactor") ?? 3;
    ///     var testTopic = new Redpanda.Topic("testTopic", new()
    ///     {
    ///         PartitionCount = partitionCount,
    ///         ReplicationFactor = replicationFactor,
    ///         ClusterApiUrl = testCluster.ClusterApiUrl,
    ///         AllowDeletion = true,
    ///     });
    /// 
    ///     var testAcl = new Redpanda.Acl("testAcl", new()
    ///     {
    ///         ResourceType = "TOPIC",
    ///         ResourceName = testTopic.Name,
    ///         ResourcePatternType = "LITERAL",
    ///         Principal = testUser.Name.Apply(name =&gt; $"User:{name}"),
    ///         Host = "*",
    ///         Operation = "READ",
    ///         PermissionType = "ALLOW",
    ///         ClusterApiUrl = testCluster.ClusterApiUrl,
    ///     });
    /// 
    ///     var namespaceName = config.Get("namespaceName") ?? "testname";
    ///     var networkName = config.Get("networkName") ?? "testname";
    ///     var clusterName = config.Get("clusterName") ?? "testname";
    ///     var userName = config.Get("userName") ?? "test-username";
    ///     var topicName = config.Get("topicName") ?? "test-topic";
    /// });
    /// ```
    /// &lt;!--End PulumiCodeChooser --&gt;
    /// 
    /// ## Limitations
    /// 
    /// We are not currently able to support topic creation in self hosted clusters. This is an area of active development so expect that to change soon.
    /// 
    /// ## Import
    /// 
    /// ```sh
    /// $ pulumi import redpanda:index/topic:Topic example topicName,clusterId
    /// ```
    /// 
    /// Where clusterId is the ID of the cluster in Redpanda Cloud
    /// </summary>
    [RedpandaResourceType("redpanda:index/topic:Topic")]
    public partial class Topic : global::Pulumi.CustomResource
    {
        /// <summary>
        /// Indicates whether the topic can be deleted.
        /// </summary>
        [Output("allowDeletion")]
        public Output<bool?> AllowDeletion { get; private set; } = null!;

        /// <summary>
        /// The cluster API URL. Changing this will prevent deletion of the resource on the existing cluster. It is generally a better idea to delete an existing resource and create a new one than to change this value unless you are planning to do state imports
        /// </summary>
        [Output("clusterApiUrl")]
        public Output<string> ClusterApiUrl { get; private set; } = null!;

        /// <summary>
        /// A map of string key/value pairs of topic configurations.
        /// </summary>
        [Output("configuration")]
        public Output<ImmutableDictionary<string, string>> Configuration { get; private set; } = null!;

        /// <summary>
        /// The name of the topic.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The number of partitions for the topic. This determines how the data is distributed across brokers.
        /// </summary>
        [Output("partitionCount")]
        public Output<double> PartitionCount { get; private set; } = null!;

        /// <summary>
        /// The replication factor for the topic, which defines how many copies of the data are kept across different brokers for fault tolerance.
        /// </summary>
        [Output("replicationFactor")]
        public Output<double> ReplicationFactor { get; private set; } = null!;


        /// <summary>
        /// Create a Topic resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Topic(string name, TopicArgs args, CustomResourceOptions? options = null)
            : base("redpanda:index/topic:Topic", name, args ?? new TopicArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Topic(string name, Input<string> id, TopicState? state = null, CustomResourceOptions? options = null)
            : base("redpanda:index/topic:Topic", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/pulumiverse",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Topic resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Topic Get(string name, Input<string> id, TopicState? state = null, CustomResourceOptions? options = null)
        {
            return new Topic(name, id, state, options);
        }
    }

    public sealed class TopicArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether the topic can be deleted.
        /// </summary>
        [Input("allowDeletion")]
        public Input<bool>? AllowDeletion { get; set; }

        /// <summary>
        /// The cluster API URL. Changing this will prevent deletion of the resource on the existing cluster. It is generally a better idea to delete an existing resource and create a new one than to change this value unless you are planning to do state imports
        /// </summary>
        [Input("clusterApiUrl", required: true)]
        public Input<string> ClusterApiUrl { get; set; } = null!;

        [Input("configuration")]
        private InputMap<string>? _configuration;

        /// <summary>
        /// A map of string key/value pairs of topic configurations.
        /// </summary>
        public InputMap<string> Configuration
        {
            get => _configuration ?? (_configuration = new InputMap<string>());
            set => _configuration = value;
        }

        /// <summary>
        /// The name of the topic.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The number of partitions for the topic. This determines how the data is distributed across brokers.
        /// </summary>
        [Input("partitionCount")]
        public Input<double>? PartitionCount { get; set; }

        /// <summary>
        /// The replication factor for the topic, which defines how many copies of the data are kept across different brokers for fault tolerance.
        /// </summary>
        [Input("replicationFactor")]
        public Input<double>? ReplicationFactor { get; set; }

        public TopicArgs()
        {
        }
        public static new TopicArgs Empty => new TopicArgs();
    }

    public sealed class TopicState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether the topic can be deleted.
        /// </summary>
        [Input("allowDeletion")]
        public Input<bool>? AllowDeletion { get; set; }

        /// <summary>
        /// The cluster API URL. Changing this will prevent deletion of the resource on the existing cluster. It is generally a better idea to delete an existing resource and create a new one than to change this value unless you are planning to do state imports
        /// </summary>
        [Input("clusterApiUrl")]
        public Input<string>? ClusterApiUrl { get; set; }

        [Input("configuration")]
        private InputMap<string>? _configuration;

        /// <summary>
        /// A map of string key/value pairs of topic configurations.
        /// </summary>
        public InputMap<string> Configuration
        {
            get => _configuration ?? (_configuration = new InputMap<string>());
            set => _configuration = value;
        }

        /// <summary>
        /// The name of the topic.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The number of partitions for the topic. This determines how the data is distributed across brokers.
        /// </summary>
        [Input("partitionCount")]
        public Input<double>? PartitionCount { get; set; }

        /// <summary>
        /// The replication factor for the topic, which defines how many copies of the data are kept across different brokers for fault tolerance.
        /// </summary>
        [Input("replicationFactor")]
        public Input<double>? ReplicationFactor { get; set; }

        public TopicState()
        {
        }
        public static new TopicState Empty => new TopicState();
    }
}
