const delimiters = /[A-Za-z_]+|\d+|[^\s]/g

export const tokenizeSingleLine = (content: string) => {
    const contentTokens = content.match(delimiters)
    return contentTokens
}

export const tokenizeFile = (lines: string[]) => {
    return []
}