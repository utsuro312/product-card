// Задание 3, объект данных о человеке

const personProfileInfo = {
  firstName: "Абдурахман",
  sureName: "Жимангулов",
  email: "clarkc2010@mail.ru",
  age: "16",
  job: "Студент",
  country: "Россия",
  region: "Татарстан",
  city: "Набережные Челны",
};

// Задание 4, объект данных о машине

const car = {
  brand: "Suzuki",
  model: "Grand Vitara",
  yearOfManufacture: "2012",
  manufactureCountry: "Япония",
  color: "Красный",
};

car.owner = personProfileInfo;
console.log(car);

// Задание 5, функция проверающая наличие maxSpeed и создающая его в случаи его отсутвтсвия

function addMaxSpeedIfNone() {
  if (!(car.hasOwnProperty("maxSpeed"))) {
    car.maxSpeed = "180 км/ч"
    console.log(car)
  } else {
    console.log(car)
  }
};

addMaxSpeedIfNone();

// Задание 6, функция, получающая объект и аргумент

function displayArgumentOfObject(object, argument) {
  console.log(object[argument]);
};

displayArgumentOfObject(personProfileInfo, "country");

// Задание 7, массив продуктов

const products = [
  "Молоко",
  "Сахар",
  "Соль",
  "Яйца",
  "Сода"
];

console.log(products);

// Задание 8, массив объектов (в моём случае автомобилей)

const cars = [
  {
    model: "swift",
    brand: "Suzuki",
    manufactureCountry: "Япония",
    yearOfManufacture: 2010,
    color: "Серый"
  },
  {
    model: "civic",
    brand: "Honda",
    manufactureCountry: "Япония",
    yearOfManufacture: 1998,
    color: "Жёлтый"
  },
  {
    model: "lancer",
    brand: "Mitsubishi",
    manufactureCountry: "Япония",
    yearOfManufacture: 2016,
    color: "Чёрный"
  },
  {
    model: "accord",
    brand: "Honda",
    manufactureCountry: "Япония",
    yearOfManufacture: 2022,
    color: "Белый"
  },
  {
    model: "supra",
    brand: "Toyota",
    manufactureCountry: "Япония",
    yearOfManufacture: 2025,
    color: "Жёлтый"
  },
  {
    model: "nsx",
    brand: "Honda",
    manufactureCountry: "Япония",
    yearOfManufacture: 2001,
    color: "Белый"
  },
  {
    model: "camry",
    brand: "Toyota",
    manufactureCountry: "Япония",
    yearOfManufacture: 2023,
    color: "Чёрный"
  }
];

// Задание 9, другой массив объектов (в мойм случае автомобилей), только Subaru, и их объеденение в один новый

const subaruCars = [
  {
    model: "impreza",
    brand: "Subaru",
    manufactureCountry: "Япония",
    yearOfManufacture: 2007,
    color: "Синий"
  },
  {
    model: "brz",
    brand: "Subaru",
    manufactureCountry: "Япония",
    yearOfManufacture: 2019,
    color: "Синий"
  },
  {
    model: "exiga",
    brand: "Subaru",
    manufactureCountry: "Япония",
    yearOfManufacture: 2015,
    color: "Синий"
  },
  {
    model: "wrx",
    brand: "Subaru",
    manufactureCountry: "Япония",
    yearOfManufacture: 2014,
    color: "Синий"
  }
];

const allCars = [
  ...cars,
  ...subaruCars,
];

console.log(allCars);

// Задание 10, переформатация массива с добавлением isNew = yes/no в зависимости от того, была ли машина произведена в 2014 или позже

allCars.map(getCarsArray);

function getCarsArray(car) {
  if (car.yearOfManufacture >= 2014) {
    car.isNew = "Yes"
  } else {
    car.isNew = "No"
  }
  return [car.brand,car.manufactureCountry,car.yearOfManufacture,car.color];
};

console.log(getCarsArray);