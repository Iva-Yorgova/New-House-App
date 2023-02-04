function newHouse(type, quant, budget) {
    let price = 0.00;

    if (type === "Roses") {
        if (quant > 80) {
            price = quant * 5 * 0.90;
        } else {
            price = quant * 5;
        }
    } else if (type === "Dahlias") {
        if (quant > 90) {
            price = quant * 3.80 * 0.85;
        } else {
            price = quant * 3.80;
        }
    } else if (type === "Tulips") {
        if (quant > 80) {
            price = quant * 2.80 * 0.85;
        } else {
            price = quant * 2.8;
        }
    } else if (type === "Narcissus") {
        if (quant < 120) {
            price = quant * 3 * 1.15;
        } else {
            price = quant * 3;
        }
    } else if (type === "Gladiolus") {
        if (quant < 80) {
            price = quant * 2.50 * 1.20;
        } else {
            price = quant * 2.50;
        }
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quant} ${type} and ${(budget - price).toFixed(2)} USD left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} USD more.`);

    }
}
//NewHouse(["Roses","55","250"]);
//NewHouse(["Tulips","88","260"]);
//NewHouse(["Narcissus","119","360"]);