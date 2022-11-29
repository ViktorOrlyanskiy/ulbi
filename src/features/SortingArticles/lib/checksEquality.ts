export const checksEquality = <T>(arg1: T | null, arg2: T) => {
    if (arg1 !== null) {
        return arg1 && arg1 !== arg2 ? arg1 : arg2;
    }
    return arg2;
};
