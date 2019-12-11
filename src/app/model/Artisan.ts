export class Artisan {

    id: number;
    name: string;
    surname: string;
    email: string;
    tel: number;
    pwd: string;
    gouvernerat: string;
    delegation: string;
    type_service: string;
    condition_d: boolean;
    condition: boolean;


    constructor(
        id: 0,
        name: '',
        surname: '',
        email: '',
        tel: 22222222,
        pwd: '',
        gouvernerat: '',
        delegation: '',
        type_service: '',
        condition_d: false,
        condition: false

    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tel = tel;
        this.pwd = pwd;
        this.gouvernerat = gouvernerat;
        this.delegation = delegation;
        this.type_service = type_service;
        this.condition_d = condition_d;
        this.condition = condition;
    }

}
