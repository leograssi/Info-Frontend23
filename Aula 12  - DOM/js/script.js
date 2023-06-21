const listaPosts = [
  {
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "JUNINHO",
    imgURL: "./img/img1.jpg",
  },
  {
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "LEVI",
    imgURL: "./img/img2.jpg",
  },
  {
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "BILY",
    imgURL: "./img/img3.jpg",
  },
  {
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "GORDINHO",
    imgURL: "./img/img4.webp",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaPosts.forEach((post) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${post.imgURL} /> 
                <h2 class="card-titulo"> ${post.titulo} </h2>
                <p class="card-descricao"> ${post.descricao} </p>
                <button class="card-botao" type="button"> entre em contato</button> 
            </div>
        `;
    container.innerHTML += card;
  });
};

window.onload = () => {
  criacaoPosts();

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    console.log(card);
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });
    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });
  });
};

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (botaoTema.checked) {
    body.classList.add("body-dark");
  } else {
    body.classList.remove("body-dark");
  }

});

inputTeste = document.getElementById("inputTeste");

inputTeste.addEventListener("keypress", (tecla) =>{
  alert("Tecla pressionada: " + tecla.key);
});