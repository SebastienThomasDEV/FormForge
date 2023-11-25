import {Form} from "./vendor/model/Form.ts";
import {Input} from "./vendor/inputs/Input.ts";
// import {Select} from "./vendor/inputs/Select";


window.onload = function () {
    // const choices = [
    //     {value: '1', label: 'qzdqazzd'},
    //     {value: '2', label: 'qzdazdqzd'},
    //     {value: '3', label: 'qzdqzd'},
    //     {value: '4', label: 'qzadzdqzd'},
    //     {value: '5', label: 'qzdqzd'},
    // ];

    const form = new Form(
        {
            id: 'form',
            class: 'form',
            title: 'Formulaire de test',
            options: {
                novalidate: true,   // disable HTML5 validation
                action: '#',
                method: 'POST',
            }
        },
    )

    form.add(new Input(
        {
            label: 'first_name',
            id: 'first_name',
            type: 'text',
            options: {
                helperText: 'Must be at least 2 characters long',
            }
        }))
        .add(new Input(
            {
                label: 'last_name', id: 'last_name', type: 'text',
                attrs: {placeholder: 'Last name'},
                validator: {enable: true, options: {minLength: 4}}}))
        .add(new Input({label: 'last_name', id: 'qzd', type: 'number', attrs: {placeholder: 'Last name'}}))
        .add(new Input({label: 'email', id: 'email', type: 'email', options: {helperText: 'Must be a valid email'}}))
        .add(new Input({label: 'password', id: 'password', type: 'password', options: {helperText: 'Must be at least 2 characters long'}}))
        .wrap([
            new Input({label: 'city', id: 'city', type: 'text'}),
            new Input({label: 'zip_code', id: 'zip_code', type: 'text'}),
        ])
        .render(document.body);

}