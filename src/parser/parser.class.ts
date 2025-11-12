import { Token } from "../tokens/model/token.model";

export class Parser {
    private tokens: Token[] = []
    private current: number = 0

    constructor(tokens: Token[]) {
        this.tokens = tokens
    }
}