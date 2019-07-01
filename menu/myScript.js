//myScript.js
$.get("tabela.csv", function(CSVdata) {
  // CSVdata is populated with the file contents
  // ready to be converted into an Array
  data = $.csv.toArrays(CSVdata);
});

var score = 0;
elemento = sorteiaElemento();
var cores = new Array();
cores[0] = "0rem  0 2rem rgb(120,245,50)"; //Nonmetal
cores[1] = "0rem  0 2rem rgb(255,133,10)"; //Alcalinos
cores[2] = "0rem  0 2rem rgb(232,177,89)"; //Alcalino Terroso
cores[3] = "0rem  0 2rem rgb(255,10,247) "; //lantanoid
cores[4] = "0rem  0 2rem rgb(177,10,255)"; //actinoide
cores[5] = "0rem  0 2rem rgb(0,0,255)"; //transição metal
cores[6] = "0rem  0 2rem rgb(0,255,255)"; //pos transicao
cores[7] = "0rem  0 2rem rgb(65,200,55)"; //semi
cores[8] = "0rem  0 2rem rgb(135,206,250)"; //nobre

function trocaCss(elemento) {
  tipo = 0;
  if (data[elemento][15] == "Nonmetal") {
    tipo = 0;
  } else if (data[elemento][15] == "Halogen") {
    tipo = 0;
  } else if (data[elemento][15] == "Alkali Metal") {
    tipo = 1;
  } else if (data[elemento][15] == "Alkaline Earth Metal") {
    tipo = 2;
  } else if (data[elemento][15] == "Lanthanide") {
    tipo = 3;
  } else if (data[elemento][15] == "Actinide") {
    tipo = 4;
  } else if (data[elemento][15] == "Metal") {
    tipo = 5;
  } else if (data[elemento][15] == "Transition Metal") {
    tipo = 5;
  } else if (data[elemento][15] == "Metalloid") {
    tipo = 7;
  } else if (data[elemento][15] == "Noble Gas") {
    tipo = 8;
  }

  $("#divPrincipal").css({
    boxShadow: cores[tipo]
  });
}

$(function() {
  $("#btn1").click(function() {
    e1 = $("#divPrincipal");
    e1.addClass("animate");
    e1.one(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function(e) {
        e1.removeClass("animate");
      }
    );
  });
});

function sorteiaElemento() {
  var min = 1;
  var max = 118;
  var elementoN = Math.floor(Math.random() * (+max - +min) + +min);
  console.log(elementoN);
  return elementoN;
}

function printElemento(elemento) {
  console.log(data[elemento]);
}

function getElemento(numeroE, info) {
  return data[numeroE][info];
}

//ModoFacil
function modoFacil() {
  if (
    data[elemento][2] ==
    $("#simbolo_quimico")
      .text()
      .trim()
  ) {
    var p1 = document.getElementById("p1");
    score = score + 1;
    p1.innerHTML = "Score :" + score + "";
    //alert("Parabéns, você acertou");
  } else {
    //alert("Você errou, a resposta é " + data[elemento][2]);
  }

  console.log(score);
  document.querySelector("#divPrincipal").classList.toggle("flip");
  elemento = sorteiaElemento();
  console.log(elemento);
  console.log(data[elemento]);
  $("#simbolo_quimico").text("?");
  $("#numero_atomico").text(data[elemento][0]);
  $("#massa_atomica").text(data[elemento][3]);
  $("#nome").text(data[elemento][1]);
  trocaCss(elemento);
}

