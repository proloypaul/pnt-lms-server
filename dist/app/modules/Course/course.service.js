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
exports.CourseServices = void 0
const prisma_1 = __importDefault(require('../../shared/prisma'))
const paginationHelper_1 = require('../../helpers/paginationHelper')
const createCourseToDB = courseData =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.course.create({
      data: courseData,
    })
    return result
  })
const getAllCourseToDB = (paginationOptions, allFiltersOptions) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } =
      paginationHelper_1.paginationHelper.calculatePagination(paginationOptions)
    const { searchTerm } = allFiltersOptions,
      filtersData = __rest(allFiltersOptions, ['searchTerm'])
    const courseSearchAbleFileds = [
      'categories',
      'subCategories',
      'courseLevel',
    ]
    let whereConditions = {}
    if (searchTerm) {
      whereConditions = {
        OR: courseSearchAbleFileds.reduce((acc, field) => {
          acc.push({
            [field]: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          })
          return acc
        }, []),
      }
    }
    if (Object.keys(filtersData).length) {
      whereConditions = {
        AND: Object.entries(filtersData).map(([field, value]) => ({
          [field]: value,
        })),
      }
    }
    const orderBy = {}
    if (sortBy && sortOrder) {
      orderBy[sortBy] = sortOrder
    }
    const result = yield prisma_1.default.course.findMany({
      where: whereConditions,
      orderBy: orderBy,
      skip: skip,
      take: limit,
      include: {
        chapters: {
          include: {
            videos: true,
            quizes: true,
          },
        },
        instructor: true,
        reviews: true,
        panddingEnrolledModel: true,
      },
    })
    const total = yield prisma_1.default.course.count({
      where: whereConditions,
    })
    return {
      meta: {
        page: page,
        limit: limit,
        total: total,
      },
      data: result,
    }
  })
const getSingleCourseToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.course.findUnique({
      where: {
        id: id,
      },
      include: {
        chapters: {
          include: {
            videos: true,
          },
        },
        instructor: true,
        reviews: true,
        panddingEnrolledModel: true,
      },
    })
    return result
  })
// update course data
const updateCourseDataToDB = (id, courseData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.course.update({
      where: {
        id: id,
      },
      data: courseData,
    })
    return result
  })
const deleteSingleCourseToDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    // first find the course data to collect chapter id
    // const CourseData = await prisma.course.findUnique({
    //   where: {
    //     id: id
    //   },
    //   include:{
    //     chapters: {
    //       include: {
    //         videos: true
    //       }
    //     }
    //   }
    // })
    // console.log("deleted course data", CourseData?.chapters[0]?.videos[0]?.id);
    // const deleteCourseChapter = await prisma.chapter.deleteMany({
    //   where: {
    //     courseId: id,
    //   },
    // })
    // console.log("delete course chapter result", deleteCourseChapter)
    const result = yield prisma_1.default.course.delete({
      where: {
        id: id,
      },
    })
    return result
  })
exports.CourseServices = {
  createCourseToDB,
  getAllCourseToDB,
  getSingleCourseToDB,
  updateCourseDataToDB,
  deleteSingleCourseToDB,
}
