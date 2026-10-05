'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.jwtHelpers = void 0
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'))
const createToken = (payload, secrect, expireTime) => {
  return jsonwebtoken_1.default.sign(payload, secrect, {
    expiresIn: expireTime,
  })
}
const decodeToken = token => {
  return jsonwebtoken_1.default.decode(token)
}
exports.jwtHelpers = { createToken, decodeToken }
