import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
    test("should return data", () => {
        const data = {
            first: "FirstName",
            lastname: "LastName",
            age: 65,
            city: "Moscow",
            username: "admin",
            country: Country.Russia,
            currency: Currency.EUR,
        };

        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
