const express = require("express");
const cors = require("cors");
const path = require("node:path");
const { Task } = require("./domain/Task");
const { ValidationError, NotFoundError } = require("./domain/errors");
const { InMemoryTaskRepository } = require("./infrastructure/InMemoryTaskRepository");
const { TaskService } = require("./application/TaskService");
const { createTaskController } = require("./interfaces/http/taskController");
const { createTaskRoutes } = require("./interfaces/http/taskRoutes");
function createApp({ repository } = {}) {
  const app = express();
  repository = repository || new InMemoryTaskRepository([
    new Task({ id: 1, title: "Analizar el proyecto base", description: "Identificar responsabilidades", status: "en progreso" }),
    new Task({ id: 2, title: "Diseñar la arquitectura", description: "Proponer módulos" })
  ]);
  app.use(cors());
  app.use(express.json());
  app.get("/api/health", (req, res) => res.json({ status: "ok" }));
  app.use("/api/tasks", createTaskRoutes(createTaskController(new TaskService(repository))));
  app.use(express.static(path.resolve(__dirname, "../../frontend")));
  app.use((error, req, res, next) => {
    const status = error instanceof ValidationError ? 400 : error instanceof NotFoundError ? 404 : error.type === "entity.parse.failed" ? 400 : 500;
    res.status(status).json({ error: status === 500 ? "Error interno del servidor" : error.message });
  });
  return app;
}
module.exports = { createApp };
