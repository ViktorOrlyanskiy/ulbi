import { TestAsyncThunk } from "app/config/tests";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { fetchProfileData } from "./fetchProfileData";

const data = {
    first: "FirstName",
    lastname: "LastName",
    age: 65,
    city: "Moscow",
    username: "admin",
    country: Country.Russia,
    currency: Currency.EUR,
};

describe("fetchProfileData", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
