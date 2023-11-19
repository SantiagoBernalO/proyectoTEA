import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-follow-cursor',
  template: `<img src="assets/image/cursor.png" [style.left.px]="left" [style.top.px]="top" />`,
  styleUrls: ['./follow-cursor.component.css']
})
export class FollowCursorComponent {
  left = 0;
  top = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.left = (event.pageX)-22;
    this.top = event.pageY;
  }
}
