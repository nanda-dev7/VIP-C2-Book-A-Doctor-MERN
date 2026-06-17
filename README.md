# 🩺 Book A Doctor — Full Stack Healthcare Appointment Platform

A scalable healthcare appointment management platform built using the MERN Stack. The application streamlines interactions between patients, doctors, and administrators through a secure role-based workflow, enabling efficient appointment scheduling, doctor verification, and real-time notification management.

## 🔗 Live Application

**Frontend:**
https://book-a-doctor5.vercel.app/

**Backend API:**
https://book-a-doctor-mern-1.onrender.com

---

## 📌 Overview

Book A Doctor is a full-stack healthcare solution designed to simplify the appointment booking process while maintaining secure access control for different user roles. The platform allows patients to discover doctors, schedule appointments, receive status updates, and manage healthcare interactions through a centralized dashboard.

The system incorporates authentication, authorization, notification management, appointment workflows, and administrative approval mechanisms commonly found in modern healthcare applications.

---

## ✨ Core Features

### 🔐 Authentication & Authorization

* JWT-based Authentication
* Secure Password Hashing with bcryptjs
* Protected API Routes
* Role-Based Access Control (RBAC)
* Persistent User Sessions
* Authorization Middleware

### 👤 Patient Portal

* User Registration & Login
* Browse Verified Doctors
* Book Appointments
* Appointment History Management
* Appointment Status Tracking
* Notification Center

### 🩺 Doctor Portal

* Doctor Registration Requests
* Dedicated Doctor Dashboard
* Appointment Request Management
* Approve or Reject Appointments
* Notification Management
* Patient Appointment Overview

### 🛠️ Administrative Panel

* Doctor Application Review
* Doctor Verification Workflow
* User Role Management
* Doctor Approval System
* Platform Monitoring

### 🔔 Notification System

* Doctor Approval Notifications
* Appointment Booking Alerts
* Appointment Status Updates
* Read/Unread Notification Tracking

---

## 🏗️ System Architecture

### Frontend

* React.js
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* Ant Design

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose ODM
* JWT Authentication
* bcryptjs

### Cloud Infrastructure

* Frontend Deployment: Vercel
* Backend Deployment: Render
* Database Hosting: MongoDB Atlas

---

## 📂 Project Structure

```text
Book-A-Doctor-MERN
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   │
│   └── package.json
│
└── README.md
```

---

## 👥 User Roles & Permissions

| Role    | Permissions                                                                  |
| ------- | ---------------------------------------------------------------------------- |
| Patient | Register, Login, Browse Doctors, Book Appointments, View Appointment History |
| Doctor  | Manage Appointments, Accept/Reject Requests, Receive Notifications           |
| Admin   | Verify Doctors, Manage Platform Access, Approve Applications                 |

---

## ⚙️ Local Development Setup

### Clone Repository

```bash
git clone https://github.com/nanda-dev7/VIP-C2-Book-A-Doctor-MERN.git

cd VIP-C2-Book-A-Doctor-MERN
```

### Backend Configuration

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start Backend Server

```bash
npm start
```

### Frontend Configuration

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api/v1
```

Start Frontend

```bash
npm run dev
```

---

## 📡 API Modules

### Authentication Module

* User Registration
* User Login
* Current User Retrieval
* Notification Retrieval
* Notification Status Updates

### Doctor Module

* Doctor Registration Request
* Doctor Profile Management
* Approved Doctor Listings

### Appointment Module

* Appointment Booking
* Patient Appointment Management
* Doctor Appointment Management
* Appointment Status Updates

### Admin Module

* Doctor Verification
* Doctor Approval Workflow
* Platform Doctor Management

---

## 🔒 Security Features

* JWT Authentication
* Password Encryption using bcryptjs
* Route Protection Middleware
* Role-Based Access Control
* Environment Variable Management
* Secure API Communication

---

## 📚 Technical Concepts Implemented

* Full Stack MERN Development
* RESTful API Design
* Authentication & Authorization
* Role-Based Access Control (RBAC)
* MongoDB Data Modeling
* Redux State Management
* Client-Server Architecture
* API Integration
* Deployment & DevOps Fundamentals
* Production Debugging & Error Handling

---

## 🎯 Key Learning Outcomes

Through this project, I gained practical experience in:

* Designing and building scalable full-stack applications
* Implementing secure authentication systems
* Managing complex role-based workflows
* Integrating MongoDB with Express and React
* Deploying production-ready applications
* Managing application state using Redux Toolkit
* Building reusable APIs and frontend components

---

## 👨‍💻 Developer

**Vivekananda**

GitHub: https://github.com/nanda-dev7


---

## 📄 License

This project is developed for educational, portfolio, and professional learning purposes.
