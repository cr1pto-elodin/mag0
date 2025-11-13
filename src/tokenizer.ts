import { keyWords } from "./keywords/mapper/keyword.mapper"
import { TokenTypeEnum } from "./tokens/enum/tokens.enum"
import { Token } from "./tokens/model/token.model"

export class Tokenizer {
    private delimiters = /[A-Za-z_]+|\d+|[^\s]/g
    private identifierRegEx = /^[A-Za-z_]+$/
    private numberRegex = /^\d+$/

    private readStringToken(
        contentToken: Token,
        line: number,
        column: number
    ) {

    }

    private readNumberToken(
        contentToken: string,
        line: number,
        column: number
    ) {
        return new Token({
            type: TokenTypeEnum.NUMBER,
            value: contentToken,
            line: line,
            column: column
        })
    }

    public tokenizeSingleLine(
        content: string,
        line: number
    ) {
        const contentTokens = content.match(this.delimiters)

        if (contentTokens === null) {
            return []
        }

        const tokens: Token[] = []
        let insideString = false;
        let stringBuffer = '';
        let stringStartColumn = 0;

        for (let index = 0; index < contentTokens.length; index++) {
            const contentToken = contentTokens[index]!

            //Strings
            if (contentToken === '"') {
                if (insideString) {
                    tokens.push(
                        new Token({
                            type: TokenTypeEnum.STRING,
                            value: stringBuffer,
                            line,
                            column: stringStartColumn,
                        })
                    )

                    stringBuffer = ''
                } else {
                    stringStartColumn = index + 1
                }
                insideString = !insideString
                continue
            }

            if (insideString) {
                stringBuffer += contentToken
                continue
            }

            //Multi char operators
            const nextToken = contentTokens[index + 1]
            let combined = contentToken + (nextToken ?? '')
            if (combined in keyWords) {
                tokens.push(
                    new Token({
                        type: keyWords[combined],
                        value: combined,
                        line,
                        column: index + 1,
                    })
                )
                index++
                continue
            }

            //Single char operators and keywords
            if (contentToken in keyWords) {
                const token = new Token({
                    type: keyWords[contentToken],
                    value: contentToken,
                    line: line,
                    column: index + 1
                })

                tokens.push(token)
                continue
            }

            //Numbers
            if (this.numberRegex.test(contentToken)) {
                const token = this.readNumberToken(
                    contentToken,
                    line,
                    index + 1
                )

                tokens.push(token)

                continue
            }

            //Identifiers
            if (this.identifierRegEx.test(contentToken)) {
                tokens.push(
                    new Token({
                        type: TokenTypeEnum.IDENTIFIER,
                        value: contentToken,
                        line,
                        column: index + 1,
                    })
                );
                continue;
            }
        }

        return tokens
    }

    public tokenizeFileContent(lines: string[]) {
        const tokenPerLines: Token[][] = []

        for (const [i, line] of lines.entries()) {
            const tokensInLine = this.tokenizeSingleLine(line, i + 1)
            tokenPerLines.push(tokensInLine)
        }

        return tokenPerLines
    }
}