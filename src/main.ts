import {Form} from "./vendor/model/Form.ts";
import {ETypes} from "./vendor/enums/ETypes.ts";
import {Input} from "./vendor/inputs/Input.ts";


window.onload = function () {
    // @ts-ignore
    const form = new Form('#', 'POST', "Se connecter", {id: 'form', autocomplete: "off"})
        .add(new Input(ETypes.email, 'email', 'Email'))
        .wrap([
            new Input(ETypes.text, 'first_name', 'First name'),
            new Input(ETypes.text, 'last_name', 'Last name'),
        ])
        .wrap([
            new Input(ETypes.tel, 'tel', 'Telephone'),
            new Input(ETypes.date, 'birth_date', 'birth date'),
        ])
        .add(new Input(ETypes.password, 'password', 'Mot de passe'))
        .render();

}