// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency === 0) return {}
  if (currency >= 10000)
    return {
      error:
        "You are rich, my friend! We don't have so much coins for exchange",
    }
  let cur = currency
  const H = calc(cur, 50)
  cur -= H * 50
  const Q = calc(cur, 25)
  cur -= Q * 25
  const D = calc(cur, 10)
  cur -= D * 10
  const N = calc(cur, 5)
  const P = cur - N * 5
  let param = H > 0 ? Object.assign({}, { H }) : {}
  param = checkAndWrap(param, Q, `Q`)
  param = checkAndWrap(param, D, `D`)
  param = checkAndWrap(param, N, `N`)
  param = checkAndWrap(param, P, `P`)
  return param
}
function calc(cur, number) {
  return Math.floor(cur / number) > 0 ? Math.floor(cur / number) : 0
}
function checkAndWrap(param, val, key) {
  return val > 0
    ? Object.assign({}, { [key]: val }, param)
    : Object.assign({}, param)
}
