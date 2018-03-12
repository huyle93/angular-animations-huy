import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
    selector: 'mouse',
    template: `
    <div class="mymouse mx-auto (mouseenter)="setMouse('hover')" (mousedown)="setMouse('press') (mouseleave)="setMouse('rest')" [@changeState]="currentState"></div>
    `,
    styles: [
        `.mymouse {
            backgound-color: #5c8f52;
            width: 200px;
            height: 200px;
            border-radius: 200px;
            margin: 6rem;
        }`
    ],
    animations: []
})
export class MouseComponent {
    currentState: "rest";
    setMouse(state) {
        this.currentState = state;
    }
}