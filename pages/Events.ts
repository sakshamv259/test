import { events } from "../data/events";

export function renderEvents(): void {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <h1>Events</h1>
      <div class="mb-4">
        <h4>Filter Events by Category</h4>
        <select id="eventFilter" class="form-select">
          <option value="all">All Events</option>
        </select>
      </div>
      <div id="calendar"></div>
    `;

    const eventFilter = document.getElementById("eventFilter") as HTMLSelectElement;
    const uniqueCategories = Array.from(new Set(events.map(ev => ev.category)));
    uniqueCategories.forEach(cat => {
      eventFilter.innerHTML += `<option value="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</option>`;
    });

    const calendarDiv = document.getElementById("calendar");
    if (calendarDiv) {
      calendarDiv.innerHTML = "";
      events.forEach(ev => {
        calendarDiv.innerHTML += `
          <div class="event-card mb-2">
            <h5>${ev.title}</h5>
            <p>${ev.date} — ${ev.description}</p>
          </div>
        `;
      });
    }
  }
}
