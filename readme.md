# Task API

A simple to-do list API built with Express.js. Manage tasks with full CRUD operations — create, read, update, and delete tasks through a clean REST API with Swagger UI documentation.

## Quick Start

### Prerequisites
- Node.js 14+ ([download here](https://nodejs.org))

### Installation & Running

```bash
git clone https://github.com/YOUR_USERNAME/task-api.git
cd task-api
npm install
node server.js
```

The API will start on `http://localhost:3000`

View interactive API docs at: `http://localhost:3000/docs`

## API Endpoints

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| GET | `/` | API description | 200 |
| GET | `/health` | Health check | 200 |
| GET | `/tasks` | List all tasks | 200 |
| GET | `/tasks/:id` | Get single task | 200/404 |
| POST | `/tasks` | Create new task | 201/400 |
| PUT | `/tasks/:id` | Update task | 200/400/404 |
| DELETE | `/tasks/:id` | Delete task | 204/404 |

## Example Usage

### Get all tasks
```bash
curl -i http://localhost:3000/tasks
```

**Response (200 OK):**
```json
[
  { id: 1, title: "Buy Dairymilk", done: false },
  { id: 2, title: "Play with the dog", done: true },
  { id: 3, title: "Finish your homework", done: false }
]
```

### Create a new task
```bash
curl -i -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries"}'
```

**Response (201 Created):**
```json
{ "id": 4, "title": "Buy toys for kids", "done": false }
```

### Update a task
```bash
curl -i -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk","done":true}'
```

**Response (200 OK):**
```json
{ "id": 1, "title": "Buy milk", "done": true }
```

### Delete a task
```bash
curl -i -X DELETE http://localhost:3000/tasks/1
```

**Response (204 No Content)** - empty body, task removed

## Testing with Swagger UI

Open `http://localhost:3000/docs` in your browser for an interactive API explorer with "Try it out" buttons.

## Data Storage

Tasks are stored **in memory only** — they exist only while the server is running. Restart the server to reset to the 3 example tasks. This is intentional for learning; a real API would use a database.

## Files

- `server.js` — Main Express app with all endpoints
- `openapi.json` — Swagger/OpenAPI specification
- `package.json` — Dependencies (Express, Swagger UI)

## Commits

This project was built stage-by-stage:
- Stage 0: Hello server
- Stage 1: Root and health endpoints
- Stage 2: Read endpoints (GET)
- Stage 3: Create endpoint (POST with validation)
- Stage 4: Update & Delete (PUT, DELETE)
- Stage 5: Swagger UI documentation
- Stage 6: GitHub publishing and README

View the commit history: `git log --oneline`