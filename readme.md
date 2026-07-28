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

Open **`http://localhost:3000/docs`** in your browser for an interactive API explorer.

### Features
- 📋 **All endpoints listed** — GET, POST, PUT, DELETE all visible
- 🎯 **Try it out button** — Test endpoints without curl
- 📝 **Request examples** — Pre-filled JSON templates for POST/PUT
- ✅ **Live responses** — See status codes and response bodies instantly

### How to use "Try it out"

1. Click any endpoint (e.g., POST /tasks)
2. Click the blue **"Try it out"** button
3. Edit the request body if needed (for POST/PUT)
4. Click **"Execute"**
5. See the response: status code, headers, body

### Full CRUD Cycle via Swagger

Test the complete workflow without leaving Swagger:

1. **Create** → POST /tasks → Try it out → `{"title":"Buy groceries"}` → Execute → Note the returned `id`
2. **Read all** → GET /tasks → Try it out → Execute → See all tasks
3. **Read one** → GET /tasks/{id} → Try it out → Enter the id from step 1 → Execute
4. **Update** → PUT /tasks/{id} → Try it out → `{"done":true}` → Execute
5. **Delete** → DELETE /tasks/{id} → Try it out → Execute → Get 204 (No Content)
6. **Verify deleted** → GET /tasks → Execute → Task is gone

### Screenshot of the Swagger UI

<img width="1866" height="888" alt="Screenshot 2026-07-28 202421" src="https://github.com/user-attachments/assets/4a50533a-78c8-4f36-9e1c-07c9d02f7d2e" />


*All 5 endpoints visible, "Try it out" buttons active, full CRUD tested*

### EXECUTE Button

<img width="1795" height="730" alt="Screenshot 2026-07-28 202258" src="https://github.com/user-attachments/assets/2ab66b45-7f72-40f5-9353-4106f4aa1000" />



### Customised Input for POST /tasks and PUT /tasks/:id

<img width="1798" height="888" alt="Screenshot 2026-07-28 202147" src="https://github.com/user-attachments/assets/abd98c0f-cee1-4fe9-b70a-a7789ea9d180" />
<img width="1827" height="908" alt="Screenshot 2026-07-28 201932" src="https://github.com/user-attachments/assets/cf51c036-2aac-4995-a111-c3c1042c6338" />


### DELETE /tasks/:id
<img width="1811" height="857" alt="Screenshot 2026-07-28 201840" src="https://github.com/user-attachments/assets/623a798f-acb4-42ea-a3a2-86e1e4101a77" />



### GET /  :  Final output after performing all operations    
<img width="1802" height="873" alt="Screenshot 2026-07-28 202320" src="https://github.com/user-attachments/assets/9da53501-832e-48e4-bd22-c6ef21c4c0c0" />


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
