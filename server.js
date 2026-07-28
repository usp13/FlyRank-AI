const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory task list with 3 example tasks

const tasks = [
  { id: 1, title: "Buy Dairymilk", done: false },
  { id: 2, title: "Play with the dog", done: true },
  { id: 3, title: "Finish your homework", done: false }
];

// GET / - API description

app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
  });
});

// GET /health - Health check

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// GET /tasks - Return all tasks

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id - Return one task by id

app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  
  if (!task) {
    return res.status(404).json({ error: `Task ${id} not found` });
  }
  
  res.json(task);
});



// POST /tasks - Create a new task

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  
  // Validation: title must exist and not be empty
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: "Title is required and cannot be empty" });
  }
  
  // Generate next id
  const nextId = Math.max(...tasks.map(t => t.id), 0) + 1;
  
  // Create new task
  const newTask = {
    id: nextId,
    title: title.trim(),
    done: false
  };
  
  // Add to list
  tasks.push(newTask);
  
  // Return with 201 Created status
  res.status(201).json(newTask);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});