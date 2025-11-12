import * as fs from 'fs';
import * as readline from 'readline';

export const getFileContentAsync = async (filePath: string): Promise<string[]> => {
    try {
        let hasError: boolean = false

        const stream = fs.createReadStream(filePath, 'utf-8')
        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity
        })

        let lines: string[] = [];

        for await (const line of rl) {
            lines.push(line)
        }

        if (hasError) {
            throw new Error('The file has mag0 content error')
        }

        return lines;
    } catch (error: any) {
        console.log(`Error while reading file: ${error.message}`)
        throw error;
    }
}