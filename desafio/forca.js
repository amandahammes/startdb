class Forca {

  vidas = 6;
  letrasChutadas = [];

  constructor(palavra) {
    this.palavraCerta = palavra.split("");
    this.palavra = palavra.split("").map(e => e = "_");
  }

  chutar(letra) {
    if (! (letra.length === 1)) return;
    if (! (this.letrasChutadas.indexOf(letra) < 0)) return;
    this.letrasChutadas.push(letra);
    if ((this.palavraCerta.indexOf(letra)< 0)) {
      return this.vidas = this.vidas -1;
    }
    this.palavraCerta.forEach((e, i) => {
      if (!(e === letra )) return;
      this.palavra[i]=letra;
    })
  }

  buscarEstado() { 
    if(this.vidas === 0){return "perdeu"};
    if(this.palavra.indexOf("_") < 0){return "ganhou"};
    return "aguardando chute";
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, 
          vidas: this.vidas, 
          palavra: this.palavra, 
      }
  }
}

module.exports = Forca;