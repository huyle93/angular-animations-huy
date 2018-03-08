import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-toggleable-sm fixed-top navbar-inverse mb-4" style="background-color:#5c2509;">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Home Project</a>
      <div class="collapse navbar-collapse" id="main-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [``]
})
export class AppComponent {}
