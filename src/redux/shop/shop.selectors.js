import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
export const selectCollection = params =>
  createSelector(
    [selectCollections],
    collections => collections[params]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
