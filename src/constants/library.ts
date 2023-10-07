export enum GENDER {
  ALL = '',
  FANTASY = 'Fantasía',
  SCIENCE_FICTION = 'Ciencia ficción',
  ZOMBIES = 'Zombies',
  TERROR = 'Terror',
}

export const GENDER_VALUES = Object.values(GENDER);

export const INIT_VALUE =
  JSON.parse(localStorage.getItem('readingList')!) || [];
