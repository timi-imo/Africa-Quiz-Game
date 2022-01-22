var countries = document.querySelectorAll(".land");
var currentName = "";
var currentCode = "";
var counter = 0;
var counter2 = 0;

var countryCodeName = [
  { DZ: "Algeria" },
  { AO: "Angola" },
  { BJ: "Benin" },
  { BW: "Botswana" },
  { BF: "Burkina Faso" },
  { BI: "Burundi" },
  { CM: "Cameroon" },
  { CV: "Cabo Verde" },
  { CF: "Central African Republic" },
  { TD: "Chad" },
  { KM: "Comoros" },
  { CG: "Congo" },
  { CD: "Congo (Democratic Republic of the)" },
  { DJ: "Djibouti" },
  { EG: "Egypt" },
  { GQ: "Equatorial Guinea" },
  { ER: "Eritrea" },
  { ET: "Ethiopia" },
  { GA: "Gabon" },
  { GM: "Gambia" },
  { GH: "Ghana" },
  { GN: "Guinea" },
  { GW: "Guinea-Bissau" },
  { CI: "Côte dIvoire" },
  { KE: "Kenya" },
  { LS: "Lesotho" },
  { LR: "Liberia" },
  { LY: "Libya" },
  { MG: "Madagascar" },
  { MW: "Malawi" },
  { ML: "Mali" },
  { MR: "Mauritania" },
  { MU: "Mauritius" },
  { YT: "Mayotte" },
  { MA: "Morocco" },
  { MZ: "Mozambique" },
  { NA: "Namibia" },
  { NE: "Niger" },
  { NG: "Nigeria" },
  { RE: "Réunion" },
  { RW: "Rwanda" },
  { SH: "Saint Helena, Ascension and Tristan da Cunha" },
  { ST: "Sao Tome and Principe" },
  { SN: "Senegal" },
  { SC: "Seychelles" },
  { SL: "Sierra Leone" },
  { SO: "Somalia" },
  { ZA: "South Africa" },
  { SS: "South Sudan" },
  { SD: "Sudan" },
  { SZ: "Swaziland" },
  { TZ: "Tanzania, United Republic of" },
  { TG: "Togo" },
  { TN: "Tunisia" },
  { UG: "Uganda" },
  { EH: "Western Sahara" },
  { ZM: "Zambia" },
  { ZW: "Zimbabwe" },
];

var countryNames = [
  "algeria",
  "angola",
  "benin",
  "botswana",
  "burkina faso",
  "burundi",
  "cameroon",
  "cabo verde",
  "central african republic",
  "chad",
  "comoros",
  "congo",
  "congo (democratic republic of the)",
  "djibouti",
  "egypt",
  "equatorial guinea",
  "eritrea",
  "ethiopia",
  "gabon",
  "gambia",
  "ghana",
  "guinea",
  "guinea-bissau",
  "ivory coast",
  "kenya",
  "lesotho",
  "liberia",
  "libya",
  "madagascar",
  "malawi",
  "mali",
  "mauritania",
  "mauritius",
  "mayotte",
  "morocco",
  "mozambique",
  "namibia",
  "niger",
  "nigeria",
  "réunion",
  "rwanda",
  "saint helena, ascension and tristan da cunha",
  "sao tome and principe",
  "senegal",
  "seychelles",
  "sierra leone",
  "somalia",
  "south africa",
  "south sudan",
  "sudan",
  "swaziland",
  "tanzania",
  "togo",
  "tunisia",
  "uganda",
  "western sahara",
  "zambia",
  "zimbabwe",
];

