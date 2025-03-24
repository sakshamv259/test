export function renderContact(): void {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <section id="contact" class="py-5">
          <div class="container">
            <div class="row text-center">
              <div class="col-12">
                <h2 class="display-4">Volunteer Connect</h2>
                <p class="lead">Fill out the form to get in touch with us. We'll get back to you soon!</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <form id="contactForm">
                  <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div class="col-12">
                      <label for="name" class="form-label">Full Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="subject" class="form-label">Subject</label>
                      <input type="text" class="form-control" id="subject" name="subject">
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                      <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                  </div>
                  <div id="spinner" class="text-center" style="display: none;">
                    <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div id="successMessage" class="alert alert-success text-center" style="display: none;">
                    <strong>Success!</strong> Your message has been sent.
                  </div>
                  <div id="errorMessage" class="alert alert-danger text-center" style="display: none;">
                    <strong>Error!</strong> There was a problem sending your message. Please try again.
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      `;
      const contactForm = document.getElementById("contactForm") as HTMLFormElement;
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const spinner = document.getElementById("spinner") as HTMLElement;
        spinner.style.display = "block";
        setTimeout(() => {
          spinner.style.display = "none";
          (document.getElementById("successMessage") as HTMLElement).style.display = "block";
          contactForm.reset();
        }, 2000);
      });
    }
  }
  