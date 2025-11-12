export const error = (line: number, column: number, message: string) => {
    report(line, column, message)
}

const report = (line: number, column: number, message: string) => {
    console.log(`Error in line: ${line} and column: ${column}\n${message}`)
}