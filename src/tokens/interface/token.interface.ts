import { TokenTypeEnum } from "../enum/tokens.enum";

export interface Token {
    type: TokenTypeEnum;
    value: string;
    line: number;
    column: number;
}