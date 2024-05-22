import * as pulumi from "@pulumi/pulumi";
import * as redpanda from "@pulumiverse/redpanda";

const region = "us-east-1";
const cloudProvider = "aws";
const zones = [
  "use1-az2",
  "use1-az4",
  "use1-az6",
];
const throughputTier = "tier-1-aws-v2-arm";
const mechanism = "scram-sha-256";

const namespace = new redpanda.Namespace("test-namespace", {
  name: "test"
});

const network = new redpanda.Network("test-network", {
  namespaceId: namespace.id,
  cloudProvider: cloudProvider,
  region: region,
  clusterType: "dedicated",
  cidrBlock: "10.0.0.0/20",
});

const cluster = new redpanda.Cluster("test-cluster", {
  namespaceId: namespace.id,
  networkId: network.id,
  cloudProvider: cloudProvider,
  region: region,
  clusterType: "dedicated",
  connectionType: "public",
  throughputTier: throughputTier,
  zones: zones,
  allowDeletion: true,
});

const topic = new redpanda.Topic("test-topic", {
  name: "test-chat-room",
  partitionCount: 3,
  replicationFactor: 3,
  clusterApiUrl: cluster.clusterApiUrl,
  allowDeletion: true
});

const user = new redpanda.User("test-user", {
  name: "test",
  password: "password",
  mechanism: mechanism,
  clusterApiUrl: cluster.clusterApiUrl,
});

// ACLs not supported for self-hosted clusters yet
// var acl = new redpanda.Acl("test-acl", {
//   resourceType: "TOPIC",
//   resourceName: topic.name,
//   resourcePatternType: "LITERAL",
//   principal: pulumi.interpolate`User:${user.name}`,
//   host: "*",
//   operation: "ALL",
//   permissionType: "ALLOW",
//   clusterApiUrl: cluster.clusterApiUrl,
// });

const apiUrl = cluster.clusterApiUrl;
export const bootstrapUrl = apiUrl.apply(url => url.replace(/^api-/, 'seed-').replace(/:443$/, ':9092'));
export const userName = user.name;