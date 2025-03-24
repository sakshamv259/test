export function renderEventPlanning(): void {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <h1>Event Planning</h1>
        <form id="eventPlanningForm">
          <div class="form-group">
            <label for="eventName">Event Name</label>
            <input type="text" id="eventName" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="eventDate">Date</label>
            <input type="date" id="eventDate" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="eventTime">Time</label>
            <input type="time" id="eventTime" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="eventLocation">Location</label>
            <input type="text" id="eventLocation" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="eventDescription">Description</label>
            <textarea id="eventDescription" class="form-control" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Plan Event</button>
        </form>
        <h2 class="mt-4">Planned Events</h2>
        <div id="plannedEvents"></div>
      `;
      
      const form = document.getElementById("eventPlanningForm") as HTMLFormElement;
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = (document.getElementById("eventName") as HTMLInputElement).value;
        const date = (document.getElementById("eventDate") as HTMLInputElement).value;
        const time = (document.getElementById("eventTime") as HTMLInputElement).value;
        const location = (document.getElementById("eventLocation") as HTMLInputElement).value;
        const description = (document.getElementById("eventDescription") as HTMLTextAreaElement).value;
        
        const plannedEventsDiv = document.getElementById("plannedEvents");
        if (plannedEventsDiv) {
          plannedEventsDiv.innerHTML += `
            <div class="card mb-2">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"><strong>Date:</strong> ${date} at ${time}</p>
                <p class="card-text"><strong>Location:</strong> ${location}</p>
                <p class="card-text">${description}</p>
              </div>
            </div>
          `;
          form.reset();
        }
      });
    }
  }
  