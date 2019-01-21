# isit.js

[![JS.ORG](https://img.shields.io/badge/js.org-is-ffb400.svg?style=flat-square)](http://js.org)

## This is a general-purpose check library.

- No dependencies
- AMD, Node & browser ready
- Supports all ES5 and above environments (IE8 and below with [es5-shim](https://github.com/es-shims/es5-shim))

**Note**

The origin of this project was the wonderful work done by arasatasaygin at [is.js](https://github.com/arasatasaygin/is.js), and should be a drop-in replacement for it (outside renaming of is to isit). I noticed there has hasn't been work on it in months, and the issues are growing, so I originally just did a fork of the work. From there I rearchitected the library to be a modular setup that is ES2015-driven and has complete test coverage. I have also made minor tweaks and bugfixes based on the backlog in is.js, but mainly I hope to grow it from here.

## Install:

Node.js:

```
npm i isitjs --save
```

## Usage:

```
// ES2015
import isit from "isitjs";

// CommonJS
var isit = require("isitjs");

// if you just want specific categories
import isitType from "isit/lib/type";
// or
var isitType from require("isit/lib/type").default;

// if you just want specific modules
import {
    isitBoolean // all functions are named the same, just with "isit" in front and made camelCase
} from "isitjs/lib/type";
// or
var isitBoolean = require("isitjs/lib/type").isitBoolean;
```

## Custom build:

TBD ... this feature was janky from the beginning and may no longer be needed with the modular setup. To do it right will take some time, so I'll wait to hear from the community before I invest the time to build it.

# Type checks

## isit.arguments(value:any)

### Checks if the given value type is arguments.
interfaces: not, all, any

```javascript
var getArguments = function() {
    return arguments;
};
var arguments = getArguments();

isit.arguments(arguments);
=> true

isit.not.arguments({foo: 'bar'});
=> true

isit.all.arguments(arguments, 'bar');
=> false

isit.any.arguments(['foo'], arguments);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.arguments([arguments, 'foo', 'bar']);
=> false
```

## isit.array(value:any)

### Checks if the given value type is array.
interfaces: not, all, any

```javascript
isit.array(['foo', 'bar', 'baz']);
=> true

isit.not.array({foo: 'bar'});
=> true

isit.all.array(['foo'], 'bar');
=> false

isit.any.array(['foo'], 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.array([[1, 2], 'foo', 'bar']);
=> false
```

## isit.boolean(value:any)

### Checks if the given value type is boolean.
interfaces: not, all, any

```javascript
isit.boolean(true);
=> true

isit.not.boolean({foo: 'bar'});
=> true

isit.all.boolean(true, 'bar');
=> false

isit.any.boolean(true, 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.boolean([true, 'foo', 'bar']);
=> false
```

## isit.date(value:any)

### Checks if the given value type is date.
interfaces: not, all, any

```javascript
isit.date(new Date());
=> true

isit.not.date({foo: 'bar'});
=> true

isit.all.date(new Date(), 'bar');
=> false

isit.any.date(new Date(), 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.date([new Date(), 'foo', 'bar']);
=> false
```

## isit.error(value:any)

### Checks if the given value type is error.
interfaces: not, all, any

```javascript
isit.error(new Error());
=> true

isit.not.error({foo: 'bar'});
=> true

isit.all.error(new Error(), 'bar');
=> false

isit.any.error(new Error(), 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.error([new Error(), 'foo', 'bar']);
=> false
```

## isit.function(value:any)

### Checks if the given value type is function.
interfaces: not, all, any

```javascript
isit.function(toString);
=> true

isit.not.function({foo: 'bar'});
=> true

isit.all.function(toString, 'bar');
=> false

isit.any.function(toString, 'bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.function([toString, 'foo', 'bar']);
=> false
```

## isit.nan(value:any)

### Checks if the given value type is NaN.
interfaces: not, all, any

```javascript
isit.nan(NaN);
=> true

isit.not.nan(42);
=> true

isit.all.nan(NaN, 1);
=> false

isit.any.nan(NaN, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.nan([NaN, 'foo', 1]);
=> false
```

## isit.null(value:any)

### Checks if the given value type is null.
interfaces: not, all, any

```javascript
isit.null(null);
=> true

isit.not.null(42);
=> true

isit.all.null(null, 1);
=> false

isit.any.null(null, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.null([null, 'foo', 1]);
=> false
```

## isit.number(value:any)

### Checks if the given value type is number.
interfaces: not, all, any

```javascript
isit.number(42);
=> true

isit.number(NaN);
=> false

isit.not.number('42');
=> true

isit.all.number('foo', 1);
=> false

isit.any.number({}, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.number([42, 'foo', 1]);
=> false
```

## isit.object(value:any)

### Checks if the given value type is object.
interfaces: not, all, any

```javascript
isit.object({foo: 'bar'});
=> true

// functions are also returning as true
isit.object(toString);
=> true

isit.not.object('foo');
=> true

isit.all.object({}, 1);
=> false

isit.any.object({}, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.object([{}, new Object()]);
=> true
```

## isit.json(value:any)

### Checks if the given value type is pure json object.
interfaces: not, all, any

```javascript
isit.json({foo: 'bar'});
=> true

// functions are returning as false
isit.json(toString);
=> false

isit.not.json([]);
=> true

isit.all.json({}, 1);
=> false

isit.any.json({}, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.json([{}, {foo: 'bar'}]);
=> true
```

## isit.regexp(value:any)

### Checks if the given value type is RegExp.
interfaces: not, all, any

```javascript
isit.regexp(/test/);
=> true

isit.not.regexp(['foo']);
=> true

isit.all.regexp(/test/, 1);
=> false

isit.any.regexp(new RegExp('ab+c'), 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.regexp([{}, /test/]);
=> false
```

## isit.string(value:any)

### Checks if the given value type is string.
interfaces: not, all, any

```javascript
isit.string('foo');
=> true

isit.not.string(['foo']);
=> true

isit.all.string('foo', 1);
=> false

isit.any.string('foo', 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.string([{}, 'foo']);
=> false
```

## isit.char(value:any)

### Checks if the given value type is char.
interfaces: not, all, any

```javascript
isit.char('f');
=> true

isit.not.char(['foo']);
=> true

isit.all.char('f', 1);
=> false

isit.any.char('f', 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.char(['f', 'o', 'o']);
=> true
```

## isit.undefined(value:any)

### Checks if the given value type is undefined.
interfaces: not, all, any

```javascript
isit.undefined(undefined);
=> true

isit.not.undefined(null);
=> true

isit.all.undefined(undefined, 1);
=> false

isit.any.undefined(undefined, 2);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.undefined([{}, undefined]);
=> false
```

## isit.sameType(value:any, value:any)

### Checks if the given value types are same type.
interface: not

```javascript
isit.sameType(42, 7);
=> true

isit.sameType(42, '7');
=> false

isit.not.sameType(42, 7);
=> false
```

## isit.typedArray(value:any)

### Checks if the given value is a typed array.
interfaces: not, all, any

```javascript
isit.typedArray(new Float32Array());
=> true

isit.typedArray([]);
=> false

isit.not.typedArray(new Uint16Array());
=> false

isit.all.typedArray(undefined, new Int8Array());
=> false

isit.any.typedArray(undefined, new Int8Array());
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.typedArray([new Float64Array(), undefined]);
=> false
```

# Presence checks

## isit.empty(value:object|array|string)

### Checks if the given value is empty.
interfaces: not, all, any

```javascript
isit.empty({});
=> true

isit.empty([]);
=> true

isit.empty('');
=> true

isit.not.empty(['foo']);
=> true

isit.all.empty('', {}, ['foo']);
=> false

isit.any.empty([], 42);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.empty([{}, 'foo']);
=> false
```

## isit.existy(value:any)

### Checks if the given value is existy. (not null or undefined)
interfaces: not, all, any

```javascript
isit.existy({});
=> true

isit.existy(null);
=> false

isit.not.existy(undefined);
=> true

isit.all.existy(null, ['foo']);
=> false

isit.any.existy(undefined, 42);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.existy([{}, 'foo']);
=> true
```

## isit.truthy(value:any)

### Checks if the given value is truthy. (existy and not false)
interfaces: not, all, any

```javascript
isit.truthy(true);
=> true

isit.truthy(null);
=> false

isit.not.truthy(false);
=> true

isit.all.truthy(null, true);
=> false

isit.any.truthy(undefined, true);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.truthy([{}, true]);
=> true
```

## isit.falsy(value:any)

### Checks if the given value is falsy.
interfaces: not, all, any

```javascript
isit.falsy(false);
=> true

isit.falsy(null);
=> true

isit.not.falsy(true);
=> true

isit.all.falsy(null, false);
=> true

isit.any.falsy(undefined, true);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.falsy([false, true, undefined]);
=> false
```

## isit.space(value:string)

### Checks if the given value is space.
interfaces: not, all, any

```javascript
isit.space(' ');
=> true

isit.space('foo');
=> false

isit.not.space(true);
=> true

isit.all.space(' ', 'foo');
=> false

isit.any.space(' ', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.space([' ', 'foo', undefined]);
=> false
```

## isit.whitespace(value:string)

### Checks if the given value is whitespace.
interfaces: not, all, any

```javascript
isit.whitespace(' ');
=> true

isit.whitespace('foo');
=> false

isit.not.whitespace(true);
=> true

isit.all.whitespace('          ', ' ');
=> true

isit.any.whitespace(' ', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.whitespace([' ', 'foo', undefined]);
=> false
```

# RegExp checks

## isit.url(value:any)

### Checks if the given value matches url regexp.
interfaces: not, all, any

```javascript
isit.url('http://www.test.com');
=> true

isit.url('foo');
=> false

isit.not.url(true);
=> true

isit.all.url('http://www.test.com', 'foo');
=> false

isit.any.url('http://www.test.com', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.url(['http://www.test.com', 'foo', undefined]);
=> false
```

## isit.email(value:any)

### Checks if the given value matches email regexp.
interfaces: not, all, any

```javascript
isit.email('test@test.com');
=> true

isit.email('foo');
=> false

isit.not.email('foo');
=> true

isit.all.email('test@test.com', 'foo');
=> false

isit.any.email('test@test.com', 'foo');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.email(['test@test.com', 'foo', undefined]);
=> false
```

## isit.creditCard(value:any)

### Checks if the given value matches credit card regexp.
interfaces: not, all, any

```javascript
isit.creditCard(378282246310005);
=> true

isit.creditCard(123);
=> false

isit.not.creditCard(123);
=> true

isit.all.creditCard(378282246310005, 123);
=> false

isit.any.creditCard(378282246310005, 123);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.creditCard([378282246310005, 123, undefined]);
=> false
```

## isit.alphaNumeric(value:any)

### Checks if the given value matches alpha numeric regexp.
interfaces: not, all, any

```javascript
isit.alphaNumeric('alphaNu3er1k');
=> true

isit.alphaNumeric('*?');
=> false

isit.not.alphaNumeric('*?');
=> true

isit.all.alphaNumeric('alphaNu3er1k', '*?');
=> false

isit.any.alphaNumeric('alphaNu3er1k', '*?');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.alphaNumeric(['alphaNu3er1k', '*?']);
=> false
```

## isit.timeString(value:any)

### Checks if the given value matches time string regexp.
interfaces: not, all, any

```javascript
isit.timeString('13:45:30');
=> true

isit.timeString('90:90:90');
=> false

isit.not.timeString('90:90:90');
=> true

isit.all.timeString('13:45:30', '90:90:90');
=> false

isit.any.timeString('13:45:30', '90:90:90');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.timeString(['13:45:30', '90:90:90']);
=> false
```

## isit.dateString(value:any)

### Checks if the given value matches date string regexp.
interfaces: not, all, any

```javascript
isit.dateString('11/11/2011');
=> true

isit.dateString('90/11/2011');
=> false

isit.not.dateString('90/11/2011');
=> true

isit.all.dateString('11/11/2011', '90/11/2011');
=> false

isit.any.dateString('11/11/2011', '90/11/2011');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.dateString(['11/11/2011', '90/11/2011']);
=> false
```

## isit.usZipCode(value:any)

### Checks if the given value matches US zip code regexp.
interfaces: not, all, any

```javascript
isit.usZipCode('02201-1020');
=> true

isit.usZipCode('123');
=> false

isit.not.usZipCode('123');
=> true

isit.all.usZipCode('02201-1020', '123');
=> false

isit.any.usZipCode('02201-1020', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.usZipCode(['02201-1020', '123']);
=> false
```

## isit.caPostalCode(value:any)

### Checks if the given value matches Canada postal code regexp.
interfaces: not, all, any

```javascript
isit.caPostalCode('L8V3Y1');
=> true

isit.caPostalCode('L8V 3Y1');
=> true

isit.caPostalCode('123');
=> false

isit.not.caPostalCode('123');
=> true

isit.all.caPostalCode('L8V3Y1', '123');
=> false

isit.any.caPostalCode('L8V3Y1', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.caPostalCode(['L8V3Y1', '123']);
=> false
```

## isit.ukPostCode(value:any)

### Checks if the given value matches UK post code regexp.
interfaces: not, all, any

```javascript
isit.ukPostCode('B184BJ');
=> true

isit.ukPostCode('123');
=> false

isit.not.ukPostCode('123');
=> true

isit.all.ukPostCode('B184BJ', '123');
=> false

isit.any.ukPostCode('B184BJ', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.ukPostCode(['B184BJ', '123']);
=> false
```

## isit.nanpPhone(value:any)

### Checks if the given value matches North American numbering plan phone regexp.
interfaces: not, all, any

```javascript
isit.nanpPhone('609-555-0175');
=> true

isit.nanpPhone('123');
=> false

isit.not.nanpPhone('123');
=> true

isit.all.nanpPhone('609-555-0175', '123');
=> false

isit.any.nanpPhone('609-555-0175', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.nanpPhone(['609-555-0175', '123']);
=> false
```

## isit.eppPhone(value:any)

### Checks if the given value matches extensible provisioning protocol phone regexp.
interfaces: not, all, any

```javascript
isit.eppPhone('+90.2322456789');
=> true

isit.eppPhone('123');
=> false

isit.not.eppPhone('123');
=> true

isit.all.eppPhone('+90.2322456789', '123');
=> false

isit.any.eppPhone('+90.2322456789', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.eppPhone(['+90.2322456789', '123']);
=> false
```

## isit.socialSecurityNumber(value:any)

### Checks if the given value matches social security number regexp.
interfaces: not, all, any

```javascript
isit.socialSecurityNumber('017-90-7890');
=> true

isit.socialSecurityNumber('123');
=> false

isit.not.socialSecurityNumber('123');
=> true

isit.all.socialSecurityNumber('017-90-7890', '123');
=> false

isit.any.socialSecurityNumber('017-90-7890', '123');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.socialSecurityNumber(['017-90-7890', '123']);
=> false
```

## isit.affirmative(value:any)

### Checks if the given value matches affirmative regexp.
interfaces: not, all, any

```javascript
isit.affirmative('yes');
=> true

isit.affirmative('no');
=> false

isit.not.affirmative('no');
=> true

isit.all.affirmative('yes', 'no');
=> false

isit.any.affirmative('yes', 'no');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.affirmative(['yes', 'y', 'true', 't', 'ok', 'okay']);
=> true
```

## isit.hexadecimal(value:any)

### Checks if the given value matches hexadecimal regexp.
interfaces: not, all, any

```javascript
isit.hexadecimal('f0f0f0');
=> true

isit.hexadecimal(2.5);
=> false

isit.not.hexadecimal('string');
=> true

isit.all.hexadecimal('ff', 'f50');
=> true

isit.any.hexadecimal('ff5500', true);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.hexadecimal(['fff', '333', 'f50']);
=> true
```

## isit.hexColor(value:any)

### Checks if the given value matches hexcolor regexp.
interfaces: not, all, any

```javascript
isit.hexColor('#333');
=> true

isit.hexColor('#3333');
=> false

isit.not.hexColor(0.5);
=> true

isit.all.hexColor('fff', 'f50');
=> true

isit.any.hexColor('ff5500', 0.5);
=> false

// 'all' and 'any' interfaces can also take array parameter
isit.all.hexColor(['fff', '333', 'f50']);
=> true
```

## isit.ip(value:string)

### Checks if the given value matches ip regexp
interfaces: not, all, any

```javascript
isit.ip('198.156.23.5');
=> true

isit.ip('1.2..5');
=> false

isit.not.ip('8:::::::7');
=> true

isit.all.ip('0:1::4:ff5:54:987:C', '123.123.123.123');
=> true

isit.any.ip('123.8.4.3', '0.0.0.0');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.ip(['123.123.23.12', 'A:B:C:D:E:F:0:0']);
=> true
```

## isit.ipv4(value:string)

### Checks if the given value matches ipv4 regexp
interfaces: not, all, any

```javascript
isit.ipv4('198.12.3.142');
=> true

isit.ipv4('1.2..5');
=> false

isit.not.ipv4('8:::::::7');
=> true

isit.all.ipv4('198.12.3.142', '123.123.123.123');
=> true

isit.any.ipv4('255.255.255.255', '850..1.4');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.ipv4(['198.12.3.142', '1.2.3']);
=> false

```

## isit.ipv6(value:string)

### Checks if the given value matches ipv6 regexp
interfaces: not, all, any

```javascript
isit.ipv6('2001:DB8:0:0:1::1');
=> true

isit.ipv6('985.12.3.4');
=> true

isit.not.ipv6('8:::::::7');
=> true

isit.all.ipv6('2001:DB8:0:0:1::1', '1:50:198:2::1:2:8');
=> true

isit.any.ipv6('255.255.255.255', '2001:DB8:0:0:1::1');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.ipv6(['2001:DB8:0:0:1::1', '1.2.3']);
=> false
```

## isit.isoDateString(value:any)

### Checks if the given value matches valid ISO strings (full ISO compliance).
interfaces: not, all, any

```javascript
isit.isoDateString('2010-01-15');
=> true

isit.isoDateString('1/15/2010');
=> false

isit.not.isoDateString('1/15/2010');
=> true

isit.all.isoDateString('2010-01T12:34', '1/15/2010');
=> false

isit.any.isoDateString('2007-04-05T24:00', '1/15/2010');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.isoDateString(['2010-222', '2010-W21-2']);
=> true
```

# String checks

## isit.include(value:string, value:substring)

## Checks if the given string contains a substring.

interfaces: not

```javascript
isit.include('Some text goes here', 'text');
=> true

isit.include('test', 'text');
=> false

isit.not.include('test', 'text');
=> true
```

## isit.includes(value:string, value:substring)

## alias for isit.include

## isit.upperCase(value:string)

### Checks if the given string is UPPERCASE.
interfaces: not, all, any

```javascript
isit.upperCase('YEAP');
=> true

isit.upperCase('nope');
=> false

isit.not.upperCase('Nope');
=> true

isit.all.upperCase('YEAP', 'nope');
=> false

isit.any.upperCase('YEAP', 'nope');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.upperCase(['YEAP', 'ALL UPPERCASE']);
=> true
```

## isit.lowerCase(value:string)

### Checks if the given string is lowercase.
interfaces: not, all, any

```javascript
isit.lowerCase('yeap');
=> true

isit.lowerCase('NOPE');
=> false

isit.not.lowerCase('Nope');
=> true

isit.all.lowerCase('yeap', 'NOPE');
=> false

isit.any.lowerCase('yeap', 'NOPE');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.lowerCase(['yeap', 'all lowercase']);
=> true
```

## isit.startWith(value:string, value:substring)

### Checks if the given string starts with substring.
interface: not

```javascript
isit.startWith('yeap', 'ye');
=> true

isit.startWith('nope', 'ye');
=> false

isit.not.startWith('nope not that', 'not');
=> true
```

## isit.startsWith(value:string, value:substring)

## alias for isit.startWith

## isit.endWith(value:string, value:substring)

### Checks if the given string ends with substring.
interfaces: not

```javascript
isit.endWith('yeap', 'ap');
=> true

isit.endWith('nope', 'no');
=> false

isit.not.endWith('nope not that', 'not');
=> true

isit.endWith('yeap that one', 'one');
=> true
```

## isit.endsWith(value:string, value:substring)

## alias for isit.endWith

## isit.capitalized(value:string)

### Checks if the given string is capitalized.
interfaces: not, all, any

```javascript
isit.capitalized('Yeap');
=> true

isit.capitalized('nope');
=> false

isit.not.capitalized('nope not capitalized');
=> true

isit.all.capitalized('Yeap', 'All', 'Capitalized');
=> true

isit.any.capitalized('Yeap', 'some', 'Capitalized');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.capitalized(['Nope', 'not']);
=> false
```

## isit.palindrome(value:string, value:substring)

### Checks if the given string is palindrome.
interfaces: not, all, any

```javascript
isit.palindrome('testset');
=> true

isit.palindrome('nope');
=> false

isit.not.palindrome('nope not palindrome');
=> true

isit.all.palindrome('testset', 'tt');
=> true

isit.any.palindrome('Yeap', 'some', 'testset');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.palindrome(['Nope', 'testset']);
=> false
```

## isit.camelCase(value:string)

### Checks if the given string is camelCase.
interfaces: not, all, any

```javascript
isit.camelCase('fooBar');
=> true

isit.camelCase('Foo Bar');
=> false

isit.not.camelCase('nope not camel case');
=> true

isit.all.camelCase('fooBar', 'tastyCakes', 'iThinkYouGetIt');
=> true

isit.any.camelCase('Yeap', 'some', 'fooBar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.camelCase(['Nope', 'fooBar']);
=> false
```

## isit.kebabCase(value:string)

### Checks if the given string is -kebab-case.
interfaces: not, all, any

```javascript
isit.kebabCase('-foo-bar');
=> true

isit.kebabCase('Foo Bar');
=> false

isit.not.kebabCase('nope not kebab case');
=> true

isit.all.kebabCase('-foo-bar', '-tasty-cakes', '-i-think-you-get-it');
=> true

isit.any.kebabCase('Yeap', 'some', '-foo-bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.kebabCase(['Nope', '-foo-bar']);
=> false
```

## isit.snakeCase(value:string)

### Checks if the given string is snake_case.
interfaces: not, all, any

```javascript
isit.snakeCase('foo_bar');
=> true

isit.snakeCase('Foo Bar');
=> false

isit.not.snakeCase('nope not snake case');
=> true

isit.all.snakeCase('foo_bar', 'tasty_cakes', 'i_think_yoU_get_it');
=> true

isit.any.snakeCase('Yeap', 'some', 'foo_bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.snakeCase(['Nope', 'foo_bar']);
=> false
```

## isit.startCase(value:string)

### Checks if the given string is Start Case.
interfaces: not, all, any

```javascript
isit.startCase('Foo Bar');
=> true

isit.startCase('fooBar');
=> false

isit.not.startCase('-nope-not-start-case');
=> true

isit.all.startCase('Foo Bar', 'Tasty Cakes', 'I Think You Get It');
=> true

isit.any.startCase('Yeap', 'some', '-foo-bar');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.startCase(['Nope', '-foo-bar']);
=> false
```

## isit.doubleByte(value:string)

### Checks if the given string contains two-byte (or non-Latin) characters.
interfaces: not, all, any

```javascript
isit.doubleByte('は123');
=> true

isit.doubleByte('foo');
=> false

isit.not.doubleByte('foo');
=> true

isit.all.doubleByte('は123', 'はtest');
=> true

isit.any.doubleByte('は123', 'some', '');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.doubleByte(['Nope', 'は123']);
=> false
```

## isit.html(value:string)

### Checks if the given string contains HTML tags.
interfaces: not, all, any

```javascript
isit.html('<div></div>');
=> true

isit.html('div');
=> false

isit.not.html('foo');
=> true

isit.all.html('<input type="text">', '<br/>');
=> true

isit.any.html('<img src="happyKittens.jpg">', 'foo', '');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.html(['Nope', '<div/>']);
=> false
```

## isit.dataUrl(value:string)

### Checks if the given string is a data URL.
interfaces: not, all, any

```javascript
isit.dataUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC');
=> true

isit.dataUrl('data:empty');
=> false

isit.not.dataUrl('data:empty');
=> true

isit.all.dataUrl('data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E', 'data:,A%20brief%20note');
=> true

isit.any.dataUrl('data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E', 'foo');
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.dataUrl(['Nope', 'data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E']);
=> false
```

# Arithmetic checks

## isit.equal(value:any, value:any)

### Checks if the given values are equal. For objects and arrays, deep equality checks occur.
interfaces: not

```javascript
isit.equal(42, 40 + 2);
=> true

isit.equal('yeap', 'yeap');
=> true

isit.equal(true, true);
=> true

isit.equal({foo:"bar"}, {foo:"bar"});
=> true

isit.equal(["foo", "bar"], ["foo", "bar"]);
=> true

isit.not.equal('yeap', 'nope');
=> true

isit.not.equal(["foo", "bar"], ["bar", "foo"]); // for arrays, order matters for equality
=> true
```

## isit.even(value:number)

### Checks if the given value is even.
interfaces: not, all, any

```javascript
isit.even(42);
=> true

isit.not.even(41);
=> true

isit.all.even(40, 42, 44);
=> true

isit.any.even(39, 42, 43);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.even([40, 42, 43]);
=> false
```

## isit.odd(value:number)

### Checks if the given value is odd.
interfaces: not, all, any

```javascript
isit.odd(41);
=> true

isit.not.odd(42);
=> true

isit.all.odd(39, 41, 43);
=> true

isit.any.odd(39, 42, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.odd([40, 42, 43]);
=> false
```

## isit.positive(value:number)

### Checks if the given value is positive.
interfaces: not, all, any

```javascript
isit.positive(41);
=> true

isit.not.positive(-42);
=> true

isit.all.positive(39, 41, 43);
=> true

isit.any.positive(-39, 42, -44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.positive([40, 42, -43]);
=> false
```

## isit.negative(value:number)

### Checks if the given value is negative.
interfaces: not, all, any

```javascript
isit.negative(-41);
=> true

isit.not.negative(42);
=> true

isit.all.negative(-39, -41, -43);
=> true

isit.any.negative(-39, 42, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.negative([40, 42, -43]);
=> false
```

## isit.above(value:number, min)

### Checks if the given value is above minimum value.
interface: not

```javascript
isit.above(41, 30);
=> true

isit.not.above(42, 50);
=> true
```

## isit.over(value:number, min)

## alias for isit.above

## isit.under(value:number, min)

### Checks if the given value is under maximum value.
interface: not

```javascript
isit.under(30, 35);
=> true

isit.not.under(42, 30);
=> true
```

## isit.below(value:number, min)

## alias for isit.under

## isit.within(value:number, min, max)

### Checks if the given value is within minimum and maximum values.
interface: not

```javascript
isit.within(30, 20, 40);
=> true

isit.not.within(40, 30, 35);
=> true
```

## isit.decimal(value:number)

### Checks if the given value is decimal.
interfaces: not, all, any

```javascript
isit.decimal(41.5);
=> true

isit.not.decimal(42);
=> true

isit.all.decimal(39.5, 41.5, -43.5);
=> true

isit.any.decimal(-39, 42.5, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.decimal([40, 42.5, -43]);
=> false
```

## isit.integer(value:number)

### Checks if the given value is integer.
interfaces: not, all, any

```javascript
isit.integer(41);
=> true

isit.not.integer(42.5);
=> true

isit.all.integer(39, 41, -43);
=> true

isit.any.integer(-39, 42.5, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.integer([40, 42.5, -43]);
=> false
```

## isit.finite(value:number)

### Checks if the given value is finite.
interfaces: not, all, any

```javascript
isit.finite(41);
=> true

isit.not.finite(42 / 0);
=> true

isit.all.finite(39, 41, -43);
=> true

isit.any.finite(-39, Infinity, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.finite([Infinity, -Infinity, 42.5]);
=> false
```

## isit.infinite(value:number)

### Checks if the given value is infinite.
interfaces: not, all, any

```javascript
isit.infinite(Infinity);
=> true

isit.not.infinite(42);
=> true

isit.all.infinite(Infinity, -Infinity, -43 / 0);
=> true

isit.any.infinite(-39, Infinity, 44);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.infinite([Infinity, -Infinity, 42.5]);
=> false
```

# Object checks

## isit.propertyCount(value:object, count)

### Checks if objects' property count is equal to given count.
interface: not

```javascript
isit.propertyCount({this: 'is', 'sample': object}, 2);
=> true

isit.propertyCount({this: 'is', 'sample': object}, 3);
=> false

isit.not.propertyCount({}, 2);
=> true
```

## isit.propertyDefined(value:object, property)

### Checks if the given property is defined on object.
interface: not

```javascript
isit.propertyDefined({yeap: 'yeap'}, 'yeap');
=> true

isit.propertyDefined({yeap: 'yeap'}, 'nope');
=> false

isit.not.propertyDefined({}, 'nope');
=> true
```

## isit.windowObject(value:window)

### Checks if the given object is window object.
interfaces: not, all, any

```javascript
isit.windowObject(window);
=> true

isit.windowObject({nope: 'nope'});
=> false

isit.not.windowObject({});
=> true

isit.all.windowObject(window, {nope: 'nope'});
=> false

isit.any.windowObject(window, {nope: 'nope'});
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.windowObject([window, {nope: 'nope'}]);
=> false
```

## isit.domNode(value:object)

### Checks if the given object is a dom node.
interfaces: not, all, any

```javascript
var obj = document.createElement('div');
isit.domNode(obj);
=> true

isit.domNode({nope: 'nope'});
=> false

isit.not.domNode({});
=> true

isit.all.domNode(obj, obj);
=> true

isit.any.domNode(obj, {nope: 'nope'});
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.domNode([obj, {nope: 'nope'}]);
=> false
```

## isit.jquery(value:object)

### Checks if the given object is a jQuery object or jQuery itself.
interfaces: not, all, any

```javascript
isit.jquery($("#test-div"));
=> true

isit.jquery({});
=> false

isit.not.jquery({});
=> true

isit.all.jquery($, $("#test-div"));
=> true

isit.any.jquery($, {nope: 'nope'});
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.jquery([$, {nope: 'nope'}]);
=> false
```

## isit.domNodeList(value:object)

### Checks if the given object is a dom NodeList.
interfaces: not, all, any

```javascript
var obj = document.querySelectorAll('div');
isit.domNodeList(obj);
=> true

isit.domNodeList({nope: 'nope'});
=> false

isit.not.domNodeList({});
=> true

isit.all.domNodeList(obj, document.querySelectorAll('span'));
=> true

isit.any.domNodeList(obj, {nope: 'nope'});
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.domNodeList([obj, {nope: 'nope'}]);
=> false
```

## isit.plainObject(value:object)

### Checks if the given object is a plain JavaScript object.
interfaces: not, all, any

```javascript
isit.plainObject({});
=> true

isit.plainObject(new SomeConstructor());
=> false

isit.not.plainObject(new SomeConstructor());
=> true

isit.all.plainObject({some:"object"}, document.querySelector('#dom-node'));
=> false

isit.all.plainObject({some:"object"}, document.querySelector('#dom-node'));
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.plainObject([{some:"object"}, document.querySelector('#dom-node')]);
=> false
```

# Array checks

## isit.inArray(value:any, array)

### Checks if the given item is in array?
interface: not

```javascript
isit.inArray(2, [1, 2, 3]);
=> true

isit.inArray(4, [1, 2, 3]);
=> false

isit.not.inArray(4, [1, 2, 3]);
=> true
```

## isit.sorted(value:array)

## Checks if the given array is sorted.

interfaces: not, all, any

```javascript
isit.sorted([1, 2, 3]);
=> true

isit.sorted([1, 2, 4, 3]);
=> false

isit.not.sorted([5, 3, 4]);
=> true

isit.all.sorted([1, 2, 3], [4, 3, 2]); // sort checks either ascending or descending
=> true

isit.any.sorted([1, 2], [5, 4, 7]);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.sorted([[1, 2], [5, 4, 7]]);
=> false
```

# Environment checks

##Environment checks are not available as node module.

## isit.browser()

### Checks if current environment is browser.
interface: not

```javascript
isit.browser()
=> true if in browser
```

## isit.node()

### Checks if current environment is nodejs.
interface: not

```javascript
isit.node()
=> true if in nodejs
```

## isit.ie(value:number)

### Checks if current browser is ie. Parameter is optional version number of browser.
interface: not

```javascript
isit.ie();
=> true if current browser is ie

isit.ie(6);
=> hopefully false

isit.not.ie();
=> false if current browser is ie
```

## isit.chrome()

### Checks if current browser is chrome.
interface: not

```javascript
isit.chrome();
=> true if current browser is chrome

isit.not.chrome();
=> false if current browser is chrome
```

## isit.firefox()

### Checks if current browser is firefox.
interface: not

```javascript
isit.firefox();
=> true if current browser is firefox

isit.not.firefox();
=> false if current browser is firefox
```

## isit.opera()

### Checks if current browser is opera.
interface: not

```javascript
isit.opera();
=> true if current browser is opera

isit.not.opera();
=> false if current browser is opera
```

## isit.safari()

### Checks if current browser is safari.
interface: not

```javascript
isit.safari();
=> true if current browser is safari

isit.not.safari();
=> false if current browser is safari
```

## isit.ios()

### Checks if current device has ios.
interface: not

```javascript
isit.ios();
=> true if current device is iPhone, iPad or iPod

isit.not.ios();
=> true if current device is not iPhone, iPad or iPod
```

## isit.iphone()

### Checks if current device is iPhone.
interface: not

```javascript
isit.iphone();
=> true if current device is iPhone

isit.not.iphone();
=> true if current device is not iPhone
```

## isit.ipad()

### Checks if current device is iPad.
interface: not

```javascript
isit.ipad();
=> true if current device is iPad

isit.not.ipad();
=> true if current device is not iPad
```

## isit.ipod()

### Checks if current device is iPod.
interface: not

```javascript
isit.ipod();
=> true if current device is iPod

isit.not.ipod();
=> true if current device is not iPod
```

## isit.android()

### Checks if current device has Android.
interface: not

```javascript
isit.android();
=> true if current device has Android OS

isit.not.android();
=> true if current device has not Android OS
```

## isit.androidPhone()

### Checks if current device is Android phone.
interface: not

```javascript
isit.androidPhone();
=> true if current device is Android phone

isit.not.androidPhone();
=> true if current device is not Android phone
```

## isit.androidTablet()

### Checks if current device is Android tablet.
interface: not

```javascript
isit.androidTablet();
=> true if current device is Android tablet

isit.not.androidTablet();
=> true if current device is not Android tablet
```

## isit.blackberry()

### Checks if current device is Blackberry.
interface: not

```javascript
isit.blackberry();
=> true if current device is Blackberry

isit.not.blackberry();
=> true if current device is not Blackberry
```

## isit.windowsPhone()

### Checks if current device is Windows phone.
interface: not

```javascript
isit.windowsPhone();
=> true if current device is Windows phone

isit.not.windowsPhone();
=> true if current device is not Windows Phone
```

## isit.windowsTablet()

### Checks if current device is Windows tablet.
interface: not

```javascript
isit.windowsTablet();
=> true if current device is Windows tablet

isit.not.windowsTablet();
=> true if current device is not Windows tablet
```

## isit.windows()

### Checks if current OS is Windows.
interface: not

```javascript
isit.windows();
=> true if current OS is Windows

isit.not.windows();
=> true if current OS is not Windows
```

## isit.mac()

### Checks if current OS is Mac OS X.
interface: not

```javascript
isit.mac();
=> true if current OS is Mac OS X

isit.not.mac();
=> true if current OS is not Mac OS X
```

## isit.linux()

### Checks if current OS is linux.
interface: not

```javascript
isit.linux();
=> true if current OS is linux

isit.not.linux();
=> true if current OS is not linux
```

## isit.desktop()

### Checks if current device is desktop.
interface: not

```javascript
isit.desktop();
=> true if current device is desktop

isit.not.desktop();
=> true if current device is not desktop
```

## isit.mobile()

### Checks if current device is mobile.
interface: not
iPhone, iPod, Android Phone, Windows Phone, Blackberry.

```javascript

isit.mobile();
=> true if current device is mobile

isit.not.mobile();
=> true if current device is not mobile
```

## isit.tablet()

### Checks if current device is tablet.
interface: not
iPad, Android Tablet, Windows Tablet

```javascript

isit.tablet();
=> true if current device is tablet

isit.not.tablet();
=> true if current device is not tablet
```

## isit.online()

### Checks if current device is online.
interface: not

```javascript
isit.online();
=> true if current device is online

isit.not.online();
=> true if current device is not online
```

## isit.offline()

### Checks if current device is offline.
interface: not

```javascript
isit.offline();
=> true if current device is offline

isit.not.offline();
=> true if current device is not offline
```

## isit.touchDevice()

### Checks if current device supports touch.
interface: not

```javascript
isit.touchDevice();
=> true if current device supports touch

isit.not.touchDevice();
=> true if current device does not support touch
```

## isit.blink()

### Checks if browser rendering engine is Blink.
interface: not

```javascript
isit.blink();
=> true if browser render with  Blink

isit.not.blink();
=> true if browser does not render with Blink
```

## isit.gecko()

### Checks if browser rendering engine is Gecko.
interface: not

```javascript
isit.gecko();
=> true if browser render with  Gecko

isit.not.gecko();
=> true if browser does not render with Gecko
```

## isit.presto()

### Checks if browser rendering engine is Presto.
interface: not

```javascript
isit.presto();
=> true if browser render with Presto

isit.not.presto();
=> true if browser does not render with Presto
```

## isit.trident()

### Checks if browser rendering engine is Trident.
interface: not

```javascript
isit.trident();
=> true if browser render with Trident

isit.not.trident();
=> true if browser does not render with Trident
```

## isit.webkit()

### Checks if browser rendering engine is WebKit.
interface: not

```javascript
isit.webkit();
=> true if browser render with WebKit

isit.not.webkit();
=> true if browser does not render with WebKit
```

# Time checks

## isit.today(value:object)

### Checks if the given date object indicate today.
interfaces: not, all, any

```javascript
var today = new Date();
isit.today(today);
=> true

var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
isit.today(yesterday);
=> false

isit.not.today(yesterday);
=> true

isit.all.today(today, today);
=> true

isit.any.today(today, yesterday);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.today([today, yesterday]);
=> false
```

## isit.yesterday(value:object)

### Checks if the given date object indicate yesterday.
interfaces: not, all, any

```javascript
var today = new Date();
isit.yesterday(today);
=> false

var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
isit.yesterday(yesterday);
=> true

isit.not.yesterday(today);
=> true

isit.all.yesterday(yesterday, today);
=> false

isit.any.yesterday(today, yesterday);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.yesterday([today, yesterday]);
=> false
```

## isit.tomorrow(value:object)

### Checks if the given date object indicate tomorrow.
interfaces: not, all, any

```javascript
var today = new Date();
isit.tomorrow(today);
=> false

var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
isit.tomorrow(tomorrow);
=> true

isit.not.tomorrow(today);
=> true

isit.all.tomorrow(tomorrow, today);
=> false

isit.any.tomorrow(today, tomorrow);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.tomorrow([today, tomorrow]);
=> false
```

## isit.past(value:object)

### Checks if the given date object indicate past.
interfaces: not, all, any

```javascript
var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

isit.past(yesterday);
=> true

isit.past(tomorrow);
=> false

isit.not.past(tomorrow);
=> true

isit.all.past(tomorrow, yesterday);
=> false

isit.any.past(yesterday, tomorrow);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.past([yesterday, tomorrow]);
=> false
```

## isit.future(value:object)

### Checks if the given date object indicate future.
interfaces: not, all, any

```javascript
var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

isit.future(yesterday);
=> false

isit.future(tomorrow);
=> true

isit.not.future(yesterday);
=> true

isit.all.future(tomorrow, yesterday);
=> false

isit.any.future(yesterday, tomorrow);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.future([yesterday, tomorrow]);
=> false
```

## isit.day(value:object, dayString)

### Checks if the given date objects' day equal given dayString parameter. If not given, dayString defaults to current day.
interface: not

```javascript
var mondayObj = new Date('01/26/2015');
var tuesdayObj = new Date('01/27/2015');
isit.day(mondayObj, 'monday');
=> true

isit.day(mondayObj, 'tuesday');
=> false

isit.not.day(mondayObj, 'tuesday');
=> true
```

## isit.month(value:object, monthString)

### Checks if the given date objects' month equal given monthString parameter. If not given, monthString defaults to current month.
interface: not

```javascript
var januaryObj = new Date('01/26/2015');
var februaryObj = new Date('02/26/2015');
isit.month(januaryObj, 'january');
=> true

isit.month(februaryObj, 'january');
=> false

isit.not.month(februaryObj, 'january');
=> true
```

## isit.year(value:object, yearNumber)

### Checks if the given date objects' year equal given yearNumber parameter. If not given, yearNumber defaults to current year.
interface: not

```javascript
var year2015 = new Date('01/26/2015');
var year2016 = new Date('01/26/2016');
isit.year(year2015, 2015);
=> true

isit.year(year2016, 2015);
=> false

isit.not.year(year2016, 2015);
=> true
```

## isit.leapYear(value:number)

### Checks if the given year number is a leap year
interfaces: not, all, any

```javascript
isit.leapYear(2016);
=> true

isit.leapYear(2015);
=> false

isit.not.leapYear(2015);
=> true

isit.all.leapYear(2015, 2016);
=> false

isit.any.leapYear(2015, 2016);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.leapYear([2016, 2080]);
=> true
```

## isit.weekend(value:object)

### Checks if the given date objects' day is weekend.
interfaces: not, all, any

```javascript
var monday = new Date('01/26/2015');
var sunday = new Date('01/25/2015');
var saturday = new Date('01/24/2015');
isit.weekend(sunday);
=> true

isit.weekend(monday);
=> false

isit.not.weekend(monday);
=> true

isit.all.weekend(sunday, saturday);
=> true

isit.any.weekend(sunday, saturday, monday);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.weekend([sunday, saturday, monday]);
=> false
```

## isit.weekday(value:object)

### Checks if the given date objects' day is weekday.
interfaces: not, all, any

```javascript
var monday = new Date('01/26/2015');
var sunday = new Date('01/25/2015');
var saturday = new Date('01/24/2015');
isit.weekday(monday);
=> true

isit.weekday(sunday);
=> false

isit.not.weekday(sunday);
=> true

isit.all.weekday(monday, saturday);
=> false

isit.any.weekday(sunday, saturday, monday);
=> true

// 'all' and 'any' interfaces can also take array parameter
isit.all.weekday([sunday, saturday, monday]);
=> false
```

## isit.inDateRange(value:object, startObject, endObject)

### Checks if date is within given range.
interface: not

```javascript
var saturday = new Date('01/24/2015');
var sunday = new Date('01/25/2015');
var monday = new Date('01/26/2015');
isit.inDateRange(sunday, saturday, monday);
=> true

isit.inDateRange(saturday, sunday, monday);
=> false

isit.not.inDateRange(saturday, sunday, monday);
=> true
```

## isit.inLastWeek(value:object)

### Checks if the given date is between now and 7 days ago.
interface: not

```javascript
var twoDaysAgo = new Date(new Date().setDate(new Date().getDate() - 2));
var nineDaysAgo = new Date(new Date().setDate(new Date().getDate() - 9));
isit.inLastWeek(twoDaysAgo);
=> true

isit.inLastWeek(nineDaysAgo);
=> false

isit.not.inLastWeek(nineDaysAgo);
=> true
```

## isit.inLastMonth(value:object)

### Checks if the given date is between now and a month ago.
interface: not

```javascript
var tenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 10));
var fortyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 40));
isit.inLastMonth(tenDaysAgo);
=> true

isit.inLastMonth(fortyDaysAgo);
=> false

isit.not.inLastMonth(fortyDaysAgo);
=> true
```

## isit.inLastYear(value:object)

### Checks if the given date is between now and a year ago.
interface: not

```javascript
var twoMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 2));
var thirteenMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 13));
isit.inLastYear(twoMonthsAgo);
=> true

isit.inLastYear(thirteenMonthsAgo);
=> false

isit.not.inLastYear(thirteenMonthsAgo);
=> true
```

## isit.inNextWeek(value:object)

### Checks if the given date is between now and 7 days later.
interface: not

```javascript
var twoDaysLater = new Date(new Date().setDate(new Date().getDate() + 2));
var nineDaysLater = new Date(new Date().setDate(new Date().getDate() + 9));
isit.inNextWeek(twoDaysLater);
=> true

isit.inNextWeek(nineDaysLater);
=> false

isit.not.inNextWeek(nineDaysLater);
=> true
```

## isit.inNextMonth(value:object)

### Checks if the given date is between now and a month later.
interface: not

```javascript
var tenDaysLater = new Date(new Date().setDate(new Date().getDate() + 10));
var fortyDaysLater = new Date(new Date().setDate(new Date().getDate() + 40));
isit.inNextMonth(tenDaysLater);
=> true

isit.inNextMonth(fortyDaysLater);
=> false

isit.not.inNextMonth(fortyDaysLater);
=> true
```

## isit.inNextYear(value:object)

### Checks if the given date is between now and a year later.
interface: not

```javascript
var twoMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 2));
var thirteenMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 13));
isit.inNextYear(twoMonthsLater);
=> true

isit.inNextYear(thirteenMonthsLater);
=> false

isit.not.inNextYear(thirteenMonthsLater);
=> true
```

## isit.quarterOfYear(value:object, quarterNumber)

### Checks if the given date is in the parameter quarter.
interface: not

```javascript
var firstQuarter = new Date('01/26/2015');
var secondQuarter = new Date('05/26/2015');
isit.quarterOfYear(firstQuarter, 1);
=> true

isit.quarterOfYear(secondQuarter, 1);
=> false

isit.not.quarterOfYear(secondQuarter, 1);
=> true
```

## isit.daylightSavingTime(value:object, quarterNumber)

### Checks if the given date is in daylight saving time.
interface: not

```javascript
// For Turkey Time Zone
var january1 = new Date('01/01/2015');
var june1 = new Date('06/01/2015');

isit.daylightSavingTime(june1);
=> true

isit.daylightSavingTime(january1);
=> false

isit.not.daylightSavingTime(january1);
=> true
```

## isit.daylightSavingsTime(value:object, quarterNumber)

## alias for isit.daylightSavingTime

# Configuration methods

## isit.setRegexp(value:RegExp, regexpString)

Override RegExps if you think they suck.

```javascript
isit.url('https://www.duckduckgo.com');
=> true

isit.setRegexp(/quack/, 'url');
isit.url('quack');
=> true
```
