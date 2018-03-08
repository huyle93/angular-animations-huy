import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-toggleable-sm fixed-top navbar-inverse mb-4" style="background-color:#663399;">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Home Project</a>
      <div class="collapse navbar-collapse" id="main-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-home" routerLinkActive="active">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-basics" routerLinkActive="active">Basics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-contained" routerLinkActive="active">Contained</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/animation-advanced" routerLinkActive="active">Advanced</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``]
})
export class AppComponent {}
