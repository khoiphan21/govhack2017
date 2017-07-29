import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('slideInAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(100%)'
            }),
            animate('0.5s ease-in')
        ]),
        transition(':leave', [
            animate('0.5s', style({
                opacity: 1,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);

// Component transition animations
export const slideInRightAnimation: AnimationEntryMetadata =
    trigger('slideInRightAnimation', [
        state('*',
            style({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 1,
                transform: 'translateX(100%)'
            }),
            animate('0.5s')
        ]),
        transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 1,
                transform: 'translateX(-100%)'
            }))
        ])
    ]);
