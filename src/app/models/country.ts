import { Flags } from "./flags";
import { Name } from "./name";

export interface Country {

    name:Name[];
    flags:Flags[];
    region:string;
    population:number;
    capital:string;

    
}
