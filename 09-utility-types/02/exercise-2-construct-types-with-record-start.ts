/**
 * START: Follow the instructions below.
 */

// Fix this use of the `Record` utility type so it constructs a valid type.

const currency: Record<string, string> = {
    name: "United States dollar",
    code: "USD",
    symbol: "$",
};

// Add a type annotation to the `currencies` variable that uses
// the `Record` utility type.
// Hint: Pass the `Currency` type as the second type argument to `Record<>`.

interface Currency {
    name: string;
    code: string;
    symbol: string;
}

enum CountriesEnum {
    france,
    china,
    colombia
}

const currencies: Record<keyof typeof CountriesEnum, Currency> = {
    france: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
    },
    china: {
        name: "Renminbi",
        code: "CNY",
        symbol: "¥",
    },
    colombia: {
        name: "Colombian peso",
        code: "COP",
        symbol: "$",
    }
};

type CountriesType = {
    france: 'France',
    china: 'China',
    colombia: 'Colombia'
}

const currencies2: {[P in keyof CountriesType]: Currency} = {
    france: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
    },
    china: {
        name: "Renminbi",
        code: "CNY",
        symbol: "¥",
    },
    colombia: {
        name: "Colombian peso",
        code: "COP",
        symbol: "$",
    }
};

const currencies3: Record<keyof CountriesType, Currency> = {
    france: {
        name: "Euro",
        code: "EUR",
        symbol: "€",
    },
    china: {
        name: "Renminbi",
        code: "CNY",
        symbol: "¥",
    },
    colombia: {
        name: "Colombian peso",
        code: "COP",
        symbol: "$",
    }
};

// ----

export {};
