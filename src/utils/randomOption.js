import { elecciones } from "./elecciones";

export const randomOption = () => {
  const randomIndex = Math.floor(Math.random() * elecciones.length);
  return elecciones[randomIndex];
};
