"use strict";
exports.__esModule = true;
exports.FizzBuzzTranslate = void 0;
var FizzBuzzTranslate = /** @class */ (function () {
    function FizzBuzzTranslate() {
    }
    FizzBuzzTranslate.isBetweenZeroAnd100 = function (number) {
        var betweenZeroAnd100 = number > 0 && number < 100;
        if (betweenZeroAnd100)
            return true;
        return false;
    };
    FizzBuzzTranslate.checkNumberIncludeThree = function (number) {
        var numberToString = String(number).split('');
        for (var i = 0; i < numberToString.length; i++) {
            if (numberToString[i] === '3')
                return true;
            return false;
        }
    };
    FizzBuzzTranslate.checkNumberIncludeFive = function (number) {
        var numberToString = String(number).split('');
        for (var i in numberToString) {
            if (numberToString[i] == '5')
                return true;
            return false;
        }
    };
    FizzBuzzTranslate.checkFizz = function (number) {
        var fizz = number % 3 == 0;
        var includeThree = this.checkNumberIncludeThree(number) == true;
        var notBuzz = number % 5 !== 0;
        if ((fizz || includeThree) && notBuzz)
            return true;
        return false;
    };
    FizzBuzzTranslate.checkBuzz = function (number) {
        var buzz = number % 5 == 0;
        var includeFive = this.checkNumberIncludeFive(number) == true;
        var notFizz = number % 3 !== 0;
        if (buzz || includeFive && notFizz)
            return true;
        return false;
    };
    FizzBuzzTranslate.checkFizzBuzz = function (number) {
        var fizzBuzz = number % 3 == 0 && number % 5 == 0;
        if (fizzBuzz)
            return true;
        else
            return false;
    };
    FizzBuzzTranslate.translateFizzBuzz = function (number) {
        var translate = [];
        var fizz = this.checkFizz(number) == true;
        var buzz = this.checkBuzz(number) == true;
        var fizzBuzz = this.checkFizzBuzz(number) == true;
        if (this.isBetweenZeroAnd100(number)) {
            if (fizz)
                return translate.push('Fizz');
            if (buzz)
                return translate.push('Buzz');
            else if (fizzBuzz)
                return translate.push('FizzBuzz');
            else {
                var numberToString = String(number).split('');
                for (var i in numberToString) {
                    switch (numberToString[i]) {
                        case '0':
                            translate.push('khong');
                            break;
                        case '1':
                            translate.push('mot');
                            break;
                        case '2':
                            translate.push('hai');
                            break;
                        case '3':
                            translate.push('ba');
                            break;
                        case '4':
                            translate.push('bon');
                            break;
                        case '5':
                            translate.push('nam');
                            break;
                        case '6':
                            translate.push('sau');
                            break;
                        case '7':
                            translate.push('bay');
                            break;
                        case '8':
                            translate.push('tam');
                            break;
                        case '9':
                            translate.push('chin');
                            break;
                    }
                }
                return translate;
            }
        }
    };
    return FizzBuzzTranslate;
}());
exports.FizzBuzzTranslate = FizzBuzzTranslate;
// FizzBuzzTranslate.translateFizzBuzz(13);
FizzBuzzTranslate.checkNumberIncludeThree(13);
