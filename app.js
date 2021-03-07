const prompt = require("prompt-sync")({ sigint: true });

function pobierzDziałanie() {
  var kontynuuj = false;

  while (!kontynuuj) {
    var działanie = prompt("Jakie działanie chcesz wykonać? ");

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

function pobierzLiczbę1() {
  var kontynuuj = false;

  while (!kontynuuj) {
    var liczba1 = prompt("Podaj pierwszą liczbę: ");
    liczba1 = Number(liczba1);

    if (isNaN(liczba1)) {
      console.log("Proszę podać poprawną liczbę!");
    } else {
      kontynuuj = true;
    }
  }

  return liczba1;
}

function pobierzLiczbę2(działanie) {
  var kontynuuj = false;

  while (!kontynuuj) {
    var liczba2 = prompt("Podaj drugą liczbę: ");
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
  działanie = pobierzDziałanie();

  liczba1 = pobierzLiczbę1();
  liczba2 = pobierzLiczbę2(działanie);

  const wynik = wykonajDziałanie(działanie, liczba1, liczba2);

  console.log(wynik);
}

main();
