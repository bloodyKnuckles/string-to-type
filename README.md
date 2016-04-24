# string-to-type

Given a string variable, this module detects the if the string is a stringified boolean or numeric
value, then converts the variable and returns it.

# example

```
var typeDetectConvert = require('string-to-type')

console.log(typeDetectConvert("1234"))
// 1234

console.log(typeof typeDetectConvert("1234"))
// number

console.log(typeof typeDetectConvert("true"))
// boolean
```

# license

MIT

