import {trigger, state, style, animate, transition} from '@angular/animations';

export const RedGreen = {changeState:[
    trigger('changeState', [
        state('collapsed', style({ height: "50px" })),
        state('expanded', style({ opacity: 1.0, height: '*' })),
        transition('collapsed => expanded', [
          style({ opacity: 0.0, height: 0 }),
          animate('2.0s cubic-bezier(0.35, 1, 0.25, 1)', style({ opacity: 1.0, height: '*' }))
          ]),
        transition('expanded => collapsed', [
          style({ opacity: 1.0, height: '*' }),
          animate('2.0s cubic-bezier(0.1, 1, 0.1, .1)', style({height: '50px' }))
          ])
      ])
,trigger('changeState', [
        state('collapsed', style({ height: "50px" })),
        state('expanded', style({ opacity: 1.0, height: '*' })),
        transition('collapsed => expanded', [
          style({ opacity: 0.0, height: 0 }),
          animate('2.0s cubic-bezier(0.35, 1, 0.25, 1)', style({ opacity: 1.0, height: '*' }))
          ]),
        transition('expanded => collapsed', [
          style({ opacity: 1.0, height: '*' }),
          animate('2.0s cubic-bezier(0.1, 1, 0.1, .1)', style({height: '50px' }))
          ])
      ])]};