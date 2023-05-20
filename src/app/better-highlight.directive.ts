import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  @HostListener('mouseenter') mouseOver(_event: Event) {
    this.setBackgroundColor('blue');
  }
  @HostListener('mouseleave') mouseLeave(_event: Event) {
    this.setBackgroundColor('transparent');
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
  }
}
