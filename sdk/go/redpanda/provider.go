// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package redpanda

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumiverse/pulumi-redpanda/sdk/go/redpanda/internal"
)

// The provider type for the redpanda package. By default, resources use package-wide configuration
// settings, however an explicit `Provider` instance may be created and passed during resource
// construction to achieve fine-grained programmatic control over provider settings. See the
// [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
type Provider struct {
	pulumi.ProviderResourceState

	// The id for the client. You need client_id AND client_secret to use this provider
	ClientId pulumi.StringPtrOutput `pulumi:"clientId"`
	// Redpanda client secret. You need client_id AND client_secret to use this provider
	ClientSecret pulumi.StringPtrOutput `pulumi:"clientSecret"`
}

// NewProvider registers a new resource with the given unique name, arguments, and options.
func NewProvider(ctx *pulumi.Context,
	name string, args *ProviderArgs, opts ...pulumi.ResourceOption) (*Provider, error) {
	if args == nil {
		args = &ProviderArgs{}
	}

	if args.ClientId != nil {
		args.ClientId = pulumi.ToSecret(args.ClientId).(pulumi.StringPtrInput)
	}
	if args.ClientSecret != nil {
		args.ClientSecret = pulumi.ToSecret(args.ClientSecret).(pulumi.StringPtrInput)
	}
	secrets := pulumi.AdditionalSecretOutputs([]string{
		"clientId",
		"clientSecret",
	})
	opts = append(opts, secrets)
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Provider
	err := ctx.RegisterResource("pulumi:providers:redpanda", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type providerArgs struct {
	// The id for the client. You need client_id AND client_secret to use this provider
	ClientId *string `pulumi:"clientId"`
	// Redpanda client secret. You need client_id AND client_secret to use this provider
	ClientSecret *string `pulumi:"clientSecret"`
}

// The set of arguments for constructing a Provider resource.
type ProviderArgs struct {
	// The id for the client. You need client_id AND client_secret to use this provider
	ClientId pulumi.StringPtrInput
	// Redpanda client secret. You need client_id AND client_secret to use this provider
	ClientSecret pulumi.StringPtrInput
}

func (ProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*providerArgs)(nil)).Elem()
}

type ProviderInput interface {
	pulumi.Input

	ToProviderOutput() ProviderOutput
	ToProviderOutputWithContext(ctx context.Context) ProviderOutput
}

func (*Provider) ElementType() reflect.Type {
	return reflect.TypeOf((**Provider)(nil)).Elem()
}

func (i *Provider) ToProviderOutput() ProviderOutput {
	return i.ToProviderOutputWithContext(context.Background())
}

func (i *Provider) ToProviderOutputWithContext(ctx context.Context) ProviderOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProviderOutput)
}

type ProviderOutput struct{ *pulumi.OutputState }

func (ProviderOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Provider)(nil)).Elem()
}

func (o ProviderOutput) ToProviderOutput() ProviderOutput {
	return o
}

func (o ProviderOutput) ToProviderOutputWithContext(ctx context.Context) ProviderOutput {
	return o
}

// The id for the client. You need client_id AND client_secret to use this provider
func (o ProviderOutput) ClientId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.ClientId }).(pulumi.StringPtrOutput)
}

// Redpanda client secret. You need client_id AND client_secret to use this provider
func (o ProviderOutput) ClientSecret() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.ClientSecret }).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ProviderInput)(nil)).Elem(), &Provider{})
	pulumi.RegisterOutputType(ProviderOutput{})
}
