function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let Res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    Res.innerHTML = `impossivel contar`;
  } else {
    Res.innerHTML = " contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        Res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        Res.innerHTML += `${c} \u{1F449} `;
      }
      Res.innerHTML += ` \u{1F3C1}`;
    }
  }
}
