const prompt = require("prompt-sync")({ sigint: true });

function pobierzDzialanie() {
  let kontynuuj = false;

  while (!kontynuuj) {
    let działanie = prompt("Jakie działanie chcesz wykonać? ");

    if (
      działanie === "dodawanie" ||
      działanie === "odejmowanie" ||
      działanie === "mnożenie" ||
      działanie === "dzielenie"
    ) {
      kontynuuj = true;
    } else {
      console.log("Działanie niepoprawne!");
    }
  }

  return działanie;
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

function pobierzLiczbe2(działanie) {
  let kontynuuj = false;

  while (!kontynuuj) {
    let liczba2 = prompt("Podaj drugą liczbę: ");
    liczba2 = Number(liczba2);

    if (isNaN(liczba2)) {
      console.log("Proszę podać poprawną liczbę!");
    } else {
      if (działanie === "dzielenie" && liczba2 === 0) {
        console.log("Dzielnik nie może być równy 0!");
      } else {
        kontynuuj = true;
      }
    }
  }

  return liczba2;
}

function wykonajDziałanie(działanie, liczba1, liczba2) {
  if (działanie === "dodawanie") {
    return liczba1 + liczba2;
  } else if (działanie === "odejmowanie") {
    return liczba1 - liczba2;
  } else if (działanie === "mnożenie") {
    return liczba1 * liczba2;
  } else if (działanie === "dzielenie") {
    return liczba1 / liczba2;
  }
}

function main() {
  działanie = pobierzDzialanie();

  liczba1 = pobierzLiczbe1();
  liczba2 = pobierzLiczbe2(działanie);

  const wynik = wykonajDziałanie(działanie, liczba1, liczba2);

  console.log(wynik);
}

main();
