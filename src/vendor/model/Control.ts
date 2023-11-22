import {IAttributes} from "../interfaces/IAttributes";

export class Control implements IAttributes {
    id: string;
    label: string;

    constructor(id: string, label: string) {
        this.id = id;
        this.label = label;
    }
    
}