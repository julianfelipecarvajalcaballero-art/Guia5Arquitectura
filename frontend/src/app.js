import { API_URL, request } from "./api.js";
import { escapeHtml, renderTasks } from "./view.js";
const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const taskList = document.querySelector("#task-list");
const message = document.querySelector("#message");
const apiStatus = document.querySelector("#api-status");





async function loadTasks() {
  try {
    const tasks = await request();
    renderTasks(tasks);
    apiStatus.textContent = "API conectada";
  } catch (error) {
    apiStatus.textContent = "API no disponible";
    apiStatus.style.background = "#fde8e8";
    apiStatus.style.color = "#9b2222";
    taskList.innerHTML = `<p>${escapeHtml(error.message)}. Verifica que el backend esté iniciado.</p>`;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "";
  try {
    await request(API_URL, {
      method: "POST",
      body: JSON.stringify({ title: titleInput.value, description: descriptionInput.value })
    });
    form.reset();
    message.style.color = "#17663a";
    message.textContent = "Tarea creada correctamente.";
    await loadTasks();
  } catch (error) {
    message.style.color = "#a12b2b";
    message.textContent = error.message;
  }
});

document.querySelector("#refresh").addEventListener("click", loadTasks);

taskList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-save-id]");
  if (!button) return;
  const id = button.dataset.saveId;
  const select = taskList.querySelector(`[data-task-id="${id}"]`);
  try {
    await request(`${API_URL}/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: select.value })
    });
    await loadTasks();
  } catch (error) {
    message.style.color = "#a12b2b";
    message.textContent = error.message;
  }
});

loadTasks();
