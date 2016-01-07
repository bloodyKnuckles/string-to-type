var typeDetectConvert = require('../')
var test = require('tape')

test('detect string value type and convert', function (tt) {
    tt.plan(4)

    var str = 'true'
    var result = true
    tt.equal(typeDetectConvert(str), result)

    var str = 'false'
    var result = false
    tt.equal(typeDetectConvert(str), result)

    var str = '4'
    var result = 4 
    tt.equal(typeDetectConvert(str), result)

    var str = '1234'
    var result = 1234 
    tt.equal(typeDetectConvert(str), result)

})

