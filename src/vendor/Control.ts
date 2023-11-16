import {IAttributes} from "./interfaces/IAttributes.ts";

export class Control implements IAttributes {
    name: string;
    label: string;

    constructor(name: string, label: string) {
        this.name = name;
        this.label = label;
    }
}