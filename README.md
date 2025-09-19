<div align="center">

# 🚀 Todo MERN App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

A full-stack Todo application built with the **MERN stack** (MongoDB, Express.js, React, Node.js) featuring user authentication, CRUD operations, and responsive design.

</div>

## ✨ Features

- **🔐 User Authentication**: Secure login and registration system with JWT tokens
- **📝 Todo Management**: Create, read, update, and delete todo items
- **📱 Responsive Design**: Mobile-friendly interface using Bootstrap
- **⚡ Real-time Updates**: Hot reload for development with `concurrently`
- **💾 Persistent Storage**: Todos saved in MongoDB database
- **🎨 Modern UI**: Clean, professional design with toast notifications

## 🛠 Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router** - Client-side routing
- **Bootstrap** - Responsive CSS framework
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful toast notifications

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast web framework for Node.js
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing utility
- **Cors** - Cross-Origin Resource Sharing middleware
- **Nodemon** - Development dependency for auto-restarting server

### Database
- **MongoDB** - NoSQL database for storing todos and user data

### Tools & Utilities
- **Concurrently** - Run multiple commands simultaneously
- **Dotenv** - Environment variable management
- **ESLint** - Code linting and formatting

## 📁 Project Structure
todo-mern-app/
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   └── Navbar.js
│   │   ├── pages/                   # Page components
│   │   │   ├── Auth/                # Login/Register pages
│   │   │   ├── Home/                # Home page
│   │   │   └── Todos/               # Todo functionality
│   │   ├── Services/                # API service files
│   │   └── App.js                   # Main App component
│   ├── package.json                 # Client dependencies
│   └── ...
├── server/                          # Node.js Backend
│   ├── config/                      # Configuration files
│   │   └── db.js                    # Database connection
│   ├── controllers/                  # Request handlers
│   │   └── userController.js
│   ├── models/                      # Database schemas
│   │   └── userModel.js
│   ├── routes/                      # API routes
│   │   └── userRoute.js
│   ├── server.js                    # Main server file
│   ├── package.json                 # Server dependencies
│   └── ...
├── .env                             # Environment variables
├── .gitignore                       # Git ignore rules
├── README.md                        # This file
└── package.json                     # Root project configuration


## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-mern-app.git
   cd todo-mern-app

   ![Login Page](https://github.com/user-attachments/assets/6d36c9f3-1b4d-4a81-ad3e-a440dc04b135)
![Landing Page](https://github.com/user-attachments/assets/6defb2b2-5fe4-4eae-9843-63467958d703)
![Incomplete Tasks](https://github.com/user-attachments/assets/d598de02-c146-48ab-bb57-f1091811067b)
![Home Page](https://github.com/user-attachments/assets/171ee6c5-51d7-4e18-81b4-7aa2e99ae690)
![Completed Tasks](https://github.com/user-attachments/assets/2545eea8-a3c9-49a2-8b1f-eec030eb9696)
![Updating Task Status](https://github.com/user-attachments/assets/d134cbd9-2c09-4bc2-897c-68e563b46d24)
![Todo List](https://github.com/user-attachments/assets/7a8f3a54-ac06-4d3d-8abb-005150c5f9a5)
![Task Creation](https://github.com/user-attachments/assets/15282f24-d5a3-4d33-9f77-70a0247fa3e8)
![Screenshot 2025-09-19 124451](https://github.com/user-attachments/assets/84e97a20-2664-4e3a-96e0-be76f030cd2c)
![Screenshot 2025-09-19 124225](https://github.com/user-attachments/assets/101ee378-2769-45aa-ae04-c661a2707a85)
![Registration Page](https://github.com/user-attachments/assets/f5fe71ac-a32c-4bde-ba01-210ba1c478b9)
![Logout](https://github.com/user-attachments/assets/44fdcc73-d7d9-4856-b23d-1b2daf94fb03)


Method,Endpoint,Description,Authentication
POST,/api/v1/user/register,Register new user,No
POST,/api/v1/user/login,User login,No
GET,/api/v1/todo,Get all todos,Yes
POST,/api/v1/todo,Create new todo,Yes
PUT,/api/v1/todo/:id,Update todo,Yes
DELETE,/api/v1/todo/:id,Delete todo,Yes

🙏 Acknowledgments

React Documentation
Bootstrap
MongoDB
YouTube Tutorial - Learning resource
Open source community for inspiration and support

📞 Contact
Your Name - kdoulat58@gmail.com  
Project Link: https://github.com/kDoulat/todo-mern


⭐ If you found this project helpful, please give it a star! ⭐













