const listaAnimais = [
  {
    id: 1,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao: "JUNINHO",
    imgURL: "./img/img1.jpg",
  },
  {
    id: 2,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao: "LEVI",
    imgURL: "./img/img2.jpg",
  },
  {
    id: 3,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao: "BILY",
    imgURL: "./img/img3.jpg",
  },
  {
    id: 4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao: "GORDINHO",
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
                  <a class="card-botao" idAnimal="${animal.id} <p/>
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

    card.lastElementChild.addEventListener("click", () => {
      event.preventDefault();
      sessionStorage.setItem(
        "idAnimal",
        card.lastElementChild.getAtribute("idAnimal")
      );
      window.location.href = "./adotar.html";
    });
  });
};