export function checkAuthentication(): string | null {
    return localStorage.getItem("username");
  }
  
  export function updateAuthNav(): void {
    const navAuth = document.querySelector(".nav-auth") as HTMLElement;
    const username = checkAuthentication();
    if (username) {
      navAuth.innerHTML = `
        <span class="navbar-text text-light">Welcome, ${username}</span>
        <button class="btn btn-danger btn-sm ms-2" id="logoutBtn">Log Out</button>
      `;
      document.getElementById("logoutBtn")?.addEventListener("click", () => {
        localStorage.removeItem("username");
        location.reload();
      });
      // Reveal authenticated-only links
      document.getElementById("statistics")?.classList.remove("d-none");
      document.getElementById("eventPlanning")?.classList.remove("d-none");
    } else {
      navAuth.innerHTML = `<a href="#/login" class="btn btn-success btn-sm">Log In</a>`;
    }
  }
  