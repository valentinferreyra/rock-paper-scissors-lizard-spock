import { selections } from "./selections";

export const randomOption = () => {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
};
