module.exports = function (str) {
  switch ( true ) {
    case 'true'  === str: return true
    case 'false' === str: return false
    case /^\d+$/.test(str): return parseInt(str, 10)
    default: return str
  }
}
