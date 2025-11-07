import { TokenTypeEnum } from "../../tokens/enum/tokens.enum";

const keyWords: Record<string, TokenTypeEnum> = {
    'print': TokenTypeEnum.PRINT,
    '+': TokenTypeEnum.ADD,
    'if': TokenTypeEnum.IF,
}