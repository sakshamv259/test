export function renderAbout(): void {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <div class="container mt-5">
          <h1>Somewhat About Myself.</h1>
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1">Meet Saksham Verma</h1>
              <p class="lead">Hello folks, my name is Saksham Verma, an upcoming amazing full-stack-developer. My goal in life is to excel in the field of Technology. I am currently a student at Durham College pursuing Computer Programming.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a href="#/contact"><button type="button" class="btn btn-primary btn-lg px-5 me-md-2 fw-bold">Give me a Waive?</button></a>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src="public/assets/images/volunteer1.jpeg" alt="Profile Image" width="100%">
            </div>
          </div>
        </div>
      `;
    }
  }
  