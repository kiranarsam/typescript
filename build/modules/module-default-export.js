"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZipCodeValidator {
    isValid(str) {
        const numberRegexp = /^[0-9]+$/;
        return str.length === 5 && numberRegexp.test(str);
    }
}
exports.default = ZipCodeValidator;
