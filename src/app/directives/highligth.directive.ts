import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dirHighligth]',
})
export class HighligthDirective {
  @Input() color = 'darkgray';

  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.doHighLigth(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.doHighLigth('');
  }

  doHighLigth(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }

}
