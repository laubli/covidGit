const parDeces = (a, b) => b.nbDeces - a.nbDeces;

export
  const toto = 12;

export
  function etat(base) {
  const myEtat = {
    pays: base,
    nbDePays: 10,
    selection: []
  };

  function deces() {
    myEtat.selection = myEtat.pays.slice(0, myEtat.nbDePays).sort(parDeces);
  };

  myEtat.deces = deces;

  return myEtat;
};
