/**
 * Функция обрезает строку в соотвествии с переданной длинной
 * @param string
 * @param lenght
 * @returns
 */

export const checkLengthString = (string: string, lenght: number) => {
    if (string && string.length > lenght) {
        const result = string
            .split("")
            .filter((_, index) => index < lenght - 3)
            .join("");
        return `${result}...`;
    }
    return string;
};
