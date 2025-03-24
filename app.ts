import { Router } from "./components/router";
import { updateAuthNav } from "./components/auth";
import { renderHome } from "./pages/Home";
import { renderNews } from "./pages/News";
import { renderEvents } from "./pages/Events";
import { renderOpportunities } from "./pages/Opportunities";
import { renderAbout } from "./pages/About";
import { renderContact } from "./pages/Contact";
import { renderGallery } from "./pages/Gallery";
import { renderStatistics } from "./pages/Statistics";
import { renderEventPlanning } from "./pages/EventPlanning";

// Update authentication navigation
updateAuthNav();

// Initialize router on the #app container
const router = new Router("app");

// Register SPA routes
router.register({ path: "/home", component: renderHome });
router.register({ path: "/news", component: renderNews });
router.register({ path: "/events", component: renderEvents });
router.register({ path: "/opportunities", component: renderOpportunities });
router.register({ path: "/about", component: renderAbout });
router.register({ path: "/contact", component: renderContact });
router.register({ path: "/gallery", component: renderGallery });
router.register({ path: "/statistics", component: renderStatistics });
router.register({ path: "/event-planning", component: renderEventPlanning });

// Default route if none is set
if (!window.location.hash) {
  window.location.hash = "#/home";
}

// Start the router
router.init();
