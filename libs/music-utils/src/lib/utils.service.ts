export function propertyExistsInCollection(property: string, collection: Record<string, any>[]) {
  return collection.some((item) => property in item);
}
