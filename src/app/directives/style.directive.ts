import {Directive, ElementRef, Input, HostListener, Renderer2} from '@angular/core';

interface Style {
  border?: string,
  fontWeight?: string,
}

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color = 'pink';
  @Input() fontWeight = 'normal';
  @Input() dStyles: Style;

/*
 это не работает
  @Input() dStyles = {
    border?: string,
    fontWeight?: string,
  };  */

  constructor(private el: ElementRef, private r: Renderer2) {
    r.setStyle(this.el.nativeElement, 'color', 'blue');
    el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): any {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    console.log('event: ', event);
  }
  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event): any {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.border);
    console.log('event: ', event);
  }
  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event): any {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    console.log('event: ', event);
  }
}
