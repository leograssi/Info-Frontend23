let formulario = document.querySelector("form");
const objObrigatorio = `
<div class="campo-obrigatorio">
  <img src="./img/erro.png">
  <email> * Campo Obrigatorio </email>
</div>

`;

const checkInputs = (
  nome,
  telefone,
  email,
  renda,
  residencia,
  opcaoResidencia,
  intencao
) => {
  let control = true;

  if (nome.value.trim() == "") {
    nome.classList.add("erro");
    control = false;

    nome.parentElement.innerHTML += objObrigatorio;
  }

  if (telefone.value.trim() == "") {
    telefone.classList.add("erro");
    control = false;

    telefone.parentElement.innerHTML += objObrigatorio;
  }

  if (email.value.trim() == "") {
    email.classList.add("erro");
    control = false;

    email.parentElement.innerHTML += objObrigatorio;
  }

  if (renda == null) {
    let divRenda = document.querySelector(".form-item-radio").parentElement;
    console.log(divRenda);
    divRenda.classList.add("erro");
    control = false;

    divRenda.innerHTML += objObrigatorio;
    
  }

  if (opcaoResidencia.value == "") {
    residencia.classList.add("erro");
    control = false;

    opcaoResidencia.parentElement.innerHTML += objObrigatorio;
  }

  if (intencao.value.trim() == "") {
    intencao.classList.add("erro");
    control = false;

    intencao.parentElement.innerHTML += objObrigatorio;
  }

  return control;
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[type = 'radio']:checked");
  let residencia = document.querySelector("#residencia");
  let opcaoResidencia = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector("#intencao");

  if (
    !checkInputs(
      nome,
      telefone,
      email,
      renda,
      residencia,
      opcaoResidencia,
      intencao,
    )
  ) {
    event.preventDefault();
  } else {
    const adotante = {
      id: 1,
      nome: nome.value,
      telefone: telefone.value,
      renda: renda.value,
      residencia: opcaoResidencia.value,
      intencao: intencao.value,
      animal: sessionStorage.getItem("idAnimal"),
    };

    // const objetoJSON = JSON.stringify(adotante);
    // console.log(objetoJSON);

    const listUsuarios = JSON.parse(usuariosJSON);
    
    let form = document.querySelector("form");
    let botaoLogar = document.querySelector("form-botao");

    form.addEventListener("submit", (event) => {
      event.preventDefault();


    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    
    listUsuarios.forEach(usuario => {
      if(usuario.email.toUpperCase() === email.trim().toUpperCase()) {
      (usuario.senha.toUpperCase() === email.trim().toUpperCase()) {
    } {
      console.log("valido");

    }else {
      // inserir os 
      event.preventDefault();
    } 


    });
    });
  }
});
