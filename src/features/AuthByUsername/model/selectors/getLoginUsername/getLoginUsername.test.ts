import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: "admin" },
        };
        expect(getLoginUsername(state as StateSchema)).toBe("admin");
    });

    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe("");
    });
});
