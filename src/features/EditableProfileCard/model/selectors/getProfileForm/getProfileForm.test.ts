import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
    test("should return form", () => {
        const form = {
            first: "FirstName",
            lastname: "LastName",
            age: 65,
            city: "Moscow",
            username: "admin",
            country: Country.Russia,
            currency: Currency.EUR,
        };

        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
