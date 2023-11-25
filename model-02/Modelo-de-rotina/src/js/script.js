const tasksOfMyDay = [
  { id: "task-1", activity: "Refeições", hours_per_day: 3, hours_per_week: 18 },
  { id: "task-2", activity: "Trabalho", hours_per_day: 8, hours_per_week: 45 },
  { id: "task-3", activity: "Lazer", hours_per_day: 2, hours_per_week: 12 },
  { id: "task-4", activity: "Estudo", hours_per_day: 4, hours_per_week: 24 },
  { id: "task-5", activity: "Dormir", hours_per_day: 7, hours_per_week: 42 },
];

class ModelRoutine {
  constructor(tasksOfMyDay) {
    this.tasksOfMyDay = tasksOfMyDay;
    this.tableTasks = document.querySelector(".table_tasks");
    this.tableBody = document.createElement("tbody");
    this.graficsConteiner = document.querySelector(".grafics");
  }

  init() {
    this.addTasksToTable();
  }

  createTableRow(task) {
    const trTemplate = document.createElement("tr");
    trTemplate.innerHTML = `
      <tr>
        <td>${task.activity}</td>
        <td>${task.hours_per_day}h</td>
        <td>${task.hours_per_week}h</td>
      </tr>
    `;
    this.tableBody.appendChild(trTemplate);
    this.tableTasks.appendChild(this.tableBody);
  }

  createGrafics(task) {
    const grafic = `
      <div class="grafic_column">
        <span>${task.activity}</span>
        <div class="percent" id=${task.id}></div>
      </div>
    `;
    this.graficsConteiner.innerHTML += grafic;
  }

  fillingTheGraph(task) {
    const percent = document.querySelector(`#${task.id}`);
    const porcentagemDeHoras = (task.hours_per_day / 8) * 100;
    const porcentagemDeHorasEmPX = (porcentagemDeHoras.toFixed(1) / 100) * 400;

    percent.style.height = `${porcentagemDeHorasEmPX}px`;
  }

  addTasksToTable() {
    this.tasksOfMyDay.forEach((task) => {
      this.createTableRow(task);
      this.createGrafics(task);
      this.fillingTheGraph(task);
    });
  }
}

const modelRoutine = new ModelRoutine(tasksOfMyDay);
modelRoutine.init();
