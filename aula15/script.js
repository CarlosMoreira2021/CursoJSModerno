function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert("verifique os dados e tente novamente ");
  } else {
    var fsex = document.getElementsByName("radsex");

    var idade = ano - Number(fAno.value);

    var G = "";

    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      G = "Homem";
      if(idade >= 0 && idade <=10){ 
        img.setAttribute('src','crianca homem.jpeg')
        document.body.style.background='blue'
      
    }else if(idade <= 21){
        img.setAttribute('src','jovemHomem.jpeg')
        document.body.style.background='#222'
      }else if(idade < 50){
        img.setAttribute('src','homem.jpeg')
        document.body.style.background='red'
      }else {
        img.setAttribute('src','Sridoso.jpeg')
        document.body.style.background='gray'
      }
    } else if (fsex[1].checked) {
      G = "mulher";
      if(idade >= 0 && idade <=10){
        img.setAttribute('src','meninacrianca.jpeg')
        document.body.style.background='pink'
    }else if(idade <= 21){
        img.setAttribute('src','jovemMulher.jpeg')
        document.body.style.background='yellow'
    }else if(idade < 50){
        img.setAttribute('src','mulher.jpeg')
        document.body.style.background='purple'
    }else {
        img.setAttribute('src','senhora.jpeg')
        document.body.style.background='gray'
    }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${G} com ${idade} anos`;
    res.appendChild(img)
  }
}
