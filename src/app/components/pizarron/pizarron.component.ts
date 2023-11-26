import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-pizarron',
  templateUrl: './pizarron.component.html',
  styleUrls: ['./pizarron.component.css']
})
export class PizarronComponent implements OnInit {
  @ViewChild('canvasElement', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private isDrawing: boolean = false;
  private isEraserMode: boolean = false;
  selectedColor: string = '#000000'; // Color por defecto

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.adjustCanvasSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustCanvasSize();
  }

  adjustCanvasSize(): void {
    const canvasContainer = this.canvas.nativeElement.parentElement;
    this.canvas.nativeElement.width = canvasContainer.clientWidth;
    this.canvas.nativeElement.height = canvasContainer.clientHeight-100;
  }

  startDrawing(event: MouseEvent): void {
    this.isDrawing = true;
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    this.ctx.beginPath();
    this.ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  }

  draw(event: MouseEvent): void {
    if (!this.isDrawing) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (this.isEraserMode) {
      this.ctx.clearRect(x - 5, y - 5, 20, 20); // Tamaño del borrador
    } else {
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = this.selectedColor;
      this.ctx.stroke();
    }
  }

  endDrawing(): void {
    this.isDrawing = false;
  }

  clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  toggleEraserMode(): void {
    this.isEraserMode = !this.isEraserMode;
  }

}
