# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

import types

__config__ = pulumi.Config('redpanda')


class _ExportableConfig(types.ModuleType):
    @property
    def client_id(self) -> Optional[str]:
        """
        The id for the client. You need client_id AND client_secret to use this provider
        """
        return __config__.get('clientId')

    @property
    def client_secret(self) -> Optional[str]:
        """
        Redpanda client secret. You need client_id AND client_secret to use this provider
        """
        return __config__.get('clientSecret')

