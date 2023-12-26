document.getElementById('generate').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('jobOutput').innerText = initPerson.job;
    document.getElementById('FullnameOutput').innerText = initPerson.name;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthOutput').innerText = initPerson.birth;
})

document.getElementById('clear').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('jobOutput').innerText = "Генерация профессии";
    document.getElementById('FullnameOutput').innerText = "Генерация ФИО";
    document.getElementById('genderOutput').innerText = "Генерация пола";
    document.getElementById('birthOutput').innerText = "Генерация даты рождения";
})