import { keyWords } from "./keywords/mapper/keyword.mapper"
import { TokenTypeEnum } from "./tokens/enum/tokens.enum"
import { Token } from "./tokens/model/token.model"

const delimiters = /[A-Za-z_]+|\d+|[^\s]/g
const identifierRegEx = /^[A-Za-z_]+$/
const numberRegex = /^\d+$/

export const tokenizeSingleLine = (content: string, line: number) => {
    const contentTokens = content.match(delimiters)

    if (contentTokens === null) {
        return []
    }

    const tokens: Token[] = []
    let insideString = false;
    let stringBuffer = '';
    let stringStartColumn = 0;

    for (const [index, contentToken] of contentTokens.entries()) {
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

        if (numberRegex.test(contentToken)) {
            const token = new Token({
                type: TokenTypeEnum.NUMBER,
                value: contentToken,
                line: line,
                column: index
            })

            tokens.push(token)

            continue
        }

        if (identifierRegEx.test(contentToken)) {
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

export const tokenizeFileContent = (lines: string[]) => {
    const tokenPerLines: Token[][] = []

    for (const [i, line] of lines.entries()) {
        const tokensInLine = tokenizeSingleLine(line, i + 1)
        tokenPerLines.push(tokensInLine)
    }

    return tokenPerLines
}