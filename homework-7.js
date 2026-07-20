// Пункт 3

function getCityTemperature(city, temperature) {
  console.log(`В городе ${city} температура - ${temperature} градусов по Цельсиюю`);
  return`Сейчас в городе ${city} температура - ${temperature} градусов по Цельсиюю`;
}

getCityTemperature("Астрахань", "+31");

// Пункт 4

const LIGHT_SPEED = 299792458;

function compareSpeedToLightSpeed(speedInMetresPerSecond, LIGHT_SPEED){
  if (speedInMetresPerSecond < LIGHT_SPEED){
    console.log("Субсветовая скорость");
  } else
  if (speedInMetresPerSecond > LIGHT_SPEED){
    console.log("Сверхсветовая скорость");
  } else
  if (speedInMetresPerSecond = LIGHT_SPEED){
    console.log("Скорость света");
  }
}

compareSpeedToLightSpeed(299792458, LIGHT_SPEED);

// Пункт 5

function buyMoisturizingMousse(productName, productPrice) {
  if (budget >= productPrice) {
    console.log(productName + " успешно приобретён. Спасибо за покупку!");
  } else
  if (budget < productPrice) {
    console.log(`Вам не хватает ${productPrice - budget}$, пополните баланс.`);
  }
}

let budget = 1823;

buyMoisturizingMousse("Увлажняющий мусс", 2750);

// Пункт 6

function showRacehorseOwner(racehorse) {
  if (racehorse === "Dear Diamond") {
    owner = "Insel Racing Co. Ltd.";
    alert(`Лошадь ${racehorse} принадлежит ${owner}`);
  } else
  if (racehorse === "Bereshit") {
    owner = "Sunday Racing";
    alert(`Лошадь ${racehorse} принадлежит ${owner}`);
  } else
  alert("Скаковая лошадь отсутствует в базе данных.");
}

// Пункт 7

const myFavouriteRacehorse = "Dear Diamond";
const testScore = 40;
const SOUND_SPEED = 343;