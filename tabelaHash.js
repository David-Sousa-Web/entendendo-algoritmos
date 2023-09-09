const caderno = {};

caderno["maça"] = 1.49;

console.log(caderno);

const votaram = {};
const voted = {};

function VerificarEleitor(nome) {
  if (votaram[nome]) {
    console.log("mande embora");
  } else {
    voted[nome] = true;
    console.log("deixe votar");
  }
}

VerificarEleitor("TIM");
