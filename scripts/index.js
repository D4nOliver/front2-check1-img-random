let enviar = document.getElementById("cardSubmit");
let cardTitulo = document.getElementById("cardTitulo");
let cardImg = document.getElementById("cardImg");
let cardDesc = document.getElementById("cardDesc");

let erroDesc = true
let erroImg = true
let erroTitulo = true


function reset () {
  cardDesc.value = "";
  cardTitulo.value = "";
  cardImg.value = "";
  cardTitulo.style.backgroundColor = "rgb(70, 69, 69)";
  cardImg.style.backgroundColor = "rgb(70, 69, 69)";
  cardDesc.style.backgroundColor = "rgb(70, 69, 69)";
}

enviar.addEventListener("click", function (evento) {
  evento.preventDefault();
  let cardTitulo = document.getElementById("cardTitulo").value;
  let cardImg = document.getElementById("cardImg").value;
  let cardDesc = document.getElementById("cardDesc").value;
  let container = document.getElementById("container");
  if (cardDesc.length > 3 && cardTitulo.length > 3 && cardImg != "") {
    container.innerHTML += `
    <div class="card">
        <img
          class="imgCard"
          src="${cardImg}"
          alt=""
        />
        <h1 class="titulo">${cardTitulo}</h1>
        <p class="desc">${cardDesc}</p>
      </div>
    `;
    reset()
  }
});

cardTitulo.addEventListener("blur", function () {
  let tituloValidacao = document.getElementById("tituloValidacao");

  if (cardTitulo.value.length >= 4) {
    erroTitulo = false
    cardTitulo.style.backgroundColor = "greenyellow";
    tituloValidacao.innerText = "";
    validacao();
    cardTitulo.style.color = "rgb(70, 69, 69)";
  } else {
    cardTitulo.style.backgroundColor = "#EB5D5D";
    tituloValidacao.innerText = "Minimo de 4 caracteres";
    tituloValidacao.style.fontWeight = "bold";
    tituloValidacao.style.color = "#EB5D5D";
    erroTitulo = true
    validacao();
    cardTitulo.style.color = "black";
  }
});

cardImg.addEventListener("blur", function () {
  let imgValidacao = document.getElementById("imgValidacao");
  if (cardImg.value.length >= 1) {
    erroImg = false;
    cardImg.style.backgroundColor = "greenyellow";
    imgValidacao.innerText = "";
    cardImg.style.color = "rgb(70, 69, 69)";
    validacao();
  } else {
    cardImg.style.backgroundColor = "#EB5D5D";
    imgValidacao.innerText = "Minimo de 1 caractere";
    imgValidacao.style.fontWeight = "bold";
    imgValidacao.style.color = "#EB5D5D";
    cardImg.style.color = "rgb(70, 69, 69)";
    erroImg = true;
    validacao();
  }
});

cardDesc.addEventListener("blur", function () {
  let descValidacao = document.getElementById("descValidacao");
  if (cardDesc.value.length >= 4) {
    erroDesc = false;
    cardDesc.style.backgroundColor = "greenyellow";
    descValidacao.innerText = "";
    cardDesc.style.color = "rgb(70, 69, 69)";
    validacao();
  } else {
    cardDesc.style.backgroundColor = "#EB5D5D";
    descValidacao.innerText = "Minimo de 4 caracteres";
    cardDesc.style.color = 'black'
    descValidacao.style.fontWeight = "bold";
    descValidacao.style.color = "#EB5D5D";
    erroDesc = true;
    validacao();
  }
});

function validacao(){
  if (erroDesc == false && erroImg == false && erroTitulo == false) {
    enviar.removeAttribute('disabled')
  } else {
    enviar.setAttribute('disabled', true)
  }
}