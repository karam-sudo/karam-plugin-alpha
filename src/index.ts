import template from "lodash/template";
import { ping, serviceName } from "@karam/api-utils";

export function run(): string {
  return `${serviceName("plugin-alpha")}:${ping()}`;
}

export function renderLabel(name: string): string {
  return template("service <%= name %>")({ name });
}
