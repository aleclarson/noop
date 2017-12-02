
# noop v0.0.1 

```js
const noop = require('noop')

noop() // => undefined
noop.true() // => true
noop.false() // => false

let obj
obj = {fn: noop.this}
obj.fn() // => obj

noop.arg1('hi') // => 'hi'
noop.arg2(0, 1) // => 1

obj = {fn: noop.val(1)}
obj.fn() // => 1 
```

