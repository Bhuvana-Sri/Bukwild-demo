// Normalise the data to avoid unnecessary looping
export function pagesNormaliser(pagesJSON) {
  let normalizedMap = new Map();

  pagesJSON.map((item) => {
    return normalizedMap.set(item.title, item.blocks[0]);
  });

  return normalizedMap;
}
