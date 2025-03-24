export interface Route {
    path: string;
    component: () => void;
  }
  
  export class Router {
    private routes: Route[] = [];
    private rootElem: HTMLElement;
  
    constructor(rootId: string) {
      const elem = document.getElementById(rootId);
      if (!elem) {
        throw new Error(`Root element with id ${rootId} not found`);
      }
      this.rootElem = elem;
      window.addEventListener('hashchange', () => this.handleRoute());
    }
  
    public register(route: Route): void {
      this.routes.push(route);
    }
  
    public init(): void {
      this.handleRoute();
    }
  
    private handleRoute(): void {
      const hash = window.location.hash || '#/home';
      const path = hash.replace('#', '');
      const route = this.routes.find(r => r.path === path);
      if (route) {
        this.rootElem.innerHTML = '';
        route.component();
        this.setActiveNav(path.split('/')[1]); // e.g., '/home' becomes 'home'
      } else {
        this.rootElem.innerHTML = '<h2>Page Not Found</h2>';
      }
    }
  
    private setActiveNav(active: string): void {
      document.querySelectorAll('.navitm').forEach(item => item.classList.remove('active'));
      const activeElem = document.getElementById(active);
      if (activeElem) {
        activeElem.classList.add('active');
      }
    }
  }
  