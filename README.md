# IT Training Tube - Learning Management System (LMS) Server

Welcome to the backend server for **IT Training Tube**, a robust Learning Management System built to facilitate online education, course management, video streaming, and student evaluation. 

This project provides RESTful APIs to serve an e-learning platform with comprehensive features including courses, chapters, video delivery, quizzes, blog management, and role-based access.

---

## 🚀 Key Features

### 1. Course & Content Management
- **Hierarchical Structure:** Courses are divided into Chapters, which contain Videos and Quizzes.
- **Categorization:** Courses are organized by categories, subcategories, skill levels, and defined learning outcomes.
- **Instructors Integration:** Instructors can be assigned to courses, providing students with instructor profiles, biographies, and skills.

### 2. Video Streaming & Transcoding
- **HLS Streaming Support:** Serves `.m3u8` playlists and video chunks securely for optimal playback experiences.
- **Local Media Hosting:** Managed routing for `/uploads` and `/videos/transcoded` to deliver static and media content directly.

### 3. Quiz & Assessment Engine
- **Interactive Quizzes:** Chapters can include multiple-choice quizzes to test student knowledge.
- **Answer Tracking:** System tracks user quiz submissions, calculating completion and tracking retry limits (`isTaken`).

### 4. User Roles & Authentication
- **Students & Instructors:** Separate models for students and instructors with respective roles.
- **Enrollment Flow:** Handles student enrollments via a pending enrollment queue system (`PanddingEnrolledModel`) for verification before finalizing course access.

### 5. Blogging System
- Instructors have the ability to write, publish, and manage blog articles associated with relevant course topics.

### 6. Review & Rating System
- Students can leave ratings and reviews (compliments) on courses they have interacted with.

---

## 🛠 Technology Stack

- **Runtime Environment:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) (REST APIs, Static Routing, Middleware)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL (configured via `DATABASE_URL`)
- **Code Quality:** ESLint, Prettier, Husky (Git Hooks), lint-staged
- **Development Tooling:** `ts-node-dev` for fast, respawning development server.

---

## 📂 Folder Structure

```text
pnt-lms-server/
├── prisma/
│   └── schema.prisma         # Prisma database schema definition
├── src/
│   ├── app.ts                # Express application configuration and middleware setup
│   ├── server.ts             # Application entry point & server listener
│   ├── config/               # Environment variables and configuration logic
│   ├── enums/                # TypeScript enums & constants
│   └── app/
│       ├── constaint/        # Project-wide constant values
│       ├── errors/           # Custom error classes (e.g., ApiError)
│       ├── helpers/          # Utility functions and shared helpers
│       ├── interface/        # Global TypeScript interfaces
│       ├── middleware/       # Express middlewares (Auth, Error Handling, etc.)
│       ├── modules/          # Domain-specific modules (Controller, Service, Interface)
│       ├── routes/           # Centralized API Route declarations
│       └── shared/           # Shared modules/logic
├── uploads/                  # Directory for uploaded images and static assets
├── videos/                   # Directory for raw and transcoded (HLS) videos
├── .env                      # Environment configuration variables
├── .eslintrc.json            # ESLint configuration
├── .prettierrc.json          # Prettier configuration
├── package.json              # Project scripts and dependencies
└── tsconfig.json             # TypeScript compiler configuration
```

---

## 🔌 API Overview

All API endpoints are prefixed with `/api/v1`.

### Modules
- **Auth (`/auth`)**: Authentication for students, login, and registration.
- **Courses (`/courses`)**: CRUD operations for courses, searching, filtering by categories.
- **Chapters (`/chapters`)**: Managing course chapters and tracking completion.
- **Videos (`/videos`)**: Video content delivery, status tracking, and HLS streaming.
- **Quizzes (`/quize` & `/question`)**: Fetching quizzes, adding questions, and configuring options.
- **Quiz Answers (`/userQuizeAns`)**: Submitting and validating student answers for quizzes.
- **Instructors (`/instructors`)**: Managing instructor profiles and linking them to courses.
- **Students (`/students`)**: Student profile management and data retrieval.
- **Reviews (`/reviews`)**: Creating and fetching course reviews.
- **Pending Enrollments (`/penddingEnrolledCourse`)**: Initiating and verifying student enrollments and payments.
- **Blog (`/blog`)**: CRUD operations for instructor-authored blog posts.

### Static & Media Routes
- `GET /uploads/*`: Serves image assets and file uploads.
- `GET /videos/transcoded/*`: Serves processed HLS (`.m3u8`) streaming content.

---

## 🛠 Setup & Installation

**1. Clone and Install Dependencies**
```bash
npm install
```

**2. Environment Configuration**
Create a `.env` file in the root directory and ensure `DATABASE_URL` is set to your PostgreSQL instance.

**3. Database Setup**
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push
```

**4. Start the Application**
```bash
# Development Mode
npm run dev

# Production Build
npm run build
npm start
```

---
*Generated for IT Training Tube - LMS Server.*
