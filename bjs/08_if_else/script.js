let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
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
            answerField.innerText = answerPhrase + answerNumber + '?';
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
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
            answerField.innerText = answerPhrase + answerNumber + '?';
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 5);

        switch (phraseRandom) {
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
