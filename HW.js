/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let hamburger = 4;
let fries = 1;

function foodOrder(hamburger, fries) {
	if (hamburger >= 4 && fries >= 1) {
		console.log('Ми поїли');
	} else {
		console.log('Ми йдемо в інше кафе');
	}
}
foodOrder(4, 1);
foodOrder(6, 2);
foodOrder(2, 1);
foodOrder(4, 0);

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/
function isPriceBetween(price) {
	if (price >= 1000 && price <= 1900) {
		console.log(`Yes, the price "${price}" between 1000 and 1900`);
	} else {
		console.log(`No, the price "${price}" does not between 1000 and 1900`);
	}
}
isPriceBetween(1000);
isPriceBetween(1900);
isPriceBetween(999);
isPriceBetween(1901);

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
function isPriceNotBetween(price) {
	if (!(price >= 1000 && price <= 1900)) {
		console.log(`Yes, the price "${price}" is not between 1000 and 1900`);
	} else {
		console.log(`No, the price "${price}" is between 1000 and 1900`);
	}
}
isPriceNotBetween(1000);
isPriceNotBetween(1900);
isPriceNotBetween(999);
isPriceNotBetween(1901);

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/
function whatIsTheSeason(seasonmetersber) {
	if (seasonmetersber == 1) {
		console.log('It is Winter');
	} else if (seasonmetersber == 2) {
		console.log('It is Spring');
	} else if (seasonmetersber == 3) {
		console.log('It is Summer');
	} else if (seasonmetersber == 4) {
		console.log('It is Fall');
	}
}
whatIsTheSeason(1);
whatIsTheSeason(2);
whatIsTheSeason(3);
whatIsTheSeason(4);

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/
function whichValueBetween(a, b, c) {
	if ((a < b && a > c) || (a < c && a > b)) {
		console.log(
			`${a},${b},${c} => [a < b && a > c] The value ${a} is between ${c} and ${b}`
		);
	} else if ((b < a && b > c) || (b < c && b > a)) {
		console.log(
			`${a},${b},${c} => [b < a && b > c] The value ${b} is between ${c} and ${a}`
		);
	} else if ((c < a && c > b) || (c < b && c > a)) {
		console.log(
			`${a},${b},${c} => [c < a && c > b] The value ${c} is between ${b} and ${a}`
		);
	} else if (c == b && b < a) {
		console.log(
			`${a},${b},${c} => [c == b && b < a] The value ${a} is greater than ${c}, ${b}`
		);
	} else if (c == a && a < b) {
		console.log(
			`${a},${b},${c} => [c == a && a < b] The value ${b} is greater than ${a}, ${c}`
		);
	} else if (a == b && b < c) {
		console.log(
			`${a},${b},${c} => [a == b && b < c] The value ${c} is greater than ${a}, ${b}`
		);
	} else if (a == b && b > c) {
		console.log(
			`${a},${b},${c} => [a == b && b > c] The values ${a} and ${b} are greater than ${c}`
		);
	} else if (c == b && b > a) {
		console.log(
			`${a},${b},${c} => [c == b && b > a] The values ${c} and ${b} are greater than ${a}`
		);
	} else if (c == a && a > b) {
		console.log(
			`${a},${b},${c} => [c == a && a > b] The values ${a} and ${c} are greater than ${b}`
		);
	} else {
		console.log(
			`${a},${b},${c} => [else] The values ${b}, ${c} and ${a} are same`
		);
	}
}
// function whichValueBetween(a, b, c) {
// 	if (a < b && a > c) {
// 		console.log(
// 			`${a},${b},${c} => [a < b && a > c] The value ${a} is between ${c} and ${b}`
// 		);
// 	} else if (a < c && a > b) {
// 		console.log(
// 			`${a},${b},${c} => [a < c && a > b] The value ${a} is between ${b} and ${c}`
// 		);
// 	} else if (c < a && c > b) {
// 		console.log(
// 			`${a},${b},${c} => [c < a && c > b] The value ${c} is between ${b} and ${a}`
// 		);
// 	} else if (c < b && c > a) {
// 		console.log(
// 			`${a},${b},${c} => [c < b && c > a] The value ${c} is between ${a} and ${b}`
// 		);
// 	} else if (b < a && b > c) {
// 		console.log(
// 			`${a},${b},${c} => [b < a && b > c] The value ${b} is between ${c} and ${a}`
// 		);
// 	} else if (b < c && b > a) {
// 		console.log(
// 			`${a},${b},${c} => [b < c && b > a] The value ${b} is between ${a} and ${c}`
// 		);
// 	} else if (a == b && b < c) {
// 		console.log(
// 			`${a},${b},${c} => [a == b && b < c] The value ${c} is greater than ${a}, ${b}`
// 		);
// 	} else if (a == b && b > c) {
// 		console.log(
// 			`${a},${b},${c} => [a == b && b > c] The values ${a} and ${b} are greater than ${c}`
// 		);
// 	} else if (c == b && b > a) {
// 		console.log(
// 			`${a},${b},${c} => [c == b && b > a] The values ${c} and ${b} are greater than ${a}`
// 		);
// 	} else if (c == b && b < a) {
// 		console.log(
// 			`${a},${b},${c} => [c == b && b < a] The value ${a} is greater than ${c}, ${b}`
// 		);
// 	} else if (c == a && a > b) {
// 		console.log(
// 			`${a},${b},${c} => [c == a && a > b] The values ${a} and ${c} are greater than ${b}`
// 		);
// 	} else if (c == a && a < b) {
// 		console.log(
// 			`${a},${b},${c} => [c == a && a < b] The value ${b} is greater than ${a}, ${c}`
// 		);
// 	} else {
// 		console.log(
// 			`${a},${b},${c} => [else] The values ${b}, ${c} and ${a} are same`
// 		);
// 	}
// }
whichValueBetween(1, 2, 3);
whichValueBetween(3, 1, 2);
whichValueBetween(2, 3, 1);

