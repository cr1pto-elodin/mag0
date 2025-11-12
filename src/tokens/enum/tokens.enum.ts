export enum TokenTypeEnum {
    // Literals
    NUMBER = 'NUMBER',
    STRING = 'STRING',
    IDENTIFIER = 'IDENTIFIER',
        
    //Single token characters
    LEFT_PARENTHESES = 'LEFT_PARENTHESES',
    RIGHT_PARENTHESES = 'RIGHT_PARENTHESES',
    QUOTATION_MARKS = 'QUOTATION_MARKS',
    RIGHT_BRACE = 'RIGHT_BRACE',
    LEFT_BRACE = 'LEFT_BRACE',
    COMMA = 'COMMA',
    DOT = 'DOT',
    MINUS = 'MINUS',
    PLUS = 'PLUS',
    SEMICOLON = 'SEMICOLON',
    SLASH = 'SLASH',
    STAR = 'STAR',

    //One or two characters token
    BANG = 'BANG',
    BANG_EQUAL = 'BANG_EQUAL',
    EQUAL = 'EQUAL',
    EQUAL_EQUAL = 'EQUAL_EQUAL',
    GREATER = 'GREATER',
    GREATER_EQUAL = 'GREATER_EQUAL',
    LESS = 'LESS',
    LESS_EQUAL = 'LESS_EQUAL',

    //Keywords
    AND = 'AND',
    OR = 'OR',
    IF = 'IF',
    ELSE = 'ELSE',
    TRUE = 'TRUE',
    FALSE = 'FALSE',
    FOR = 'FOR',
    WHILE = 'WHILE',
    PRINT = 'PRINT',
    RETURN = 'RETURN',
    CLASS = 'CLASS',
    THIS = 'THIS',
    VAR = 'VAR',
    NIL = 'NIL',
}