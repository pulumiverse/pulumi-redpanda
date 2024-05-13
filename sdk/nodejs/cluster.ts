// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Enables the provisioning and management of Redpanda clusters on AWS and GCP. A cluster must always have a network and namespace.
 *
 * ## Usage
 *
 * ### On AWS
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as redpanda from "@pulumiverse/redpanda";
 *
 * const testNamespace = new redpanda.Namespace("testNamespace", {});
 * const config = new pulumi.Config();
 * const region = config.get("region") || "us-east-1";
 * const cloudProvider = config.get("cloudProvider") || "aws";
 * const testNetwork = new redpanda.Network("testNetwork", {
 *     namespaceId: testNamespace.id,
 *     cloudProvider: cloudProvider,
 *     region: region,
 *     clusterType: "dedicated",
 *     cidrBlock: "10.0.0.0/20",
 * });
 * const zones = config.getObject("zones") || [
 *     "use1-az2",
 *     "use1-az4",
 *     "use1-az6",
 * ];
 * const throughputTier = config.get("throughputTier") || "tier-1-aws-v2-arm";
 * const testCluster = new redpanda.Cluster("testCluster", {
 *     namespaceId: testNamespace.id,
 *     networkId: testNetwork.id,
 *     cloudProvider: cloudProvider,
 *     region: region,
 *     clusterType: "dedicated",
 *     connectionType: "public",
 *     throughputTier: throughputTier,
 *     zones: zones,
 *     allowDeletion: true,
 *     tags: {
 *         key: "value",
 *     },
 * });
 * const namespaceName = config.get("namespaceName") || "testname";
 * const networkName = config.get("networkName") || "testname";
 * const clusterName = config.get("clusterName") || "testname";
 * ```
 * <!--End PulumiCodeChooser -->
 *
 * ### On GCP
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as redpanda from "@pulumiverse/redpanda";
 *
 * const testNamespace = new redpanda.Namespace("testNamespace", {});
 * const config = new pulumi.Config();
 * const region = config.get("region") || "us-central1";
 * const cloudProvider = config.get("cloudProvider") || "gcp";
 * const testNetwork = new redpanda.Network("testNetwork", {
 *     namespaceId: testNamespace.id,
 *     cloudProvider: cloudProvider,
 *     region: region,
 *     clusterType: "dedicated",
 *     cidrBlock: "10.0.0.0/20",
 * });
 * const zones = config.getObject("zones") || [
 *     "us-central1-a",
 *     "us-central1-b",
 *     "us-central1-c",
 * ];
 * const throughputTier = config.get("throughputTier") || "tier-1-gcp-um4g";
 * const testCluster = new redpanda.Cluster("testCluster", {
 *     namespaceId: testNamespace.id,
 *     networkId: testNetwork.id,
 *     cloudProvider: cloudProvider,
 *     region: region,
 *     clusterType: "dedicated",
 *     connectionType: "public",
 *     throughputTier: throughputTier,
 *     zones: zones,
 *     allowDeletion: true,
 *     tags: {
 *         key: "value",
 *     },
 * });
 * const clusterName = config.get("clusterName") || "";
 * const namespaceName = config.get("namespaceName") || "";
 * const networkName = config.get("networkName") || "";
 * ```
 * <!--End PulumiCodeChooser -->
 *
 * ## Limitations
 *
 * We are not currently able to support the provisioning of "BYOC" clusters using this provider. A workaround is available
 *
 *  * First use [RPK](https://docs.redpanda.com/current/deploy/deployment-option/cloud/create-byoc-cluster-aws/) to provision the cluster
 *  * Then use the provider's redpanda.Cluster data source to reference the cluster for use in other resources.
 *
 * ### Example Usage of a data source BYOC to manage users and ACLs
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as redpanda from "@pulumi/redpanda";
 * import * as redpanda from "@pulumiverse/redpanda";
 *
 * const config = new pulumi.Config();
 * const clusterId = config.get("clusterId") || "";
 * const testCluster = redpanda.getCluster({
 *     id: clusterId,
 * });
 * const userPw = config.get("userPw") || "password";
 * const mechanism = config.get("mechanism") || "scram-sha-256";
 * const testUser = new redpanda.User("testUser", {
 *     password: userPw,
 *     mechanism: mechanism,
 *     clusterApiUrl: testCluster.then(testCluster => testCluster.clusterApiUrl),
 * });
 * const testAcl = new redpanda.Acl("testAcl", {
 *     resourceType: "CLUSTER",
 *     resourceName: "kafka-cluster",
 *     resourcePatternType: "LITERAL",
 *     principal: pulumi.interpolate`User:${testUser.name}`,
 *     host: "*",
 *     operation: "ALTER",
 *     permissionType: "ALLOW",
 *     clusterApiUrl: testCluster.then(testCluster => testCluster.clusterApiUrl),
 * });
 * const userName = config.get("userName") || "test-username";
 * const topicName = config.get("topicName") || "test-topic";
 * const partitionCount = config.getNumber("partitionCount") || 3;
 * const replicationFactor = config.getNumber("replicationFactor") || 3;
 * ```
 * <!--End PulumiCodeChooser -->
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import redpanda:index/cluster:Cluster example clusterId
 * ```
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'redpanda:index/cluster:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * allows deletion of the cluster. defaults to true. should probably be set to false for production use
     */
    public readonly allowDeletion!: pulumi.Output<boolean | undefined>;
    /**
     * Must be one of aws or gcp
     */
    public readonly cloudProvider!: pulumi.Output<string | undefined>;
    /**
     * The URL of the cluster API
     */
    public /*out*/ readonly clusterApiUrl!: pulumi.Output<string>;
    /**
     * Type of the cluster
     */
    public readonly clusterType!: pulumi.Output<string>;
    /**
     * Connection type of the cluster
     */
    public readonly connectionType!: pulumi.Output<string>;
    /**
     * Name of the cluster
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The id of the namespace in which to create the cluster
     */
    public readonly namespaceId!: pulumi.Output<string>;
    /**
     * The id of the network in which to create the cluster
     */
    public readonly networkId!: pulumi.Output<string>;
    /**
     * Version of Redpanda to deploy
     */
    public readonly redpandaVersion!: pulumi.Output<string | undefined>;
    /**
     * Cloud provider specific region of the cluster
     */
    public readonly region!: pulumi.Output<string | undefined>;
    /**
     * Tags to apply to the cluster
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Throughput tier of the cluster
     */
    public readonly throughputTier!: pulumi.Output<string>;
    /**
     * Cloud provider specific zones of the cluster
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterState | undefined;
            resourceInputs["allowDeletion"] = state ? state.allowDeletion : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["clusterApiUrl"] = state ? state.clusterApiUrl : undefined;
            resourceInputs["clusterType"] = state ? state.clusterType : undefined;
            resourceInputs["connectionType"] = state ? state.connectionType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaceId"] = state ? state.namespaceId : undefined;
            resourceInputs["networkId"] = state ? state.networkId : undefined;
            resourceInputs["redpandaVersion"] = state ? state.redpandaVersion : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["throughputTier"] = state ? state.throughputTier : undefined;
            resourceInputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if ((!args || args.clusterType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterType'");
            }
            if ((!args || args.connectionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionType'");
            }
            if ((!args || args.namespaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceId'");
            }
            if ((!args || args.networkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkId'");
            }
            if ((!args || args.throughputTier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'throughputTier'");
            }
            resourceInputs["allowDeletion"] = args ? args.allowDeletion : undefined;
            resourceInputs["cloudProvider"] = args ? args.cloudProvider : undefined;
            resourceInputs["clusterType"] = args ? args.clusterType : undefined;
            resourceInputs["connectionType"] = args ? args.connectionType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceId"] = args ? args.namespaceId : undefined;
            resourceInputs["networkId"] = args ? args.networkId : undefined;
            resourceInputs["redpandaVersion"] = args ? args.redpandaVersion : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["throughputTier"] = args ? args.throughputTier : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["clusterApiUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * allows deletion of the cluster. defaults to true. should probably be set to false for production use
     */
    allowDeletion?: pulumi.Input<boolean>;
    /**
     * Must be one of aws or gcp
     */
    cloudProvider?: pulumi.Input<string>;
    /**
     * The URL of the cluster API
     */
    clusterApiUrl?: pulumi.Input<string>;
    /**
     * Type of the cluster
     */
    clusterType?: pulumi.Input<string>;
    /**
     * Connection type of the cluster
     */
    connectionType?: pulumi.Input<string>;
    /**
     * Name of the cluster
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the namespace in which to create the cluster
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * The id of the network in which to create the cluster
     */
    networkId?: pulumi.Input<string>;
    /**
     * Version of Redpanda to deploy
     */
    redpandaVersion?: pulumi.Input<string>;
    /**
     * Cloud provider specific region of the cluster
     */
    region?: pulumi.Input<string>;
    /**
     * Tags to apply to the cluster
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Throughput tier of the cluster
     */
    throughputTier?: pulumi.Input<string>;
    /**
     * Cloud provider specific zones of the cluster
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * allows deletion of the cluster. defaults to true. should probably be set to false for production use
     */
    allowDeletion?: pulumi.Input<boolean>;
    /**
     * Must be one of aws or gcp
     */
    cloudProvider?: pulumi.Input<string>;
    /**
     * Type of the cluster
     */
    clusterType: pulumi.Input<string>;
    /**
     * Connection type of the cluster
     */
    connectionType: pulumi.Input<string>;
    /**
     * Name of the cluster
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the namespace in which to create the cluster
     */
    namespaceId: pulumi.Input<string>;
    /**
     * The id of the network in which to create the cluster
     */
    networkId: pulumi.Input<string>;
    /**
     * Version of Redpanda to deploy
     */
    redpandaVersion?: pulumi.Input<string>;
    /**
     * Cloud provider specific region of the cluster
     */
    region?: pulumi.Input<string>;
    /**
     * Tags to apply to the cluster
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Throughput tier of the cluster
     */
    throughputTier: pulumi.Input<string>;
    /**
     * Cloud provider specific zones of the cluster
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
