import { Card } from "./card";

export class Player {
    id: number = 0;
    name: string = "";
    balance: number = 0;
    outcome: string = "";
    cards!: Card[];
}
