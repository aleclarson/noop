
function noop() {}

noop.true = function noopTrue() { return true }
noop.false = function noopFalse() { return false }
noop.this = function noopThis() { return this }
noop.arg1 = function noopArg1(arg1) { return arg1 }
noop.arg2 = function noopArg2(arg1, arg2) { return arg2 }
noop.val = function noopVal(val) {
  return function() { return val }
}

module.exports = noop

