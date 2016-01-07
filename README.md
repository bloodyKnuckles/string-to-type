# string-to-type

Given a string variable, this module detects the if the string is a stringified boolean or numeric
value, then converts the variable and returns it.

# example

```
var var typeDetectConvert = require('string-to-type')

console.log(typeof typeDetectConvert("true"))
// boolean

console.log(typeof typeDetectConvert("1234"))
// number
```

# license

MIT

