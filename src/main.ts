import {Form} from "./vendor/Form.ts";
import {ETypes} from "./vendor/enums/ETypes.ts";
import {Input} from "./vendor/inputs/Input.ts";


window.onload = function () {
    console.log('Hello world');
    const form = new Form('http://localhost:8000', 'POST');
    form.build()
        .add(new Input(ETypes.text, 'name', 'name'))
        .add(new Input(ETypes.email, 'email', 'email'))
        .add(new Input(ETypes.password, 'password', 'password'))
        .add(new Input(ETypes.submit, 'submit', 'S\'enregistrer'))
        .render();
}