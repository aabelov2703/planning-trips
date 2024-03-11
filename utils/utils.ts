export const capitalizeStr = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const normalizeStr = (str: string) =>
  str
    .split("_")
    .map((word) => capitalizeStr(word))
    .join(" ");
