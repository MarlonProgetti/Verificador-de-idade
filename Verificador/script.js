function Verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var tn1 = window.document.getElementById("txtano");
  var n = Number(tn1.value);
  if (n == 0 || n > ano) {
    window.alert("[ERRO!] Verifique os dados e tente novamente!");
  } else {
    var resul = window.document.getElementById("Resultado");
    var idade = ano - n;
    var fsex = window.document.getElementsByName("radsex");
    var genero = "";
    var img = window.document.createElement("img");
    img.setAttribute("id", "Foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 14) {
        // Criança
        img.setAttribute("src", "crianca-masculino.jpg");
      } else if (idade >= 15 && idade <= 22) {
        // Jovem
        img.setAttribute("src", "Foto perfil.jpg");
      } else if (idade >= 23 && idade <= 49) {
        // Adulto
        img.setAttribute("src", "adulto-masculino.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "idoso-masculino.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 14) {
        // Criança
        img.setAttribute("src", "crianca-feminina.jpg");
      } else if (idade >= 15 && idade <= 22) {
        // Jovem
        img.setAttribute("src", "jovem-feminina.jpg");
      } else if (idade >= 23 && idade <= 49) {
        // Adulto
        img.setAttribute("src", "adulto-feminina.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "idoso-feminina.jpg");
      }
    }
    resul.style.textAlign = "Center";
    resul.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
    resul.appendChild(img);
  }
}
