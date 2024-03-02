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
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require('express'))
const cors_1 = __importDefault(require('cors'))
const http_status_1 = __importDefault(require('http-status'))
const cookie_parser_1 = __importDefault(require('cookie-parser'))
const routes_1 = __importDefault(require('./app/routes'))
const app = (0, express_1.default)()
const corsOptions = {
  origin: true,
  credential: true,
}
app.use('*', (0, cors_1.default)(corsOptions))
app.use((0, cookie_parser_1.default)())
//parse
app.use(express_1.default.json())
app.use(express_1.default.urlencoded({ extended: true }))
// router
app.use('/api/v1', routes_1.default)
app.use('/uploads', express_1.default.static('uploads'))
app.use('/videos', express_1.default.static('videos'))
app.get('/', (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_1.default.OK).json({
      success: true,
      message: 'Welcome To ittrainingtube server',
    })
  }),
)
// catch api path error
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  })
  next()
})
exports.default = app