//ModoMédio
function modoMedio() {
  if (
    data[elemento][2] ==
    $("#simbolo_quimico")
      .text()
      .trim()
  ) {
    score = score + 1;
  }
  if (
    data[elemento][0] ==
    $("#numero_atomico")
      .text()
      .trim()
  ) {
    score = score + 1;
  }

  var p1 = document.getElementById("p1");
  p1.innerHTML = "Score :" + score + "";
  console.log(score);
  document.querySelector("#divPrincipal").classList.toggle("flip");
  elemento = sorteiaElemento();
  console.log(elemento);
  console.log(data[elemento]);
  $("#numero_atomico").text("?");
  $("#simbolo_quimico").text("?");
  $("#massa_atomica").text(data[elemento][3]);
  $("#nome").text(data[elemento][1]);
  trocaCss(elemento);
}

//ModoDificil
function modoDificil() {
  if (
    data[elemento][2] ==
    $("#simbolo_quimico")
      .text()
      .trim()
  ) {
    score = score + 1;
  }
  if (
    data[elemento][0] ==
    $("#numero_atomico")
      .text()
      .trim()
  ) {
    score = score + 1;
  }
  if (
    data[elemento][3] ==
    $("#massa_atomica")
      .text()
      .trim()
  ) {
    score = score + 1;
  }

  var p1 = document.getElementById("p1");
  p1.innerHTML = "Score :" + score + "";
  console.log(score);
  document.querySelector("#divPrincipal").classList.toggle("flip");
  elemento = sorteiaElemento();
  console.log(elemento);
  console.log(data[elemento]);
  $("#numero_atomico").text("?");
  $("#simbolo_quimico").text("?");
  $("#massa_atomica").text("?");
  $("#nome").text(data[elemento][1]);
  trocaCss(elemento);
}

function mudarNatomico() {
  document.getElementById("numero_atomico").style.display = "none";
  document.getElementById("inpNatomico").style.display = "block";
  document.getElementById("btnNatomico").style.display = "block";
}

function mudarNatomico1() {
  var conteudo = document.getElementById("inpNatomico").value;

  document.getElementById("inpNatomico").style.display = "none";
  document.getElementById("btnNatomico").style.display = "none";
  document.getElementById("numero_atomico").style.display = "block";

  document.getElementById("numero_atomico").innerHTML = conteudo;
}

function mudarMatomica() {
  var p1 = document.getElementById("p1");
  p1.innerHTML = "Mudando Massa atomica.";

  document.getElementById("massa_atomica").style.display = "none";
  document.getElementById("inpMatomica").style.display = "block";
  document.getElementById("btnMatomica").style.display = "block";
}

function mudarMatomica1() {
  var conteudo = document.getElementById("inpMatomica").value;

  document.getElementById("inpMatomica").style.display = "none";
  document.getElementById("btnMatomica").style.display = "none";
  document.getElementById("massa_atomica").style.display = "block";

  document.getElementById("massa_atomica").innerHTML = conteudo;
}

function mudarSimbolo() {
  var p1 = document.getElementById("p1");
  p1.innerHTML = "Mudando Simbolo Químico.";

  document.getElementById("simbolo_quimico").style.display = "none";
  document.getElementById("inpSimbolo").style.display = "block";
  document.getElementById("btnSimbolo").style.display = "block";
}

function mudarSimbolo1() {
  var conteudo = document.getElementById("inpSimbolo").value;

  document.getElementById("inpSimbolo").style.display = "none";
  document.getElementById("btnSimbolo").style.display = "none";
  document.getElementById("simbolo_quimico").style.display = "block";

  document.getElementById("simbolo_quimico").innerHTML = conteudo;
}

function mudarNome() {
  var p1 = document.getElementById("p1");
  p1.innerHTML = "Mudando nome do elemnto Químico.";

  document.getElementById("nome").style.display = "none";
  document.getElementById("inpNome").style.display = "block";
  document.getElementById("btnNome").style.display = "block";
}

function mudarNome1() {
  var conteudo = document.getElementById("inpNome").value;

  document.getElementById("inpNome").style.display = "none";
  document.getElementById("btnNome").style.display = "none";
  document.getElementById("nome").style.display = "block";

  document.getElementById("nome").innerHTML = conteudo;
}
