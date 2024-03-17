export const RegularRegex = {
    number: /^[0-9]*$/,
    mobile: /^[+0-9]*$/,
    alphabet: /^[a-zA-b\s.]*$/,
    tenDigit: /^\d{10}$/,
    url: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
    date: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/,
    email: /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    usPhone: /^((\([0-9]{3}\))|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/,
    upperCase: /[A-Z]/,
    lowerCase: /[a-z]/,
    specialCharacter: /[\W_]/
};