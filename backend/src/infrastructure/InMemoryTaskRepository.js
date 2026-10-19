class InMemoryTaskRepository {
  constructor(tasks = []) {
    this.tasks = tasks.map(task => ({ ...task }));
    this.nextId = Math.max(0, ...this.tasks.map(task => task.id)) + 1;
  }
  findAll() { return this.tasks.map(task => ({ ...task })); }
  create(task) {
    const stored = { ...task, id: this.nextId++ };
    this.tasks.push(stored);
    return { ...stored };
  }
  findById(id) {
    const task = this.tasks.find(task => task.id === Number(id));
    return task ? { ...task } : null;
  }
  updateStatus(id, status) {
    const task = this.tasks.find(task => task.id === Number(id));
    if (!task) return null;
    task.status = status;
    return { ...task };
  }
}
module.exports = { InMemoryTaskRepository };
