import IMask from "imask";
import {
  handleCCExpirationDateInputChange,
  handleCCHolderInputChange,
  handleCCNumberInputChange,
  handleCCSecurityCodeInputChange,
  setCardColorsAndFlag,
} from "./cardHandlers";

const cardNumberInput = document.querySelector("#card-number");
const cardNumberMasks = {
  mask: [
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
    {
      mask: "0000 0000 0000 0000",
      cardType: "default",
    },
  ],
  dispatch(appendend, dinamicMasked) {
    const cardNumber = (dinamicMasked.value + appendend).replace(/\D/g, "");
    const foundMask = dinamicMasked.compiledMasks.find(({ regex }) =>
      cardNumber.match(regex)
    );

    setCardColorsAndFlag(foundMask.cardType);

    return foundMask;
  },
};
const cardNumberMasked = IMask(cardNumberInput, cardNumberMasks);
cardNumberMasked.on("accept", (evt) => handleCCNumberInputChange(evt));

const ccHolderInput = document.querySelector("#card-holder");
const holderMask = { mask: /^[a-zA-Zá-úÁ-Ú' ]{0,30}$/ };
const ccHolderMasked = IMask(ccHolderInput, holderMask);
ccHolderMasked.on("accept", (evt) => handleCCHolderInputChange(evt));

const expirationDateInput = document.querySelector("#expiration-date");
const currentYear = Number(String(new Date().getFullYear()).slice(2));
const expirationDateMask = {
  mask: "MM{/}YY",
  lazy: false,
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
expirationDateMasked.on("accept", (evt) => handleCCExpirationDateInputChange(evt));

const securityCodeInput = document.querySelector("#security-code");
const securityCodeMask = { mask: "000" };
const securityCodeMasked = IMask(securityCodeInput, securityCodeMask);
securityCodeMasked.on("accept", (evt) => handleCCSecurityCodeInputChange(evt));
