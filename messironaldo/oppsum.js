// @ts-check

function setup() {
  /* små bilder bruker kan klikke på */
  let divRonaldo = document.querySelector("#ex > div");
  let divMessi = document.querySelector("#ex div:nth-child(2)");
  let divMessiRonaldo = document.querySelector("#ex div:nth-child(3)");

  /* div med små bilder */
  let divEx = document.getElementById("ex");

  /******* mini-apper for hver beskrevet oppgave *********/

  /**  vis stor Ronaldo */
  let divStorRonaldo = document.getElementById("storronaldo");

  /** vis quiz om Messi og Ronaldo */
  let divStorMessiRonaldo = document.getElementById("messironaldo");
  let btnMessiRonaldoTilbake = divStorMessiRonaldo.querySelector("button");

  /** spill av video om Messi */
  let divStorMessi = document.getElementById("messi");
  let btnMessiTilbake = divStorMessi.querySelector("button");

  /******** Spørsmål om hvem som er verdens beste spiller ***********/
  divMessiRonaldo.addEventListener("click", quiz);
  btnMessiRonaldoTilbake.addEventListener("click", visLilleYork);

  function quiz(e) {
    divEx.classList.add("hidden");
    divStorMessiRonaldo.classList.remove("hidden");
  }

  function visLilleYork(e) {
    divEx.classList.remove("hidden");
    divStorMessiRonaldo.classList.add("hidden");
  }

  let selQuiz = divStorMessiRonaldo.querySelector("select");
  selQuiz.addEventListener("change", sjekk);

  function sjekk(e) {
    let spanRett = divStorMessiRonaldo.querySelector("div:nth-of-type(1)");
    let spanGalt = divStorMessiRonaldo.querySelector("div:nth-of-type(2)");
    spanGalt.classList.add("hidden");
    spanRett.classList.add("hidden");
    // legger på en delay før vurdering vises
    // slik at en får inntrykk av av svaret blir vurdert
    // spesielt viktig dersom en velger gale svar etterhverandre
    setTimeout(() => {
      let v = selQuiz.value;
      if (v === "1") {
        spanRett.classList.remove("hidden");
      }
      // ikke else - dersom ingen av 0,1 da vises ingen melding
      // skjer dersom navn ikke valgt
      if (v === "0") {
        spanGalt.classList.remove("hidden");
      }
    }, 400);
  }

  /*************  vise stort bilde av Ronaldo ************/
  divRonaldo.addEventListener("click", visStorRonaldo);
  divStorRonaldo.addEventListener("click", visLilleRonaldo);
  // ikke egen knapp - da det ikke finnes andre interaktive elementer
  // før eller siden klikker alle på skjermen ....

  function visStorRonaldo(e) {
    divEx.classList.add("hidden");
    divStorRonaldo.classList.remove("hidden");
  }

  function visLilleRonaldo(e) {
    divEx.classList.remove("hidden");
    divStorRonaldo.classList.add("hidden");
  }

  /************* vise video av Messi ********** */
  divMessi.addEventListener("click", visFilm);
  btnMessiTilbake.addEventListener("click", visLilleMessi);

  function visFilm(e) {
    divEx.classList.add("hidden");
    divStorMessi.classList.remove("hidden");
    let vid = document.querySelector("video");
    vid.play();
  }

  function visLilleMessi(e) {
    let vid = document.querySelector("video");
    vid.pause();
    divEx.classList.remove("hidden");
    divStorMessi.classList.add("hidden");
  }
}
