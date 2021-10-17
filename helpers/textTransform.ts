export const camelPropToText = ([first, ...label]: string) =>
  `${first.toUpperCase()}${label.join("")}`.replace(/([a-z])([A-Z])/g, "$1 $2");
