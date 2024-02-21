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

// funkce pro porovnani nabidky
// const Compare = () => {
//   null;
// };
// vypocet celkove ceny
calculatePrice.addEventListener("click", function () {
  // ziskani hodnoty z rack
  let rackValue = 0;
  for (let i = 0; i < rack.length; i++) {
    if (rack[i].checked) {
      rackValue = rack[i].value;
    }
  }

  // funkce pro vypocet
  const CountPrice = (typeOfBike, numberOfBikes) => {
    sumPrice +=
      parseInt(typeOfBike.value) *
      parseInt(numberOfBikes.value) *
      parseInt(loanPeriod.value) *
      parseFloat(rackValue);
  };

  // vypocet ceny
  sumPrice = 0;
  if (mountain.checked) {
    CountPrice(mountain, numOfMountain);
  }
  if (kid.checked) {
    CountPrice(kid, numOfKid);
  }
  if (road.checked) {
    CountPrice(road, numOfRoad);
  }
  if (gravel.checked) {
    CountPrice(gravel, numOfGravel);
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
  if (offeredPrice.value && parseInt(offeredPrice.value) >= sumPrice) {
    comparisonPrice.value = `Tato částka je dostatečná.`;
  } else if (offeredPrice.value && parseInt(offeredPrice.value) < sumPrice) {
    comparisonPrice.value = `Tato částka není dostatečná.`;
  } else {
    alert("Zadejte hodnotu nabídky");
    offeredPrice.focus();
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
