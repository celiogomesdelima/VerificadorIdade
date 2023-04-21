function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("iano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    res.innerHTML =
      '<h3 class="erro">Atenção! Verifique os dados e tente novamente</h3>';
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src','masc_crianca.jpg')
    } else if (idade < 21) {
        img.setAttribute('src','masc_adolescente.jpg')
    } else if (idade < 50) {
        img.setAttribute('src','masc_adulto.jpg')
    } else {
        img.setAttribute('src','masc_idoso.jpg')
    }
} else if (fsex[1].checked) {
    genero = "mulher";
    if (idade >= 0 && idade <= 10) {
          img.setAttribute('src','femi_crianca.jpg')
        } else if (idade < 21) {
          img.setAttribute('src','femi_adolescente.jpg')
        } else if (idade < 50) {
          img.setAttribute('src','femi_adulto.jpg')
        } else {
          img.setAttribute('src','femi_idoso.jpg')
      }
    }
    res.innerHTML = `<h3>Detectamos ${genero} com ${idade} anos</h3>`;
    res.appendChild(img)
  }
}
