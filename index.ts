import * as readlineSync from 'readline-sync';
import { tokenizer } from './src/compiler';

const content: string = readlineSync.question('Write the mag0 command: \n >>> ')

const tokenizedContent = tokenizer(content)

console.log(tokenizedContent)