whichValueBetween(1, 3, 2);
whichValueBetween(2, 1, 3);
whichValueBetween(3, 2, 1);

whichValueBetween(1, 1, 3);
whichValueBetween(3, 1, 1);
whichValueBetween(1, 3, 1);

whichValueBetween(1, 3, 3);
whichValueBetween(3, 1, 3);
whichValueBetween(3, 3, 1);

whichValueBetween(1, 1, 1);

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/
function dayOfWeek(daymetersber) {
	switch (daymetersber) {
		case 1:
			console.log('Monday');
			break;
		case 2:
			console.log('Tuesday');
			break;
		case 3:
			console.log('Wednesday');
			break;
		case 4:
			console.log('Thursday');
			break;
		case 5:
			console.log('Friday');
			break;
		case 6:
			console.log('Saturday');
			break;
		case 7:
			console.log('Sunday');
			break;
		default:
			console.log('There is no such day of the week');
			break;
	}
}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(10);

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

function mathOperation(n1, n2, symbol) {
	switch (symbol) {
		case '+':
			console.log(`${n1} + ${n2} = ` + (n1 + n2));
			break;
		case '-':
			console.log(`${n1} - ${n2} = ` + (n1 - n2));
			break;
		case '*':
			console.log(`${n1} * ${n2} = ` + n1 * n2);
			break;
		case '/':
			console.log(`${n1} / ${n2} = ` + n1 / n2);
			break;
		default:
			console.log('We cannot handle this symbol');
			break;
	}
}
mathOperation(1, 2, '+');
mathOperation(1, 2, '-');
mathOperation(1, 2, '*');
mathOperation(1, 2, '/');

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

function removeVowels(text) {
	console.log(text.replace(/[aeiou]/gi, ''));
}
removeVowels('someone and everyone');

/* TODO:NOT READY

9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

    кілометр 1
    кілометрів 0 2,3,4,5,6,7,8,9,1011
    кілометра


*/

function metersToKilometers(m) {
	const km = m / 1000;
	let endingForMeter;
	if (m === 1) {
		endingForMeter = '';
	} else if (m < 5 || m % 1 !== 0) {
		endingForMeter = 'а';
	} else {
		endingForMeter = 'ів';
	}
	if (km % 1 == 0 && m >= 5000) {
		console.log(`${m} метр${endingForMeter} це буде ${km} кілометрів`);
	} else if (m === 1000) {
		console.log(`${m} метр${endingForMeter} це буде ${km} кілометр`);
	} else if (km % 1 == 0 && m < 5000) {
		console.log(`${m} метр${endingForMeter} це буде ${km} кілометри`);
	} else if (km % 1 !== 0) {
		console.log(`${m} метр${endingForMeter} це буде ${km} кілометра`);
	} else {
		console.log(
			`щось пішло не так (-_-) ці ${m} метри не пішли в ${km} кілометри`
		);
	}
}

metersToKilometers(0);
metersToKilometers(0.5);
metersToKilometers(2.5);
metersToKilometers(1);
metersToKilometers(2);
metersToKilometers(5);
metersToKilometers(100);
metersToKilometers(1000);
metersToKilometers(1500);
metersToKilometers(2000);
metersToKilometers(2300);
metersToKilometers(3000);
metersToKilometers(3897);
metersToKilometers(4000);
metersToKilometers(5000);
metersToKilometers(5700);
metersToKilometers(11000);
metersToKilometers(123456789.1236587);
