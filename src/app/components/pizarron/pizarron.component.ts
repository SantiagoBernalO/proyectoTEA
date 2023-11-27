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

  startDrawing(event: MouseEvent | TouchEvent): void {
    this.isDrawing = true;
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
    const y = (event instanceof MouseEvent) ? event.clientY : event.touches[0].clientY;
    this.ctx.beginPath();
    this.ctx.moveTo(x - rect.left, y - rect.top);
  }

  draw(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
    const y = (event instanceof MouseEvent) ? event.clientY : event.touches[0].clientY;


    if (this.isEraserMode) {
      this.ctx.clearRect(x - 5, y - 5, 20, 20); // Tamaño del borrador
    } else {
      this.ctx.lineTo(x - rect.left, y - rect.top);
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
