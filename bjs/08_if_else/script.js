let minValue
let maxValue
let gameRun
let answerNumber
let orderNumber
let endPhraseRandom
let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];


function startGame() {
    let userMinValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    let userMaxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    if (Number.isNaN(userMaxValue) || Number.isNaN(userMinValue)) {
    minValue = 0;
    maxValue = 100;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${textNumber()}?`;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
} else {
    minValue = userMinValue >= -999 ? userMinValue : -999;
    maxValue = userMaxValue <= 999 ? userMaxValue : 999;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${textNumber()}?`;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
}
}
startGame()



function next() {
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber++;

    const phraseRandom = Math.round(Math.random() * 5);

    switch (phraseRandom) {
        case 1:
            answerPhrase = 'Наверное это '
            break;
        case 2: 
            answerPhrase = 'Это же число '
            break;
        case 3:
            answerPhrase = 'Может быть это '
            break;
        case 4:
            answerPhrase = 'Вы загадали число '
            break;
        case 5:
            answerPhrase = 'Думаю это '
            break;
    }

    orderNumberField.innerText = orderNumber;
    answerField.innerText = answerPhrase + textNumber() + '?';
}




function textNumber() { 
    let number = Math.abs(answerNumber);
    let text = '';

    if (number == 0) {
        text = 'ноль';
        return text;
    }

    if (number <= 9) {
        return units[Math.floor(Math.abs(number) / 1)];
    }

    if (number > 9 && number < 20) {
        return teens[Math.floor(number / 10 + number % 10)];
    }

    if (number >= 20 && number <= 99) {
        return dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];
    }

    if (number >= 100 && number <= 999) {
        return hundreds[Math.floor(number / 100)] + " " + numberToTextHundreds();
    }
}

document.getElementById('btnRetry').addEventListener('click', function () {
    startGame()
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            next()
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            next()
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        endPhraseRandom = Math.round(Math.random() * 5);

        switch (endPhraseRandom) {
            case 1:
                answerPhrase = 'Это было легко! \n\u{1F61C}'
                break;
            case 2:
                answerPhrase = 'Я всегда угадываю! \n\u{1F60E}'
                break;
            case 3:
                answerPhrase = 'Очередная победа! \n\u{1F929}'
                break;
            case 4:
                answerPhrase = 'Мог бы загадать что нибудь посложнее... \n\u{1F644}'
                break;
        }

        orderNumberField.innerText = orderNumber;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})
