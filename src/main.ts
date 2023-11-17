import {Form} from "./vendor/model/Form.ts";
import {ETypes} from "./vendor/enums/ETypes.ts";
import {Input} from "./vendor/inputs/Input.ts";


window.onload = function () {
    new Form('http://localhost:5173/', 'POST', "Se connecter",
        {
            id: 'form',
            autocomplete: "off"
        })
        .add(new Input(ETypes.text, 'name', 'Identifiant'))
        .wrap([
            new Input(ETypes.text, 'name', 'Identifiant', {disabled: true}),
            new Input(ETypes.password, 'password', 'Mot de passe'),
        ])
        .wrap([
            new Input(ETypes.text, 'name', 'Identifiant'),
            new Input(ETypes.text, 'name', 'Identifiant'),
            new Input(ETypes.text, 'name', 'Identifiant')
        ])
        .add(new Input(ETypes.submit, 'submit', 'Se connecter'))
        .render();
}