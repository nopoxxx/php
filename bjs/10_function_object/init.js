
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('jobOutput').innerText = initPerson.job;
    document.getElementById('FullnameOutput').innerText = initPerson.name;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthOutput').innerText = initPerson.birth;
};

