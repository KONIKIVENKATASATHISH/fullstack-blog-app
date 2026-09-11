# Full Stack Blog Application

A responsive Full Stack Blog Application developed as part of the **Codomax Digital Solutions Full Stack Development Internship**.

The application allows users to register, securely log in, create and manage their own blogs, and view their blog dashboard.

## Features

- 🏠 Responsive Home Page
- 📝 User Registration
- 🔐 JWT Authentication
- 🔑 User Login and Logout
- 👤 User Profile
- 📊 Protected User Dashboard
- ✍️ Create Blog
- 📖 View Blog
- ✏️ Edit Blog
- 🗑️ Delete Blog
- 👥 User-specific Blogs
- 📱 Mobile Responsive Design
- 💜 Professional Purple UI Theme

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication

### Database
- MongoDB
- Mongoose

## Project Structure

```text
fullstack-blog-app/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-blog.html
│   ├── blog.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Blog.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── blogRoutes.js
│   │
│   └── middleware/
│       └── authMiddleware.js
│
└── README.md