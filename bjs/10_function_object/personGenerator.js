const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "София",
            "id_2": "Мария",
            "id_3": "Анна",
            "id_4": "Алиса",
            "id_5": "Александра",
            "id_6": "Виктория",
            "id_7": "Елизавета",
            "id_8": "Полина",
            "id_9": "Татьяна",
            "id_10": "Елена"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемевич",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемьевна,",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    jobMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Врач",
            "id_3": "Маркетолог",
            "id_4": "Военнослужащий",
            "id_5": "Тренер",
            "id_6": "Повар",
            "id_7": "Инженер",
            "id_8": "Слерарь",
            "id_9": "Шахтёр",
            "id_10": "Учитель"
        }
    }`,
    jobFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Архитектор",
            "id_3": "Дизайнер интерфейсов",
            "id_4": "Биотехнолог",
            "id_5": "Специалист по рекламе",
            "id_6": "Юрист",
            "id_7": "Банковский работник",
            "id_8": "Продавщица",
            "id_9": "Учительница",
            "id_10": "Няня"
        }
    }`,

    birthMouthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Май",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    gender: 'Default',
    number: 0,
    mouth: "",
    year: 0,
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomBirth: function() {
        this.mouth = this.randomValue(this.birthMouthJson);
        this.year = this.randomIntNumber(2000, 1950)
        switch (this.mouth) {
            case "Январь":
                this.number = this.randomIntNumber(31, 1)
                break;
                case "Февраль":
                    this.number = this.randomIntNumber(28, 1) 
                    break;
                    case "Март":
                        this.number = this.randomIntNumber(31, 1) 
                        break;
                        case "Апрель":
                            this.number = this.randomIntNumber(30, 1) 
                            break;
                            case "Май":
                                this.number = this.randomIntNumber(31, 1) 
                                break;        
                                case "Июнь":
                                    this.number = this.randomIntNumber(30, 1) 
                                    break;
                                    case "Июль":
                                        this.number = this.randomIntNumber(31, 1) 
                                        break;
                                        case "Август":
                                            this.number = this.randomIntNumber(31, 1)
                                            break;
                                            case "Сентябрь":
                                                this.number = this.randomIntNumber(30, 1)
                                                break;
                                                case "Октябрь":
                                                    this.number = this.randomIntNumber(31, 1) 
                                                    break;
                                                    case "Ноябрь":
                                                        this.number = this.randomIntNumber(30, 1) 
                                                        break;
                                                        case "Декабрь":
                                                            this.number = this.randomIntNumber(31, 1) 
                                                            break;
        }
        
        return this.number + " " + this.mouth + " " + this.year
    },

    randomGender: function() {
        gender = this.randomIntNumber(1, 0) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender
    },

    randomFirstName: function() {
        return gender == this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },

    randomPatronymicName: function() {
        return gender == this.GENDER_MALE ? this.randomValue(this.patronymicMaleJson) : this.randomValue(this.patronymicFemaleJson);
    },

     randomSurname: function() {
        return gender == this.GENDER_MALE ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + "a";
    },

    randomJob: function() {
        return gender == this.GENDER_MALE ? this.randomValue(this.jobMaleJson) : this.randomValue(this.jobFemaleJson);
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.name = this.randomSurname() + " " + this.randomFirstName() + " " + this.randomPatronymicName();
        this.person.birth = this.randomBirth();
        this.person.job = this.randomJob();
        return this.person;
    }
};