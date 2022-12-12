import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "@/app/config/tests";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Profile } from "@/entities/Profile";
import { $api } from "@/shared/api/axiosApi";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: Profile = {
    id: "1",
    first: "FirstName",
    lastname: "LastName",
    age: 65,
    city: "Moscow",
    username: "admin",
    country: Country.Russia,
    currency: Currency.EUR,
    avatar: "avatar",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: { authData: { id: "1" } },
    },
    asyncReducers: { profile: profileReducer },
};

describe("EditableProfileCard", () => {
    test("Переключение в режим редактирования профиля", async () => {
        componentRender(<EditableProfileCard />, options);

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.EditButton")
        );

        expect(
            screen.getByTestId("EditableProfileCard.CancelButton")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("EditableProfileCard.SaveButton")
        ).toBeInTheDocument();
    });

    test("Отмена редактирования профиля", async () => {
        componentRender(<EditableProfileCard />, options);

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.EditButton")
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.first"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
        await userEvent.clear(screen.getByTestId("ProfileCard.city"));
        await userEvent.clear(screen.getByTestId("ProfileCard.username"));

        expect(screen.getByTestId("ProfileCard.first")).toHaveValue("");
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("");
        expect(screen.getByTestId("ProfileCard.city")).toHaveValue("");
        expect(screen.getByTestId("ProfileCard.username")).toHaveValue("");

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.CancelButton")
        );

        expect(screen.getByTestId("ProfileCard.first")).toHaveValue(
            "FirstName"
        );
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue(
            "LastName"
        );
        expect(screen.getByTestId("ProfileCard.city")).toHaveValue("Moscow");
        expect(screen.getByTestId("ProfileCard.username")).toHaveValue("admin");
    });

    test("Ввод некорректных данных", async () => {
        componentRender(<EditableProfileCard />, options);

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.EditButton")
        );

        await userEvent.clear(screen.getByTestId("ProfileCard.first"));
        await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
        await userEvent.clear(screen.getByTestId("ProfileCard.city"));
        await userEvent.clear(screen.getByTestId("ProfileCard.username"));

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.SaveButton")
        );

        screen
            .getAllByTestId("EditableProfileCard.Error.Text")
            .forEach((error) => expect(error).toBeInTheDocument());
    });

    test("Ввод корректных данных и отправка запроса на сервер", async () => {
        const mocPutReq = jest.spyOn($api, "put");
        componentRender(<EditableProfileCard />, options);

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.EditButton")
        );

        await userEvent.type(
            screen.getByTestId("ProfileCard.first"),
            "new firstname"
        );
        await userEvent.type(
            screen.getByTestId("ProfileCard.lastname"),
            "new lastname"
        );

        await userEvent.click(
            screen.getByTestId("EditableProfileCard.SaveButton")
        );
        expect(mocPutReq).toHaveBeenCalled();
    });
});
