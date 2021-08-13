function verificar() {
  var Fipe = document.getElementById("fipe");
  var valor = Number(Fipe.value);
  var msg = document.getElementById("res");
  var franquiaParticular = Number(valor * (4.5 / 100));
  var FranquiaAPP = Number(valor * (6 / 100));

  if (valor > 0 && valor <= 5000) {
    msg.innerHTML = ` COTA 0,5 : Seu seguro no plano basico ficaria no valor R$ 41,02 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 5000, 01 && valor <= 10000)) {
    msg.innerHTML = ` COTA 1,0: Seu seguro no plano basico ficaria no valor R$ 52,35 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo: R$ ${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 10000, 01 && valor <= 15000)) {
    msg.innerHTML = `COTA 1.5 :Seu seguro no plano basico ficaria no valor R$ 63,68 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 15000, 01 && valor <= 20000)) {
    msg.innerHTML = `COTA 2 : Seu seguro no plano basico ficaria no valor R$ 75,01 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 20000, 01 && valor <= 25000)) {
    msg.innerHTML = `COTA 2,5: Seu seguro no plano basico ficaria no valor R$ 91,84 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 25000, 01 && valor <= 30000)) {
    msg.innerHTML = `COTA 3: Seu seguro no plano basico ficaria no valor R$ 103,17 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 30000, 01 && valor <= 35000)) {
    msg.innerHTML = `COTA 3,5: Seu seguro no plano basico ficaria no valor R$ 114,50 <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 35000, 01 && valor <= 40000)) {
    msg.innerHTML = `COTA 4: Seu seguro no plano basico ficaria no valor R$ 130,83 <br> <strong>Rastreador obrigatorio</strong> <br> Franquia Particular: R$ ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:R$${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 40000, 01 && valor <= 45000)) {
    msg.innerHTML = ` COTA 4,5: Seu seguro no plano basico ficaria no valor R$ 142,66 <br> <strong>Rastreador obrigatorio</strong><br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 45000, 01 && valor <= 50000)) {
    msg.innerHTML = `COTA 5 :Seu seguro no plano basico ficaria no valor R$ 153,99 <br> <strong>Rastreador obrigatorio</strong> <br> Franquia Particular: ${franquiaParticular.toFixed(
      2
    )}  <br> Franquia Aplicativo:${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 50000, 01 && valor <= 55000)) {
    msg.innerHTML = `COTA 5,5 : Seu seguro no plano basico ficaria no valor R$ 170,82 <br> <strong>Rastreador obrigatorio</strong>
        <br> Franquia Particular: ${franquiaParticular.toFixed(
          2
        )}  <br> Franquia Aplicativo:${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 55000, 01 && valor <= 60000)) {
    msg.innerHTML = `COTA 6 : Seu seguro no plano basico ficaria no valor R$ 182,15 <br> <strong>Rastreador obrigatorio</strong>
        <br> Franquia Particular: ${franquiaParticular.toFixed(
          2
        )}  <br> Franquia Aplicativo:${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 60000, 01 && valor <= 65000)) {
    msg.innerHTML = `COTA 6,5: Seu seguro no plano basico ficaria no valor R$ 193,48 <br> <strong>Rastreador obrigatorio</strong>
        <br> Franquia Particular: ${franquiaParticular.toFixed(
          2
        )}  <br> Franquia Aplicativo:${FranquiaAPP.toFixed(2)}`;
  } else if ((valor > 65000, 01 && valor <= 70000)) {
    msg.innerHTML = `COTA : 7 Seu seguro no plano basico ficaria no valor R$ 204,81 <br> <strong>Rastreador obrigatorio</strong>
        <br> Franquia Particular: ${franquiaParticular.toFixed(
          2
        )}  <br> Franquia Aplicativo:${FranquiaAPP.toFixed(2)}`;
  }
}

