// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

export default {

  isArray (arg) {
    if (Array.isArray) {
      return Array.isArray(arg)
    }
    return this.objectToString(arg) === '[object Array]'
  },

  isBoolean (arg) {
    return typeof arg === 'boolean'
  },

  isNull (arg) {
    return arg === null
  },

  isNullOrUndefined (arg) {
    return arg == null
  },

  isNumber (arg) {
    return typeof arg === 'number'
  },

  isString (arg) {
    return typeof arg === 'string'
  },

  isSymbol (arg) {
    return typeof arg === 'symbol'
  },

  isUndefined (arg) {
    return arg === undefined
  },

  isRegExp (re) {
    return this.objectToString(re) === '[object RegExp]'
  },

  isObject (arg) {
    return typeof arg === 'object' && arg !== null
  },

  isDate (d) {
    return this.objectToString(d) === '[object Date]'
  },

  isError (e) {
    return (this.objectToString(e) === '[object Error]' || e instanceof Error)
  },

  isFunction (arg) {
    return typeof arg === 'function'
  },

  isPrimitive (arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' || // ES6 symbol
           typeof arg === 'undefined'
  },

  objectToString (o) {
    return Object.prototype.toString.call(o)
  },

  isPromise (promise) {
    return this.isObject(promise) && this.isFunction(promise.then) && this.isFunction(promise.catch)
  }
}
