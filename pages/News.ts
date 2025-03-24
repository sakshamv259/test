import moment = require("moment");


export function renderNews(): void {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <h1>News</h1>
      <div id="loading" class="text-center mt-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div id="news-container" class="row mt-4"></div>
    `;
    const apiKey = "525259.53d62d5fe4938a8ce668037cd3f8ff3bf42314638387644fca86fec940d65015"; 
    const apiUrl = `https://api.goperigon.com/v1/all?category=Business&sourceGroup=top100&showReprints=false&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const newsContainer = document.getElementById("news-container");
        if (newsContainer) {
          newsContainer.innerHTML = "";
          if (data.articles && data.articles.length > 0) {
            data.articles.forEach((article: any) => {
              const imageUrl = article.imageUrl || "public/img/news.jpg";
              newsContainer.innerHTML += `
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="${imageUrl}" class="card-img" alt="news image">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description || "No description available."}</p>
                        <p class="card-text"><small class="text-muted">Published on: ${moment(article.pubDate).format("MMMM Do, YYYY")}</small></p>
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            });
          } else {
            newsContainer.innerHTML = '<p class="text-center text-muted">No news articles found.</p>';
          }
        }
      })
      .catch(() => {
        const newsContainer = document.getElementById("news-container");
        if (newsContainer) {
          newsContainer.innerHTML = '<p class="text-danger text-center">Failed to load news. Please try again later.</p>';
        }
      });
  }
}
