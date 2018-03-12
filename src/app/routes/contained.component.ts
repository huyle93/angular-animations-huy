import { Component } from "@angular/core";

@Component({
    template: `
    <h1>Self-Contained Animation</h1>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12"></div>
                <mouse></mouse>
          </div>
      </div>
    `, 
    styles: [``]
})
export class ContainedComponent {}