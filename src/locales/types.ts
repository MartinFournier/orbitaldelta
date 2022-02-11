export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>;
} & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [P: string]: any;
};

// Selecting the json file that our intellisense would pick from
export type TranslationJsonType = typeof import('./en/translation.json') & {
  [index: string]: unknown;
};
