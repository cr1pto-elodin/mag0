import * as readline from 'readline'
import { stdin as input, stdout as output} from 'process'
import { tokenizeSingleLine, tokenizeFile } from './src/tokenizer';
import { getFileContentAsync } from './src/utils/files.utils';

async function getInputLoop(rl: readline.promises.Interface) {
    while (true) {
        const content: string = await rl.question('>>> ')

        if (content.trim().toLowerCase() === 'exit') {
            console.log('Exiting mag0 compiler...')
            break
        }

        const tokens = tokenizeSingleLine(content)

        console.log(tokens)
    }
}

async function getFileInput(rl: readline.promises.Interface) {
    const path: string = await rl.question('Provide fullpath of file:\n')

    const lines: string[] = await getFileContentAsync(path)

    const tokens = tokenizeFile(lines)

    return tokens
}

async function main() {
    const rl = readline.promises.createInterface({input, output})

    const answer: string = await rl.question('Execute file?\n')

    if (answer.trim().toLowerCase() === 'yes') {
        try {
            const tokens = await getFileInput(rl)
            console.log(tokens)
        } catch (error: any) {
            console.log(`Error found: ${error.message}`)
            console.log('Ending compiling process\n')
        } finally {
            process.exit(0)
        }
    }

    getInputLoop(rl)
}

main()