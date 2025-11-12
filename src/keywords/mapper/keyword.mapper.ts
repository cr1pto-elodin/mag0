import { TokenTypeEnum } from "../../tokens/enum/tokens.enum";

export const keyWords: Record<string, TokenTypeEnum> = {
    // Single-character tokens
    '(': TokenTypeEnum.LEFT_PARENTHESES,
    ')': TokenTypeEnum.RIGHT_PARENTHESES,
    '{': TokenTypeEnum.LEFT_BRACE,
    '}': TokenTypeEnum.RIGHT_BRACE,
    ',': TokenTypeEnum.COMMA,
    '.': TokenTypeEnum.DOT,
    '-': TokenTypeEnum.MINUS,
    '+': TokenTypeEnum.PLUS,
    ';': TokenTypeEnum.SEMICOLON,
    '/': TokenTypeEnum.SLASH,
    '*': TokenTypeEnum.STAR,
    '"': TokenTypeEnum.QUOTATION_MARKS,

    // One or two-character tokens
    '!': TokenTypeEnum.BANG,
    '!=': TokenTypeEnum.BANG_EQUAL,
    '=': TokenTypeEnum.EQUAL,
    '==': TokenTypeEnum.EQUAL_EQUAL,
    '>': TokenTypeEnum.GREATER,
    '>=': TokenTypeEnum.GREATER_EQUAL,
    '<': TokenTypeEnum.LESS,
    '<=': TokenTypeEnum.LESS_EQUAL,

    // Keywords
    'and': TokenTypeEnum.AND,
    'or': TokenTypeEnum.OR,
    'if': TokenTypeEnum.IF,
    'else': TokenTypeEnum.ELSE,
    'true': TokenTypeEnum.TRUE,
    'false': TokenTypeEnum.FALSE,
    'for': TokenTypeEnum.FOR,
    'while': TokenTypeEnum.WHILE,
    'print': TokenTypeEnum.PRINT,
    'return': TokenTypeEnum.RETURN,
    'class': TokenTypeEnum.CLASS,
    'this': TokenTypeEnum.THIS,
    'var': TokenTypeEnum.VAR,
    'nil': TokenTypeEnum.NIL,
};
