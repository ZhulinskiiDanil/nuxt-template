export function resolveVariables(
  str: string,
  vars: Record<string, string>
) {
  let result = str;

  for (const key in vars) {
    result = result.replaceAll(`{{${key}}}`, vars[key]);
  }

  return result;
}
