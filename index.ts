import * as readlineSync from 'readline-sync';
import { tokenize } from './src/compiler';

const content: string = readlineSync.question('Write the mag0 command: \n >>> ')

const tokenizedContent = tokenize(content)

console.log(tokenizedContent)