function verificarmoto() {
  var Fipemoto = document.getElementById("fipemoto");
  var Valormoto = Number(Fipemoto.value);
  var msg2 = document.getElementById("resmoto");
  
  
  var franquiamoto = Number(Valormoto * (8/ 100));
  
  
  
  
  
  if (Valormoto > 0 && Valormoto <= 2500) {
    msg2.innerHTML = `COTA 0,5 : Seu seguro no plano basico ficaria no valor R$ 40,85 com a franquia no valor de : ${franquiamoto.toFixed(2)}`;
  }else if(Valormoto > 2500,01 && Valormoto <=5000){
   msg2.innerHTML= `COTA 1 : Seu seguro no plano basico ficaria no valor R$ 52,02 com a franquia no valor de R$ ${franquiamoto.toFixed(2)}`;
  }else if(Valormoto > 5000,01 && Valormoto <=7500){
    msg2.innerHTML= `COTA 1,5 : Seu seguro no plano basico ficaria no valor R$63,18 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`;
   }else if (Valormoto > 7500,01 && Valormoto <=10000){
    msg2.innerHTML= `COTA 2 : Seu seguro no plano basico ficaria no valor R$ 74,75 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`;
   }else if (Valormoto > 10000,01 && Valormoto <= 12500){
    msg2.innerHTML= `COTA 2,5 : Seu seguro no plano basico ficaria no valor R$ 85,51 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
   }else if (Valormoto > 12500,01 && Valormoto <= 15000){
    msg2.innerHTML= `COTA 3 : Seu seguro no plano basico ficaria no valor R$ 96,68 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }else if ( Valormoto > 15000,01 && Valormoto <= 17500){
    msg2.innerHTML= `COTA 3,5 : Seu seguro no plano basico ficaria no valor R$ 107,84 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }else if ( Valormoto > 17500,01 && Valormoto <= 20000){
    msg2.innerHTML= `COTA 4 : Seu seguro no plano basico ficaria no valor R$ 119,01 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }else if ( Valormoto > 20000,01 && Valormoto <= 22500){
    msg2.innerHTML= `COTA 4,5 : Seu seguro no plano basico ficaria no valor R$ 130,17 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }else if ( Valormoto > 22500,01 && Valormoto <= 25000){
    msg2.innerHTML= `COTA 5 : Seu seguro no plano basico ficaria no valor R$ 141,34 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }else if ( Valormoto > 25000,01 && Valormoto <= 27500){
    msg2.innerHTML= `COTA 5,5 : Seu seguro no plano basico ficaria no valor R$ 152,50 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }else if ( Valormoto > 27500,01 && Valormoto <= 30000){
    msg2.innerHTML= `COTA 6 : Seu seguro no plano basico ficaria no valor R$ 163,67 com a franquia no valor R$ ${franquiamoto.toFixed(2)}`
  }
}

function verificaruti(){
  var Fipeuti = document.getElementById('fipeuti')
  var Varloruti= Number(Fipeuti.value)
  var msg3 = document.getElementById('resuti')
  var Franquiauti = Number(Varloruti * (8/ 100))

  if(Varloruti > 0 && Varloruti <=5000){
    msg3.innerHTML=`COTA 0,5 : Seu seguro no plano basico ficaria no valor R$ 46,52 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 5000,01 && Varloruti <=10000 ){
    msg3.innerHTML=`COTA 1 : Seu seguro no plano basico ficaria no valor R$ 57,85 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 10000,01 && Varloruti <=15000){
    msg3.innerHTML=`COTA 1,5 : Seu seguro no plano basico ficaria no valor R$ 69,18 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 15000,01 && Varloruti <=20000){
    msg3.innerHTML=`COTA 2 : Seu seguro no plano basico ficaria no valor R$ 80,51 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 20000,01 && Varloruti <=25000 ){
    msg3.innerHTML=`COTA 2,5 : Seu seguro no plano basico ficaria no valor R$ 91,84 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 25000,01 && Varloruti <=30000 ){
    msg3.innerHTML=`COTA 3 : Seu seguro no plano basico ficaria no valor R$ 103,17 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 30000,01 && Varloruti <=35000 ){
    msg3.innerHTML=`COTA 3,5 : Seu seguro no plano basico ficaria no valor R$ 114,50 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 35000,01 && Varloruti <=40000 ){
    msg3.innerHTML=`COTA 4 : Seu seguro no plano basico ficaria no valor R$ 125,83 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 40000,01 && Varloruti <=45000 ){
    msg3.innerHTML=`COTA 4,5 : Seu seguro no plano basico ficaria no valor R$ 142,66 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 45000,01 && Varloruti <=50000 ){
    msg3.innerHTML=`COTA 5 : Seu seguro no plano basico ficaria no valor R$ 153,99 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 50000,01 && Varloruti <=55000 ){
    msg3.innerHTML=`COTA 5,5 : Seu seguro no plano basico ficaria no valor R$ 170,82 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 55000,01 && Varloruti <=60000){
    msg3.innerHTML=`COTA 6 : Seu seguro no plano basico ficaria no valor R$ 182,15 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 60000,01 && Varloruti <=65000 ){
    msg3.innerHTML=`COTA 6,5 : Seu seguro no plano basico ficaria no valor R$ 193,48 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 65000,01 && Varloruti <= 70000){
    msg3.innerHTML=`COTA 7 : Seu seguro no plano basico ficaria no valor R$ 204,81 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 70000,01 && Varloruti <=75000 ){
    msg3.innerHTML=`COTA 7,5 : Seu seguro no plano basico ficaria no valor R$ 216,14 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 75000,01 && Varloruti <=80000 ){
    msg3.innerHTML=`COTA 8 : Seu seguro no plano basico ficaria no valor R$ 227,47 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 80000,01 && Varloruti <=85000 ){
    msg3.innerHTML=`COTA 8,5 : Seu seguro no plano basico ficaria no valor R$ 238,80 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }else if (Varloruti > 85000,01 && Varloruti <=90000 ){
    msg3.innerHTML=`COTA 9 : Seu seguro no plano basico ficaria no valor R$ 250,13 com a franquia no valor de : ${Franquiauti.toFixed(2)}`
  }
}