window.onload = () => {
  document.getElementById("beginner").addEventListener("click", () => {
    document.getElementById("level").style.display = "none";
    document.getElementById("beginner-page").style.display = "block";
    document.getElementById("quiz-container").style.display = "grid";
  });

  document.getElementById("advanced").addEventListener("click", () => {
    document.getElementById("level").style.display = "none";
    document.getElementById("advanced-page").style.display = "block";
    document.getElementById("quiz-container").style.display = "grid";
  });

  document.getElementById("start-beginner").addEventListener("click", () => {
    document.getElementById("start-beginner").style.display = "none";
    document.getElementById("answer-beginner").style.display = "block";

    //Timer
    var oneMinute = 60,
      display = document.querySelector("#time");
    startTimer(oneMinute, display);

    document
      .getElementById("answer-beginner")
      .addEventListener("keyup", (answer) => {
        var input = document
          .getElementById("answer-beginner")
          .value.toLowerCase();

        if (countryNames.length == 0) {
          //do something if person gets all?!
          return;
        } else if (
          countryNames.includes(input) ||
          getAlternativeNamesBeginner(input)
        ) {
          //console.log(input)
          let alternativeName = getAlternativeNamesBeginner(input);
          if (alternativeName) {
            // get the index of the name
            let countryIndex = countryNames.indexOf(alternativeName);
            var code = Object.keys(countryCodeName[countryIndex]);
            code = code[0].toLowerCase();
            console.log(code);
            //var code = ;
            //var url = `${endpoint}${alternativeName}`;
          } else {
            let countryIndex = countryNames.indexOf(input);
            var code = Object.keys(countryCodeName[countryIndex]);
            code = code[0].toLowerCase();
            console.log(code);
            //var url = `${endpoint}${input}`;
          }

          //problem trying to find the code for Sudan using the API...
          if (input === "sudan") {
            document.getElementById("answer-beginner").value = "";
            document.getElementById("sd").style.opacity = "1";
            document.getElementById("sd").style.fill = "black";
            counter = counter + 1;
            document.getElementById(
              "score-beginner"
            ).innerHTML = `SCORE: ${counter}`;
            document.getElementById(
              "game-over-score"
            ).innerHTML = `YOUR SCORE: ${counter}!`;
          } else {
            //fetch(url).then(response => response.json()).then((json) =>{
            //let code = json[0]['alpha2Code'].toLowerCase();
            document.getElementById("answer-beginner").value = "";
            counter = counter + 1;
            document.getElementById(
              "score-beginner"
            ).innerHTML = `SCORE: ${counter}`;
            document.getElementById(
              "game-over-score"
            ).innerHTML = `YOUR SCORE: ${counter}!`;
            document.querySelectorAll(`.${code}`).forEach((country) => {
              country.style.opacity = "1";
              country.style.fill = "black";
            });
          }

          if (getAlternativeNamesBeginner(input)) {
            let countryToRemove = getAlternativeNamesBeginner(input);
            let index = countryNames.indexOf(countryToRemove);
            delete countryNames[index];
            delete countryCodeName[index];
          } else {
            //remove country
            let index = countryNames.indexOf(input);
            delete countryNames[index];
          }
        }
      });
  });

  document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start").style.display = "none";
    document.getElementById("answer").style.display = "block";

    //Timer
    var oneMinute = 60,
      display = document.querySelector("#time2");
    startTimer(oneMinute, display);

    keyupEvent();
  });
};

const displayScore = (score) => {};

const getRandomCountry = () => {
  if (countryCodeName.length == 0) {
    //do something if person gets all?!
    return;
  }
  var randomCountry = Math.floor(Math.random() * countryCodeName.length);
  var countryID = Object.keys(countryCodeName[randomCountry])[0];
  var countryName = countryCodeName[randomCountry][countryID];
  document
    .querySelectorAll(`.${countryID.toLowerCase()}`)
    .forEach((country) => {
      country.style.opacity = "1";
      country.style.fill = "black";
    });
  countryCodeName.splice([randomCountry], 1);
  return [countryID, countryName];
};

const getAlternativeNames = (currentName) => {
  if (currentName === "swaziland") {
    var alternativeCountryNames = ["eswatini"];
  } else if (currentName === "congo (democratic republic of the)") {
    var alternativeCountryNames = [
      "drc",
      "democratic republic of the congo",
      "République démocratique du Congo",
    ];
  } else if (currentName === "gambia") {
    var alternativeCountryNames = ["the gambia"];
  } else if (currentName === "saint helena, ascension and tristan da cunha") {
    var alternativeCountryNames = [
      "saint helena",
      "ascension",
      "tristan da cunha",
    ];
  } else if (currentName === "réunion") {
    var alternativeCountryNames = ["reunion"];
  } else if (currentName === "côte divoire") {
    var alternativeCountryNames = [
      "cote divoire",
      "ivory coast",
      "cote d'ivoire",
      "côte d'ivoire",
    ];
  } else if (currentName === "cabo verde") {
    var alternativeCountryNames = ["cape verde"];
  } else if (currentName === "tanzania, united republic of") {
    var alternativeCountryNames = ["tanzania"];
  } else if (currentName === "guinea-bissau") {
    var alternativeCountryNames = ["guinea bissau"];
  } else {
    var alternativeCountryNames = [];
  }

  return alternativeCountryNames;
};

