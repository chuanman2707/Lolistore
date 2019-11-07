import { createSelector } from "reselect";

const selector = state => state.directory;

export const selectDirectory = createSelector(
  [selector],
  directory => directory.sections
);
