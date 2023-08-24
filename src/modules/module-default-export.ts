import { Validator } from "./modules";

export default class ZipCodeValidator implements Validator {
    isValid(str: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return str.length === 5 && numberRegexp.test(str);
    }
}