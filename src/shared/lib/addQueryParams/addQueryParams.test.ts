import { getQueryParams } from "./addQueryParams";

describe("getQueryParams", () => {
    test("with only first param", () => {
        const params = { test: "value" };
        expect(getQueryParams(params)).toBe("?test=value");
    });

    test("with multiple params", () => {
        const params = { test: "value", second: "2" };
        expect(getQueryParams(params)).toBe("?test=value&second=2");
    });

    test("with undefined", () => {
        const params = { test: "value", second: undefined };
        expect(getQueryParams({ test: "value", second: undefined })).toBe(
            "?test=value"
        );
    });
});
