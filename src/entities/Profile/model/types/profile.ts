import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

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
