"use strict";

// promenne
const calculatePrice = document.querySelector(".btn-calculatePrice");
const offerPrice = document.querySelector(".btn-offerPrice");
const btnEmail = document.querySelector(".btn-email");
const mountain = document.querySelector("#mountain");
const kid = document.querySelector("#kid");
const road = document.querySelector("#road");
const gravel = document.querySelector("#gravel");
const rack = document.querySelectorAll('input[name="rack"]');
const numOfMountain = document.querySelector("#numOfMountain");
const numOfKid = document.querySelector("#numOfKid");
const numOfRoad = document.querySelector("#numOfRoad");
const numOfGravel = document.querySelector("#numOfGravel");
const sumPriceField = document.querySelector('input[name="calculatedPrice"]');
const loanPeriod = document.querySelector("#loanPeriod");
const offeredPrice = document.querySelector("#offeredPrice");
const comparisonPrice = document.querySelector("#comparisonPrice");
const email = document.querySelector("#email");
let sumPrice = 0;
// vypocet celkove ceny
calculatePrice.addEventListener("click", function () {
  // ziskani hodnoty z rack
  let rackValue = 0;
  for (let i = 0; i < rack.length; i++) {
    if (rack[i].checked) {
      rackValue = rack[i].value;
    }
  }
  //   console.log(rack);
  //   console.log(parseFloat(rack));
  //   console.log(rackValue);
  //   console.log(parseFloat(rackValue));

  sumPrice = 0;
  if (mountain.checked) {
    sumPrice +=
      parseInt(mountain.value) *
      parseInt(numOfMountain.value) *
      parseInt(loanPeriod.value) *
      parseFloat(rackValue);
  }
  if (kid.checked) {
    sumPrice +=
      parseInt(kid.value) *
      parseInt(numOfKid.value) *
      parseInt(loanPeriod.value) *
      parseFloat(rackValue);
  }
  if (road.checked) {
    sumPrice +=
      parseInt(road.value) *
      parseInt(numOfRoad.value) *
      parseInt(loanPeriod.value) *
      parseFloat(rackValue);
  }
  if (gravel.checked) {
    sumPrice +=
      parseInt(gravel.value) *
      parseInt(numOfGravel.value) *
      parseInt(loanPeriod.value) *
      parseFloat(rackValue);
  }
  sumPriceField.value = Math.trunc(sumPrice);
  if (offeredPrice.value && parseInt(offeredPrice.value) >= sumPrice) {
    comparisonPrice.value = `Tato částka je dostatečná.`;
  } else if (offeredPrice.value && parseInt(offeredPrice.value) < sumPrice) {
    comparisonPrice.value = `Tato částka není dostatečná.`;
  }
});

// porovnani nabidky
offerPrice.addEventListener("click", function () {
  if (parseInt(offeredPrice.value) >= sumPrice) {
    comparisonPrice.value = `Tato částka je dostatečná.`;
  } else {
    comparisonPrice.value = `Tato částka není dostatečná.`;
  }
});

// validace emailu
email.addEventListener("change", function () {
  if (email.value.includes("@")) {
    btnEmail.removeAttribute("disabled");
  } else {
    btnEmail.setAttribute("disabled", "disabled");
  }
});
