import { TokenTypeEnum } from "../enum/tokens.enum";

export class Token {
    type: TokenTypeEnum;
    value: string;
    line: number;
    column: number;

    constructor(partial: Partial<Token>) { 
        Object.assign(this,partial)
    }
}