// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dasherize = (text: any) => String(text).replace(/ +/g, "-").toLowerCase();