const getAlternativeNamesBeginner = (name) => {
  if (name === "eswatini" && countryNames.includes("swaziland")) {
    return "swaziland";
  } else if (name === "drc" || name === "République démocratique du Congo") {
    if (countryNames.includes("congo (democratic republic of the)")) {
      return "congo (democratic republic of the)";
    } else {
      return false;
    }
  } else if (name === "the gambia" && countryNames.includes("gambia")) {
    return "gambia";
  } else if (
    name === "saint helena" ||
    name === "ascension" ||
    name === "tristan da cunha"
  ) {
    if (countryNames.includes("saint helena, ascension and tristan da cunha")) {
      return "saint helena, ascension and tristan da cunha";
    } else {
      return false;
    }
  } else if (name === "reunion" && countryNames.includes("réunion")) {
    return "réunion";
  } else if (
    ["cote divoire", "ivory coast", "cote d'ivoire", "côte d'ivoire"].includes(
      name
    )
  ) {
    if (countryNames.includes("ivory coast")) {
      return "ivory coast";
    } else {
      return false;
    }
  } else if (name === "cape verde" && countryNames.includes("cabo verde")) {
    return "cabo verde";
  } else if (name === "tanzania" || name === "united republic of tanzania") {
    if (countryNames.includes("tanzania, united republic of")) {
      return "tanzania, united republic of";
    } else {
      return false;
    }
  } else if (
    name === "guinea bissau" &&
    countryNames.includes("guinea-bissau")
  ) {
    return "guinea-bissau";
  } else {
    return false;
  }
};

const keyupEvent = () => {
  var countryInfo = getRandomCountry();
  currentCode = countryInfo[0];
  currentName = countryInfo[1].toLowerCase();

  document.getElementById("answer").addEventListener("keyup", (answer) => {
    var input = document.getElementById("answer").value.toLowerCase();

    var alternativeNames = getAlternativeNames(currentName);

    if (input === currentName || alternativeNames.includes(input)) {
      counter2 = counter2 + 1;
      document.getElementById("score").innerHTML = `SCORE: ${counter2}`;
      document.getElementById("answer").value = "";
      document.getElementById(
        "score-beginner"
      ).innerHTML = `SCORE: ${counter2}`;
      document.getElementById(
        "game-over-score"
      ).innerHTML = `YOUR SCORE: ${counter2}!`;
      document
        .querySelectorAll(`.${currentCode.toLowerCase()}`)
        .forEach((country) => {
          country.style.fill = "yellow";
        });

      keyupEvent();
      return;
    }
  });
};

//thanks to this this fiddle: https://jsfiddle.net/wr1ua0db/17/
const startTimer = (duration, display) => {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("game-over").style.display = "block";
    }
  }, 1000);
};

//used to get countryArr

/*const url = 'https://restcountries.eu/rest/v2/region/africa';
   fetch(url).then(response => response.json()).then((json) =>{
     for(var i = 0; i < json.length; i++){
       countryArr.push(json[i]['alpha2Code']);
     }
     console.log(countryArr);
   });
   
     
  const url = 'https://restcountries.eu/rest/v2/region/africa';
   fetch(url).then(response => response.json()).then((json) =>{
     for(var i = 0; i < json.length; i++){
       const countryCode = (json[i]['alpha2Code']);
       const name = json[i]['name'];
       countryCodeName.push({[`${countryCode}`] : name});
     }
     console.log(JSON.stringify(countryCodeName));
   });
  */

//var countryArr = ["DZ", "AO", "BJ", "BW", "IO", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG", "CD", "DJ", "EG", "GQ", "ER", "ET", "TF", "GA", "GM", "GH", "GN", "GW", "CI", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MA", "MZ", "NA", "NE", "NG", "RE", "RW", "SH", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "SZ", "TZ", "TG", "TN", "UG", "EH", "ZM", "ZW"];

//var countryNames = ["Algeria", "Angola", "Benin", "Botswana", "British Indian Ocean Territory", "Burkina Faso", "Burundi", "Cameroon", "Cabo Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Congo (Democratic Republic of the)", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "French Southern Territories", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Côte d'Ivoire", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Réunion", "Rwanda", "Saint Helena, Ascension and Tristan da Cunha", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania, United Republic of", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe"];
