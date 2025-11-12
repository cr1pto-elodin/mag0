import { keyWords } from "./keywords/mapper/keyword.mapper"
import { Token } from "./tokens/model/token.model"

const delimiters = /[A-Za-z_]+|\d+|[^\s]/g

export const tokenizeSingleLine = (content: string) => {
    const contentTokens = content.match(delimiters)

    if (contentTokens === null) {
        return []
    }

    const tokens: Token[] = []

    for (const contentToken of contentTokens) {
        if(contentToken in keyWords){
            const token = new Token({
                type: keyWords[contentToken],
                value: contentToken,
                line: 0,
                column: 0
            })

            tokens.push(token)
        }
    }

    return tokens
}

export const tokenizeFile = (lines: string[]) => {
    return []
}