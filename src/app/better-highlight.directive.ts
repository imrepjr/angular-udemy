import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostListener('mouseenter') mouseOver(_event: Event) {
    // this.setBackgroundColor('blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(_event: Event) {
    this.backgroundColor = this.defaultColor;
    // this.setBackgroundColor('transparent');
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
  }
}
