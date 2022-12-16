"use strict";

import PizzasSalgadas from "./json/cards.js";
import PizzasDoces from "./json/doces.js";
import PizzasFavoritas from "./json/favoritas.js";
import Promocoes from "./json/promocoes.js";

// const createCard = (dados) => {
//   const infos = document.createElement("div");
//   const infosImg = document.createElement("div");
//   infos.classList.add("infos-img");

//   infos.classList.add("info");

//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.id = `${dados.tipo_produto}${dados.id}`;

//   const ul = document.createElement("ul");
//   const liNome = document.createElement("li");
//   const liPreco = document.createElement("li");

//   ul.appendChild(liNome);
//   ul.appendChild(liPreco);

//   const h3Nome = document.createElement("h3");
// };

const salgadas = document.querySelector(".salgadas");
const favoritas = document.querySelector(".favoritas");
const doces = document.querySelector(".doces");
const promoSection = document.querySelector(".promo-content");

const createPromotion = (data, section) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card-promo");
  section.appendChild(wrapper);

  const nome = document.createElement("h3");
  nome.classList.add("card-promo-title");
  wrapper.appendChild(nome);
  nome.textContent = data.nome;

  const desc = document.createElement("p");
  desc.classList.add("card-promo-desc");
  wrapper.appendChild(desc);
  desc.textContent = data.descricao;

  const prazo = document.createElement("p");
  prazo.classList.add("card-promo-prazo");
  wrapper.appendChild(prazo);
  prazo.textContent = data.prazo;
};

function desenharCarta(id, data, section) {
  let carta = document.createElement("article");
  carta.setAttribute("class", "card");
  section.appendChild(carta);

  // IMAGEM
  if (data.image) {
    let image = document.createElement("img");
    let url = `./img/${data.image}`;
    image.src = url;
    carta.appendChild(image);
  }

  // NOME
  let nomesPizza = document.createElement("h2");
  nomesPizza.setAttribute("class", "nome");
  carta.appendChild(nomesPizza);
  nomesPizza.textContent = data.nome;

  // ACOMPANHAMENTOS
  let nomeAcompanhamentos = document.createElement("h3");
  nomeAcompanhamentos.setAttribute("class", "acompanhamentos");
  carta.appendChild(nomeAcompanhamentos);
  nomeAcompanhamentos.textContent = data.acompanhamentos;
}

PizzasFavoritas.favoritas.forEach((item) => {
  desenharCarta(
    item.id,
    {
      nome: item.nome,
      acompanhamentos: item.ingrediente,
      image: item.foto,
    },
    favoritas
  );
});

PizzasSalgadas.ingredientes.forEach((item) => {
  desenharCarta(
    item.id,
    {
      nome: item.nome,
      acompanhamentos: item.acompanhamentos,
    },
    salgadas
  );
});

PizzasDoces.doces.forEach((item) => {
  desenharCarta(
    item.id,
    {
      nome: item.nome,
      acompanhamentos: item.acompanhamentos,
    },
    doces
  );
});

Promocoes.promocoes.forEach((item) => {
  createPromotion(item, promoSection)
})
