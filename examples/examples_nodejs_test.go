//go:build nodejs || all
// +build nodejs all

package examples

import (
	"testing"
	//"path"
	"github.com/pulumi/pulumi/pkg/v3/testing/integration"
)

func getJSBaseOptions(t *testing.T) integration.ProgramTestOptions {
	base := getBaseOptions()
	baseJS := base.With(integration.ProgramTestOptions{
		Dependencies: []string{
			"@pulumiverse/redpanda",
		},
	})

	return baseJS
}

// func TestAccRedpandaTs(t *testing.T) {
// 	test := getJSBaseOptions(t).
// 		With(integration.ProgramTestOptions{
// 			Dir: path.Join(getCwd(t), "redpanda-ts/dedicated"),
// 		})
// 	integration.ProgramTest(t, &test)
// }
