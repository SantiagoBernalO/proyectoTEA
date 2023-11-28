import { Platform } from '@angular/cdk/platform';
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-follow-cursor',
  template: `<img *ngIf="showCursor" src="assets/image/cursor.png" [style.left.px]="left" [style.top.px]="top" />`,
  styleUrls: ['./follow-cursor.component.css']
})
export class FollowCursorComponent {
  left = 0;
  top = 0;
  showCursor: Boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2, private platform: Platform) {
    this.showCursor = !(this.platform.IOS || this.platform.ANDROID);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.showCursor) {
      this.left = (event.pageX)-22;
      this.top = event.pageY;
    }
  }
}
