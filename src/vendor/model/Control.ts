import {IAttributes} from "../interfaces/IAttributes";

export class Control implements IAttributes {
    id: string;
    label: string;
    // @ts-ignore
    control: HTMLElement;


    constructor(id: string, label: string) {
        this.id = id;
        this.label = label;
    }

    
}