export const tokenize = (content: string) => {
    const delimiters = /[A-Za-z_]+|\d+|[^\s]/g
    const contentTokens = content.match(delimiters)
    return contentTokens
}