import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostListener('mouseenter') mouseOver(_event: Event) {
    // this.setBackgroundColor('blue');
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseLeave(_event: Event) {
    this.backgroundColor = 'transparent';
    // this.setBackgroundColor('transparent');
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
  }
}
