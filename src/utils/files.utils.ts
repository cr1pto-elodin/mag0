import * as fs from 'fs/promises';

export const getFileContentAsync = async (filePath: string): Promise<string> => {
    try {
        const content: string = await fs.readFile('filePath','utf-8')
        return content;
    } catch (error: any) {
        console.log(`Error while reading file: ${error.message}`)
        throw error;
    }
}