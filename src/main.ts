import {Form} from "./vendor/model/Form.ts";
import {Input} from "./vendor/inputs/Input.ts";


window.onload = function () {
    // @ts-ignore
    const form = new Form('#', 'POST', "Se connecter", {id: 'form', autocomplete: "off"})
        .add(new Input('email', 'email', 'Email'))
        .wrap([
            new Input('text', 'first_name', 'First name'),
            new Input('text', 'last_name', 'Last name'),
        ])
        .wrap([
            new Input("tel", 'tel', 'Telephone'),
            new Input('date', 'birth_date', 'birth date'),
        ])
        .add(new Input("password", 'password', 'Mot de passe'))
        .render();

}