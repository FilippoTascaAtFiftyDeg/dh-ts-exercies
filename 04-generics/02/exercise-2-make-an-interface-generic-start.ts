/**
 * START: Follow the instructions below.
 */

// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.

type Language = string;
type Languages = Array<Language>

interface Country<T> {
    name: string;
    languages: T;
}

interface SingleLanguageCountry extends Country<Language> {}
interface MultipleLanguagesCountry extends Country<Languages> {}

const languagesObj1: SingleLanguageCountry = {
    name: "New Zealand",
    languages: "English, Māori"
};

console.log(languagesObj1.languages);

const languagesObj2: MultipleLanguagesCountry = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));

// ----

export {};
