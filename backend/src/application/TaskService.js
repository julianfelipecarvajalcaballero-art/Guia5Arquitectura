const { Task } = require("../domain/Task");
const { ValidationError, NotFoundError } = require("../domain/errors");
const VALID_STATUSES = ["pendiente", "en progreso", "finalizada"];

class TaskService {
  constructor(repository) {
    this.repository = repository;
  }

  listTasks() {
    return this.repository.findAll();
  }

  createTask({ title, description = "" }) {
    if (typeof title !== "string" || title.trim().length < 3) {
      const error = new ValidationError("El título debe tener al menos 3 caracteres.");
      throw error;
    }
    return this.repository.create(new Task({ title: title.trim(), description: String(description).trim(), status: "pendiente" }));
  }

  changeStatus(id, status) {
    if (!VALID_STATUSES.includes(status)) {
      const error = new ValidationError(`Estado inválido. Use: ${VALID_STATUSES.join(", ")}.`);
      throw error;
    }
    const updated = this.repository.updateStatus(id, status);
    if (!updated) {
      const error = new NotFoundError("No existe una tarea con ese identificador.");
      throw error;
    }
    return updated;
  }
}

module.exports = { TaskService };
