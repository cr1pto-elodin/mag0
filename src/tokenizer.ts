import { Token } from "./tokens/model/token.model"

const delimiters = /[A-Za-z_]+|\d+|[^\s]/g

export const tokenizeSingleLine = (content: string) => {
    const contentTokens = content.match(delimiters)

    if (contentTokens === null) {
        return ''
    }

    for (const contentToken of contentTokens) {
        const token = new Token({})
    }

    return contentTokens
}

export const tokenizeFile = (lines: string[]) => {
    return []
}