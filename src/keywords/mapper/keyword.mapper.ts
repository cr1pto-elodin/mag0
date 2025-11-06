import { TokenTypeEnum } from "../../tokens/enum/tokens.enum";
import { MethodsEnum } from "../enums/methods.enum";
import { OperatorsEnum } from "../enums/operators.enum";
import { SeparatorsEnum } from "../enums/separators.enum";

const keyWords: Record<string, TokenTypeEnum> = {
    [MethodsEnum.PRINT]: TokenTypeEnum.PRINT,
    [OperatorsEnum.ADD]: TokenTypeEnum.ADD,
    [SeparatorsEnum.LEFT_PARENTHESES]: TokenTypeEnum.LEFT_PARENTHESES,
    [SeparatorsEnum.RIGHT_PARENTHESES]: TokenTypeEnum.RIGHT_PARENTHESES,
}