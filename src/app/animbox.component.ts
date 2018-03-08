import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'animbox',
  template: `<div [@changeState]="currentState" class="mybox mx-auto"></div>`,
  styles: [`
      .mybox {
          background-color: #47748f;
          width: 200px;
          height: 200px;
          border-radius: 6px;
          margin: 6rem;
      }
    `],
  animations: [
      trigger('changeState', [
        state('original', style({
          backgroundColor: '#47748f',
          transform: 'scale(1)'
        })),
        state('basic', style({
          backgroundColor: '#440000',
          transform: 'scale(2)'
        })),
        state('delaying', style({
          backgroundColor: '#812170',
          transform: 'scale(1.6)'
        })),
        state('easing', style({
          backgroundColor: '#985b00',
          transform: 'scale(2.2)'
        })),
        // transition from angular animation
        // from anything * 
        transition('* => basic', animate('800ms')),
        transition('* => original', animate('200ms')),
        transition('* => delaying', animate('800ms 1200ms ease-out')),
        transition('* => easing', animate('800ms ease-in-out'))
      ])
    ]
  })


export class AnimboxComponent {
  @Input() currentState;
}
