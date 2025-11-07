import { Token } from "../tokens/interface/token.interface";

export class Parser {
    private tokens: Token[] = []
    private current: number = 0

    constructor(tokens: Token[]) {
        this.tokens = tokens
    }
}