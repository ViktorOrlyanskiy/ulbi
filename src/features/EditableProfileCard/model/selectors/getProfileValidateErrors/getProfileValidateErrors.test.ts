import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "entities/Profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors", () => {
    test("should return validateError", () => {
        const validateError = [
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toBe(
            validateError
        );
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
