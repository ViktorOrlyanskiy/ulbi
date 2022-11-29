import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export enum ValidateProfileError {
    INCORRECT_USER_DATA = " INCORRECT_USER_DATA",
    INCORRECT_AGE = " INCORRECT_AGE",
    INCORRECT_CITY = " INCORRECT_CITY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    city?: string;
    currency?: Currency;
    country?: Country;
    username?: string;
    avatar?: string;
}
