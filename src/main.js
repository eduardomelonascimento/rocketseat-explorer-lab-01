import "./css/index.css";
import IMask from "imask";

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
      colors: ["black", "grey"],
      flag: "./cc-default.svg",
    },
  };

  ccBgColor01.setAttribute("fill", cards[type].colors[0]);
  ccBgColor02.setAttribute("fill", cards[type].colors[1]);
  ccFlag.setAttribute("src", cards[type].flag);
}

setCardColorsAndFlag("default");

const expirationDateInput = document.querySelector("#expiration-date");
const currentYear = Number(String(new Date().getFullYear()).slice(2));
const expirationDateMask = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: currentYear,
      to: currentYear + 10,
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
};
const expirationDateMasked = IMask(expirationDateInput, expirationDateMask);

const securityCodeInput = document.querySelector("#security-code");
const securityCodeMask = {
  mask: "000",
};
const securityCodeMasked = IMask(securityCodeInput, securityCodeMask);

const cardNumberInput = document.querySelector("#card-number");
const cardNumberMasks = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      cardType: "default",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardType: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardType: "mastercard",
    },
  ],
  dispatch: function (appendend, dinamicMasked) {
    const number = (dinamicMasked.value + appendend).replace(/\D/, "");

    const foundMask = dinamicMasked.compiledMasks.find(({ regex }) =>
      number.match(regex)
    );

    console.log(foundMask);
    return foundMask;
  },
};
const cardNumberMasked = IMask(cardNumberInput, cardNumberMasks);