function verificarcami(){
  var Fipecami = document.getElementById("fipecami");
  var Valorcami = Number(Fipecami.value);
  var msg4 = document.getElementById("rescami");
  var Franquiacami = Number(Valorcami * (4.5/ 100));
  
  if(Valorcami > 0 && Valorcami <= 10000){
    msg4.innerHTML=`COTA 0,5 : Seu seguro no plano basico ficaria no valor R$ 107,35 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`
    
  }else if (Valorcami > 10000,01 && Valorcami<=20000){
    msg4.innerHTML=`COTA 1 : Seu seguro no plano basico ficaria no valor R$ 130,01 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 20000,01 && Valorcami<=30000){
    msg4.innerHTML=`COTA 1.5 : Seu seguro no plano basico ficaria no valor R$ 152,67 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 30000,01 && Valorcami<=40000){
    msg4.innerHTML=`COTA 2 : Seu seguro no plano basico ficaria no valor R$ 175,33 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 40000,01 && Valorcami <= 50000){
    msg4.innerHTML=`COTA 2.5 : Seu seguro no plano basico ficaria no valor R$ 197,99 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 50000,01 && Valorcami<=60000){
    msg4.innerHTML=`COTA 3 : Seu seguro no plano basico ficaria no valor R$ 220,65 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 60000,01 && Valorcami<=70000){
    msg4.innerHTML=`COTA 3.5 : Seu seguro no plano basico ficaria no valor R$ 243,31 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 70000,01 && Valorcami<=80000){
    msg4.innerHTML=`COTA 4 : Seu seguro no plano basico ficaria no valor R$ 265,97 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 80000,01 && Valorcami<=90000){
    msg4.innerHTML=`COTA 4.5 : Seu seguro no plano basico ficaria no valor R$ 288,63 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 90000,01 && Valorcami<=100000){
    msg4.innerHTML=`COTA 5 : Seu seguro no plano basico ficaria no valor R$ 311,29 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 100000,01 && Valorcami<=110000){
    msg4.innerHTML=`COTA 5.5 : Seu seguro no plano basico ficaria no valor R$ 311,29 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`
  }else if (Valorcami > 110000,01 && Valorcami<=120000){
    msg4.innerHTML=`COTA 6 : Seu seguro no plano basico ficaria no valor R$ 356,61 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 120000,01 && Valorcami<=130000){
    msg4.innerHTML=`COTA 6.5 : Seu seguro no plano basico ficaria no valor R$ 379,27 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 130000,01 && Valorcami<=140000){
    msg4.innerHTML=`COTA 7 : Seu seguro no plano basico ficaria no valor R$ 401,93 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 140000,01 && Valorcami<=150000){
    msg4.innerHTML=`COTA 7.5 : Seu seguro no plano basico ficaria no valor R$ 424,59 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 150000,01 && Valorcami<=160000){
    msg4.innerHTML=`COTA 8 : Seu seguro no plano basico ficaria no valor R$ 458,25 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 160000,01 && Valorcami<=170000){
    msg4.innerHTML=`COTA 8.5 : Seu seguro no plano basico ficaria no valor R$ 480,91 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 170000,01 && Valorcami<=180000){
    msg4.innerHTML=`COTA 9 : Seu seguro no plano basico ficaria no valor R$ 503,57 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 180000,01 && Valorcami<=190000){
    msg4.innerHTML=`COTA 9.5 : Seu seguro no plano basico ficaria no valor R$ 526,23 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`

  }else if (Valorcami > 190000,01 && Valorcami<=200000){
    msg4.innerHTML=`COTA 10 : Seu seguro no plano basico ficaria no valor R$ 548,89 com a franquia no valor de R$ ${Franquiacami.toFixed(2)}`
  }
}


//animacao botao
