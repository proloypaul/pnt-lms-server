'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.authService = void 0
const config_1 = __importDefault(require('../../../config'))
const jwtHelper_1 = require('../../helpers/jwtHelper')
const prisma_1 = __importDefault(require('../../shared/prisma'))
const loginUserToDB = payload =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, number } = payload
    let isUserExist
    const student = yield prisma_1.default.student.findFirst({
      where: {
        OR: [{ email: email }, { number: number }],
      },
    })
    const instructor = yield prisma_1.default.instructor.findFirst({
      where: {
        OR: [{ email: email }, { phone: number }],
      },
    })
    if (!student && !instructor) {
      throw new Error('User does not exist')
    }
    if (student || instructor) {
      isUserExist = student || instructor
    }
    if (
      isUserExist &&
      (isUserExist === null || isUserExist === void 0
        ? void 0
        : isUserExist.password) !== password
    ) {
      throw new Error('Password is Incorrect!')
    }
    const payloadData = {
      name:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.name,
      email:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.email,
      number:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.number,
      password:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.password,
      role:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.role,
      image:
        (isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.image) == null &&
        (isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.instructorImg) == null
          ? null
          : (isUserExist === null || isUserExist === void 0
              ? void 0
              : isUserExist.image) ||
            (isUserExist === null || isUserExist === void 0
              ? void 0
              : isUserExist.instructorImg),
    }
    // console.log('login payloadData', payloadData)
    // create access token
    const accessToken = jwtHelper_1.jwtHelpers.createToken(
      payloadData,
      config_1.default.jwt.secrect,
      config_1.default.jwt.expire_in,
    )
    return {
      accessToken,
    }
  })
const refreshToken = token =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
      throw new Error('Token is required')
    }
    const decodedToken = jwtHelper_1.jwtHelpers.decodeToken(token)
    const { name, email, number, role } = decodedToken
    if (!name || !role) {
      throw new Error('Invalid Token')
    }
    let isUserExist
    const student = yield prisma_1.default.student.findFirst({
      where: {
        OR: [{ email: email }, { number: number }],
      },
    })
    const instructor = yield prisma_1.default.instructor.findFirst({
      where: {
        OR: [{ email: email }, { phone: number }],
      },
    })
    if (!student && !instructor) {
      throw new Error('User does not exist')
    }
    if (student || instructor) {
      isUserExist = student || instructor
    }
    const payloadData = {
      name:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.name,
      email:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.email,
      number:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.number,
      password:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.password,
      role:
        isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.role,
      image:
        (isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.image) == null &&
        (isUserExist === null || isUserExist === void 0
          ? void 0
          : isUserExist.instructorImg) == null
          ? null
          : (isUserExist === null || isUserExist === void 0
              ? void 0
              : isUserExist.image) ||
            (isUserExist === null || isUserExist === void 0
              ? void 0
              : isUserExist.instructorImg),
    }
    // console.log("payloadDat", payloadData, "decoded data", name, email, number, role)
    const newAccessToken = jwtHelper_1.jwtHelpers.createToken(
      payloadData,
      config_1.default.jwt.secrect,
      config_1.default.jwt.expire_in,
    )
    return {
      accessToken: newAccessToken,
    }
  })
exports.authService = {
  loginUserToDB,
  refreshToken,
}
