// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency === 0) return {}
  if (currency >= 10000)
    return {
      error:
        "You are rich, my friend! We don't have so much coins for exchange",
    }
  let cur = currency
  const H = Math.floor(cur / 50) > 0 ? Math.floor(cur / 50) : 0
  cur -= H * 50
  const Q = Math.floor(cur / 25) > 0 ? Math.floor(cur / 25) : 0
  console.log(Q)
  cur -= Q * 25
  const D = Math.floor(cur / 10) > 0 ? Math.floor(cur / 10) : 0
  cur -= D * 10
  const N = Math.floor(cur / 5) > 0 ? Math.floor(cur / 5) : 0
  const P = cur - N * 5
  let param = H > 0 ? Object.assign({}, { H }) : {}
  param = Q > 0 ? Object.assign({}, { Q }, param) : Object.assign({}, param)
  param = D > 0 ? Object.assign({}, { D }, param) : Object.assign({}, param)
  param = N > 0 ? Object.assign({}, { N }, param) : Object.assign({}, param)
  param = P > 0 ? Object.assign({}, { P }, param) : Object.assign({}, param)
  return param
}
