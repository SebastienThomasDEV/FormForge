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
            options: {
                novalidate: true,   // disable HTML5 validation
                action: '#',
                method: 'POST',
                autocomplete: 'off',
                submitLabel: 'Envoyer'
            }
        },
    )

    form.add(new Input(
        {
            label: 'Prénom',
            id: 'first_name',
            type: 'email',
            options: {helperText: 'Must be at least 2 characters long'}
        }))
    form.add(new Input(
        {
            label: 'Nom',
            id: 'last_name',
            type: 'text',
            options: {
                helperText: 'Must be different from first name',
            },

        }))

    form.render(document.body);

}