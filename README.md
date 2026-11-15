# Task Manager API

A RESTful backend API for managing tasks, built with Node.js, Express and MongoDB. Users can register, log in with JWT authentication and manage their own tasks.

## Features
- User registration and login with JWT authentication
- Password hashing using bcrypt
- Protected routes with authentication middleware
- Each user can access only their own tasks
- Create, read, update and delete tasks (CRUD)
- MongoDB database with Mongoose
- Input validation and error handling

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (jsonwebtoken)
- bcryptjs

## API Endpoints

### Auth

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | /api/auth/register | Register a new user | No |
| POST | /api/auth/login | Log in and receive a token | No |
| GET | /api/auth/me | Get logged-in user details | Yes |

### Tasks

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | /api/tasks | Create a new task | Yes |
| GET | /api/tasks | Get all tasks of the logged-in user | Yes |
| GET | /api/tasks/:id | Get a single task | Yes |
| PUT | /api/tasks/:id | Update a task | Yes |
| DELETE | /api/tasks/:id | Delete a task | Yes |

Protected routes need this header:

```
Authorization: Bearer <your_token>
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/laxmikant-misal12/task-manager-api.git
   cd task-manager-api
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/taskdb
   JWT_SECRET=your_secret_key
   JWT_EXPIRES_IN=7d
   ```
4. Run the server
   ```bash
   npm run dev
   ```

The server runs on `http://localhost:5000`.

## Testing
Sample requests are available in `requests.http` and `auth-requests.http` (use the VS Code REST Client extension).

## Author
Laxmikant Misal