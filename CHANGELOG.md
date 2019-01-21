# isit.js CHANGELOG

## 2.3.3

- Update dependencies to fix security vulnerability

## 2.3.2

- Update dependencies to resolve spotted security risk

## 2.3.0

- Re-include isitTypedArray
- Move certain tests from regexp to string (more logical grouping)
- Update README to show aliases

## 2.1.2

- Restore ability to use array argument for any / all functions

## 2.1.1

- Remove views folder from NPM publish

## 2.1.0

- Return isitSorted to checking for both ascending and descending orders (feature)
- Use Number.POSITIVE_INFINITY / NEGATIVE_INFINITY instead of Infinity / -Infinity in isitFinite to prevent overwritability in ES3 environments (bugfix)
- Escape isitUndefined key declaration in type.js (bugfix)
- Include fallback in isitLinux to check for Unix-like enviroment (bugfix)
- Fix endWith / endsWith to use lastIndexOf (bugfix)
- Update NPM packages (maintenance)

## 2.0.0

- Refactor to have lesser footprint (~40% smaller) and have a simplified codebase
- Write unit tests in tape for better code coverage

## 1.2.8

- Add instructions on how to create custom build in README
- Add screw_ie8 option to UglifyJS (reduces minified file size by 0.6kb)

## 1.2.7

- Add .plainObject() function (interfaces: all, any, not) (issue 142 from is.js)

## 1.2.6

- Forgot to include standalone functions for all / any / not versions of .symbol()
- Register with bower

## 1.2.5

- Modify URL regex to conform with Uniform Resource Identifier (URI) specification (attempt to fix issue 154 from is.js)
- Add CHANGELOG

## 1.2.4

- Add .dataUrl() function (interfaces: all, any, not)

## 1.2.3

- Return false on all and any function calls that have no parameters

## 1.2.2

- Add loose=all parameter to .babelrc, reducing code size by 10%

## 1.2.1

- Remove unnecessary separate webpack compilation for all, any, and not versions

## 1.2.0

- Added unique instances for all, any, and not versions of functions

##Previous versions

- Add .symbol() to Type Checks (interfaces: all, any, not) (issue 150 from is.js)
- Add .typedArray() to Type Checks (interfaces: all, any, not)
- Add .isoDateString() String Checks (interfaces: all, any, not)
- Add .camelCase() String Checks (interfaces: all, any, not)
- Add .kebabCase() String Checks (interfaces: all, any, not)
- Add .snakeCase() String Checks (interfaces: all, any, not)
- Add .startCase() String Checks (interfaces: all, any, not)
- Add .doubleByte() String Checks (interfaces: all, any, not)
- Add .html() String Checks (interfaces: all, any, not)
- Add .jquery() Object Checks (interfaces: all, any, not)
- Add .domNodeList() Object Checks (interfaces: all, any, not)
- Add .browser() to Environment Checks (interfaces: not) (issue 120 from is.js)
- Add .node() to Environment Checks (interfaces: not) (issue 120 from is.js)
- Add .retina() to Environment Checks (interfaces: not) (issue 153 from is.js)
- Add .blink() to Environment Checks (interfaces: not)
- Add .gecko() to Environment Checks (interfaces: not)
- Add .presto() to Environment Checks (interfaces: not)
- Add .trident() to Environment Checks (interfaces: not)
- Add .webkit() to Environment Checks (interfaces: not)
- Modify .equal() to support deep checks of objects and arrays
- Modify .equal() to test equality for decimals with Number.EPSILON
- Modify .sorted() to test if sorted either ascending or descending (issue 97 from is.js, solution from PR 98)
- Modify .opera() to test using MDN-suggested values (issue 145 from is.js)
- Modify .linux() to include test for X11 (issue 131 from is.js)
- Modify .ie() to include test for IE11 (issue 115 from is.js, solution from PR 80)
- Deprecate .space() in favor of .whitespace() (interfaces: all, any, not) (issue 77 from is.js, solution from PR 84)
- Rename .dayLightSavingTime() to .daylightSavingTime()
- Re-architect library to have separate files for each function, leveraging ES2015 syntax
- Leverage babel for transpiling ES2015 to ES5
- Leverage webpack for code compilation
