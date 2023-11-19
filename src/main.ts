import {Form} from "./vendor/model/Form.ts";
import {Input} from "./vendor/inputs/Input.ts";
import {Select} from "./vendor/inputs/Select";


window.onload = function () {
    const choices = [
        {value: '1', label: 'qzdqazzd'},
        {value: '2', label: 'qzdazdqzd'},
        {value: '3', label: 'qzdqzd'},
        {value: '4', label: 'qzadzdqzd'},
        {value: '5', label: 'qzdqzd'},
    ];
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
        .wrap([
            new Select("select", "select", choices),
            new Select("select", "select", choices),
        ])
        .add(new Input("password", 'password', 'Mot de passe'))
        .render();

}