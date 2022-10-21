import "./css/index.css";

const ccBgColor01 = document.querySelector(".cc-bg > svg > g > g:nth-child(1)");
const ccBgColor02 = document.querySelector(".cc-bg > svg > g > g:nth-child(2)");
const ccFlag = document.querySelector(".cc-logo > span:nth-child(2) > img");

function setCardColorsAndFlag(type) {
  const cards = {
    visa: {
      colors: ["#436d99", "#2d57f2"],
      flag: "./cc-visa.svg",
    },
    mastercard: {
      colors: ["#df6f29", "#c69347"],
      flag: "./cc-mastercard.svg",
    },
    default: {
      colors: ["black", "#grey}"],
      flag: "./cc-default.svg",
    },
  };

  ccBgColor01.setAttribute("fill", cards[type].colors[0]);
  ccBgColor02.setAttribute("fill", cards[type].colors[1]);
  ccFlag.setAttribute("src", cards[type].flag);
}

setCardColorsAndFlag("default");
