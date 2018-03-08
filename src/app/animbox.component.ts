import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from "@angular/animations";

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
        state('stepped', style({
          backgroundColor: '#549a76',
          transform: 'scale(1)'
        })),
        // transition from angular animation
        // from anything * 
        transition('* => basic', animate('800ms')),
        transition('* => original', animate('200ms')),
        transition('* => delaying', animate('800ms 1200ms ease-out')),
        transition('* => easing', animate('800ms ease-in-out')),
        transition('* => stepped',[
          animate('1000ms ease-in-out', keyframes([
            style({backgroundColor: '#dd9344', transform: 'scale(1.4)', offset: 0.2}),
            style({backgroundColor: '#5c2346', transform: 'scale(0.8)', offset: 0.4}),
            style({backgroundColor: '#1b1b1b', transform: 'scale(1.2)', offset: 0.7}),
            style({backgroundColor: '#549a76', transform: 'scale(1)', offset: 0.9})
          ]))
        ])
      ])
    ]
  })


export class AnimboxComponent {
  @Input() currentState;
}
