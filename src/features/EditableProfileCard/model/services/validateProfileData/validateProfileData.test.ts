import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "@/entities/Profile";
import { validateProfileData } from "./validateProfileData";

const data = {
    first: "FirstName",
    lastname: "LastName",
    age: 65,
    city: "Moscow",
    username: "admin",
    country: Country.Russia,
    currency: Currency.EUR,
};

describe("validateProfileData", () => {
    test("success", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("INCORRECT_USER_DATA", async () => {
        const result = validateProfileData({
            ...data,
            first: "",
            lastname: "",
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test("INCORRECT_AGE", async () => {
        const result = validateProfileData({
            ...data,
            age: 2.5,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test("INCORRECT_USER_DATA", async () => {
        const result = validateProfileData({
            ...data,
            city: "",
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test("INCORRECT_ALL", async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
});
