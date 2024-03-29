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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.blogController = void 0
const http_status_codes_1 = require('http-status-codes')
const catchAsync_1 = __importDefault(require('../../shared/catchAsync'))
const blog_service_1 = require('./blog.service')
const createBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const blogData = __rest(req.body, [])
    const blog = yield blog_service_1.blogService.createBlogToDB(blogData)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'blog created Successfully',
      data: blog,
    })
  }),
)
const getAllBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_service_1.blogService.getAllBlogToDB()
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get all blog Successfully',
      data: blogs,
    })
  }),
)
// update blog data
const updateBlogData = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const blogData = __rest(req.body, [])
    const blog = yield blog_service_1.blogService.updateBlogDataToDB(
      id,
      blogData,
    )
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'updated blog data successfully',
      data: blog,
    })
  }),
)
const getSingleBlog = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params
    const blog = yield blog_service_1.blogService.getSingleBlogToDB(id)
    res.status(http_status_codes_1.StatusCodes.OK).json({
      status: true,
      message: 'get single blog Successfully',
      data: blog,
    })
  }),
)
exports.blogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlogData,
}
