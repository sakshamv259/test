export function renderHome(): void {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <h1>Home</h1>
        <div id="carouselExampleIndicators" class="carousel slide mb-6" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="public/assets/images/volunteer1.jpeg" class="d-block w-100" alt="Slide 1">
              <div class="carousel-caption text-start">
                <h1>ART&CRAFT and Children</h1>
                <p>Volunteer work teaching children about art and craft.</p>
                <a class="btn btn-lg btn-primary" href="#/opportunities">Get Involved</a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="public/assets/images/v2.jpg" class="d-block w-100" alt="Slide 2">
              <div class="carousel-caption">
                <h1>Keeping the planet green.</h1>
                <p>Planting 5400 trees with great community support.</p>
                <a class="btn btn-lg btn-primary" href="#/opportunities">Get Involved</a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="public/assets/images/v3.jpeg" class="d-block w-100" alt="Slide 3">
              <div class="carousel-caption text-end">
                <h1>Fitness Camp for the OLD GOLD.</h1>
                <p>Fitness camp organized for the elderly.</p>
                <a class="btn btn-lg btn-primary" href="#/opportunities">Get Involved</a>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="text-center my-4">
          <h1>Let's give back to the community, together!</h1>
          <p>Join us in making a positive impact by contributing your time, skills, and energy to meaningful causes.</p>
        </div>
      `;
    }
  }
  