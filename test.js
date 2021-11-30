import { etat, toto } from './etat.js';

const etatsDeBase =
  [
    { codeIso: 'FR', nbDeces: 42, nbCas: 10000 },
    { codeIso: 'DE', nbDeces: 50, nbCas: 9000 }
  ];

describe('Stats covid', () => {
  test('la fonction deces tri par deces', () => {
    const myEtat = etat(etatsDeBase);
    myEtat.deces();
    expect(myEtat.selection[0].codeIso).toBe('DE');
  });

  test('toto', () => {
    expect(toto).toBe(12);
  });
});
