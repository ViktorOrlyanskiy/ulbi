import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "entities/Profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./profileSlice";

const data = {
    first: "FirstName",
    lastname: "LastName",
    age: 65,
    city: "Moscow",
    username: "admin",
    country: Country.Russia,
    currency: Currency.EUR,
};

describe("profileSlice", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(false)
            )
        ).toEqual({ readonly: false });
    });

    test("test cansel edit", () => {
        const state: DeepPartial<ProfileSchema> = { data, readonly: false };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    first: "first",
                    lastname: "lastname",
                })
            )
        ).toEqual({ form: { ...data, first: "first", lastname: "lastname" } });
    });

    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({ isLoading: true, validateError: undefined });
    });

    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, "")
            )
        ).toEqual({
            data,
            form: data,
            isLoading: false,
            readonly: true,
            validateError: undefined,
        });
    });

    test("test update profile service rejected", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.rejected)
        ).toEqual({
            isLoading: false,
            validateError: undefined,
        });
    });
});
