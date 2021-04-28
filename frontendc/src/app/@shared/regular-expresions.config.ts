export enum TYPE_REGULAR_EXPRESSION {
    PHONE_NUMBER = '/^.*$/i',
    RFC = '/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/',
    NUMBER = '^[0-9]*$',
    ONLY_LETTERS = '/^[A-Za-z]+$/',
    ZIP = '^\\d{5}?$'
}
