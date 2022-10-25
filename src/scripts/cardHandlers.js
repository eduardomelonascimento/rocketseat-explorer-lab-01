export function setCardColorsAndFlag(type) {
  const ccBgColor01 = document.querySelector(
    ".cc-bg svg g g:nth-child(1) path"
  );
  const ccBgColor02 = document.querySelector(
    ".cc-bg svg g g:nth-child(2) path"
  );
  const ccFlag = document.querySelector(".cc-logo > span:nth-child(2) > img");
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

export function handleCCNumberInputChange({ target }) {
  const ccNumberPresentation = document.querySelector(".cc-number");
  ccNumberPresentation.textContent = target.value;
}

export function handleCCHolderInputChange({ target }) {
  const ccHolderPresentation = document.querySelector(".cc-holder .value");
  ccHolderPresentation.textContent = target.value || "João Pedro Rei do Pix";
}

export function handleCCExpirationDateInputChange({ target }) {
  const ccExpirationDatePresentation = document.querySelector(
    ".cc-expiration .value"
  );
  ccExpirationDatePresentation.textContent = target.value;
}

export function handleCCSecurityCodeInputChange({ target }) {
  const ccSecurityCodePresentation = document.querySelector(
    ".cc-security .value"
  );
  ccSecurityCodePresentation.textContent = target.value.padEnd(3, "*");
}
