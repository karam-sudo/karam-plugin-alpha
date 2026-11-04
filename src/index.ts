import { ping, serviceName } from "@karam/api-utils";

export function run(): string {
  return `${serviceName("plugin-alpha")}:${ping()}`;
}
