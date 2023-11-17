import {IAttributes} from "./../interfaces/IAttributes.ts";

export class Control implements IAttributes {
    name: string;
    label: string;
    dom_element: HTMLDivElement;

    constructor(name: string, label: string) {
        this.dom_element = document.createElement('div');
        this.name = name;
        this.label = label;
    }
}