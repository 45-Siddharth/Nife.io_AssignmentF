# JWT Authentication - Frontend

Modern, responsive frontend application for JWT-based authentication system built with React and Vite. Features user registration, login, protected dashboard, and secure token management.

## 🌐 Live Deployment

- **Frontend Application:** https://se-cur3.netlify.app/
- **Backend API:**  https://nife-io-assignment.onrender.com
- **Backend Repository:** https://github.com/45-Siddharth/Nife.io_Assignment

## 🚀 Features

- ✨ Clean and modern UI
- 🔐 User registration with real-time validation
- 🔑 Login with JWT token authentication
- 🛡️ Protected dashboard route
- 💾 Token storage in Cookies Storage
- 🚪 Logout functionality
- 📱 Fully responsive design
- ⚡ Fast development with Vite

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## ⚙️ Local Installation & Setup

### 1. Clone the repository
```bash
git clone < https://github.com/45-Siddharth/Nife.io_AssignmentF>
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Application will run on `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

## 📁 Project Structure
```
frontend/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── react.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Register.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Pages Overview

### 1. Login Page (`/login`)
- Default landing page
- Username and password input
- Form validation
- Error message display
- Link to registration page
- Redirects to dashboard on success

### 2. Register Page (`/register`)
- Username, email, and password fields
- Real-time input validation:
  - Username: 3-30 characters, alphanumeric
  - Email: Valid email format
  - Password: Min 8 chars, includes uppercase, lowercase, number
- Duplicate checking (handled by backend)
- Link back to login page
- Success message and redirect to login

### 3. Dashboard Page (`/`) - Protected
- Only accessible with valid JWT token
- Displays user information:
  - Username
  - Email
  - Account status
- Logout button in header


## 🎨 UI Components

### Navbar
- Logo/brand name (top left)
- Logout button

### Dashboard Cards
Three gradient cards displaying:
1. **Username Card** (Blue gradient)
2. **Email Card** (Purple gradient)
3. **Account Status Card** (Green gradient)

## 🌐 Deployment (Netlify)

**Live URL:** https://se-cur3.netlify.app/

### Build Settings
```
Build command: npm run build
Publish directory: dist
Node version: 18.x
```

### Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Test Flow
1. Visit `http://localhost:5173`
2. Click "Create Account" → Register new user
3. Login with credentials
4. View dashboard with user info
5. Click logout → Redirected to login


## 🔗 Related Repositories

- **Backend API Repository:** https://github.com/45-Siddharth/Nife.io_Assignment
- **Backend API Documentation:** [View Backend README](https://github.com/45-Siddharth/Nife.io_Assignment/blob/main/README.md)

## 👤 Author

[Siddardha Kinthada]
- GitHub: [@45-Siddharth](https://github.com/45-Siddharth)
- Email: kinthadasiddardha7@gmail.com

## 📄 Assignment Details

**Project:** JWT Token Implementation and Verification (Frontend + Express Backend)  
**Company:** [Nife.io]  
**Submission Date:** November 7, 2025  
**Role:** Full Stack Developer

This frontend demonstrates:
- ✅ JWT token storage and management
- ✅ Protected route implementation
- ✅ User authentication flow (register/login/logout)
- ✅ Integration with Express.js backend API
- ✅ Modern React development with Vite
- ✅ Responsive UI
- ✅ Production deployment on Netlify

## 📝 License

This project is created for educational purposes as part of a technical assessment.