const prompt = require("prompt-sync")({ sigint: true });

function pobierzDzialanie() {
  let kontynuuj = false;

  while (!kontynuuj) {
    let dzialanie = prompt("Jakie działanie chcesz wykonać? ");

    if (
      dzialanie === "dodawanie" ||
      dzialanie === "odejmowanie" ||
      dzialanie === "mnożenie" ||
      dzialanie === "dzielenie"
    ) {
      kontynuuj = true;
    } else {
      console.log("Działanie niepoprawne!");
    }
  }

  return dzialanie;
}

function pobierzLiczbe1() {
  let kontynuuj = false;

  while (!kontynuuj) {
    let liczba1 = prompt("Podaj pierwszą liczbę: ");
    liczba1 = Number(liczba1);

    if (isNaN(liczba1)) {
      console.log("Proszę podać poprawną liczbę!");
    } else {
      kontynuuj = true;
    }
  }

  return liczba1;
}

function pobierzLiczbe2(dzialanie) {
  let kontynuuj = false;

  while (!kontynuuj) {
    let liczba2 = prompt("Podaj drugą liczbę: ");
    liczba2 = Number(liczba2);

    if (isNaN(liczba2)) {
      console.log("Proszę podać poprawną liczbę!");
    } else {
      if (dzialanie === "dzielenie" && liczba2 === 0) {
        console.log("Dzielnik nie może być równy 0!");
      } else {
        kontynuuj = true;
      }
    }
  }

  return liczba2;
}

function wykonajDzialanie(dzialanie, liczba1, liczba2) {
  if (dzialanie === "dodawanie") {
    return liczba1 + liczba2;
  } else if (dzialanie === "odejmowanie") {
    return liczba1 - liczba2;
  } else if (dzialanie === "mnożenie") {
    return liczba1 * liczba2;
  } else if (dzialanie === "dzielenie") {
    return liczba1 / liczba2;
  }
}

function main() {
  dzialanie = pobierzDzialanie();

  liczba1 = pobierzLiczbe1();
  liczba2 = pobierzLiczbe2(dzialanie);

  const wynik = wykonajDzialanie(dzialanie, liczba1, liczba2);

  console.log(wynik);
}

main();
