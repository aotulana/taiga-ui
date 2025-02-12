import {Directive, ElementRef} from '@angular/core';
import {TUI_SCROLL_REF} from '@taiga-ui/cdk';

/** @deprecated import from `@taiga-ui/cdk` instead */
export const SCROLL_REF_SELECTOR = '[tuiScrollRef]';

/** @deprecated import from `@taiga-ui/cdk` instead */
@Directive({
    selector: SCROLL_REF_SELECTOR,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
})
export class TuiScrollRefDirective {}
