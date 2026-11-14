# Task Manager API

A RESTful backend API for managing tasks, built with Node.js, Express and MongoDB.

## Features
- Create, read, update and delete tasks (CRUD)
- MongoDB database with Mongoose
- Input validation and error handling

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/tasks | Create a new task |
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get a single task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

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
   MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
   ```
4. Run the server
   ```bash
   npm run dev
   ```

The server runs on `http://localhost:5000`.

## Testing
Sample requests are available in `requests.http` (use the VS Code REST Client extension).

## Author
Laxmikant Misal