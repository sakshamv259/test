import { opportunities } from "../data/opportunities";

export function renderOpportunities(): void {
  const app = document.getElementById("app");
  if (app) {
    let oppHtml = `
      <h1>Opportunities</h1>
      <input type="text" id="searchInput" class="form-control mb-3" placeholder="Search for opportunities...">
      <div class="card_holder container d-flex gap-4 flex-wrap">
    `;
    opportunities.forEach((opp, index) => {
      oppHtml += `
        <div class="card opportunity-card m-2" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${opp.title}</h5>
            <p class="card-text">${opp.description}</p>
            <button class="btn btn-primary sign_up" data-index="${index}" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
          </div>
        </div>
      `;
    });
    oppHtml += `</div>`;
    app.innerHTML = oppHtml;

    // Search functionality
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    searchInput.addEventListener("input", function () {
      const searchText = searchInput.value.toLowerCase();
      document.querySelectorAll(".opportunity-card").forEach(card => {
        const title = card.querySelector(".card-title")?.textContent?.toLowerCase() || "";
        const description = card.querySelector(".card-text")?.textContent?.toLowerCase() || "";
        (card as HTMLElement).style.display = (title.includes(searchText) || description.includes(searchText)) ? "block" : "none";
      });
    });

    // Modal functionality for sign-up
    document.querySelectorAll(".sign_up").forEach(button => {
        button.addEventListener("click",  () => {
        const index = (this as HTMLElement).getAttribute("data-index");
        const opp = opportunities[parseInt(index as string)];
        const modalTitle = document.getElementById("opportunityTitle");
        if (modalTitle) {
          modalTitle.textContent = opp.title;
        }
      });
    });
  }
}
