import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { log } from 'console';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { ActividadComputerVision } from 'src/app/_model/Actividad';
import { ActividadService } from 'src/app/_service/actividad.service';

@Component({
  selector: 'app-camara-visualizador',
  templateUrl: './camara-visualizador.component.html',
  styleUrls: ['./camara-visualizador.component.css']
})
export class CamaraVisualizadorComponent implements OnInit {

  public webcamImage: WebcamImage | undefined;
  public showWebcam = true;
  public resultado: ActividadComputerVision[] = [];

  constructor(private serviceActivity: ActividadService,){

  }

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        console.info('Media Devices:', mediaDevices);
      });
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public handleInitError(error: WebcamInitError): void {
    console.error('Webcam initialization error:', error);
  }

  // camera.component.ts
  public trigger: Subject<void> = new Subject<void>();

  public capture(): void {

    //toma captura de la imagen utilizando imageCapture
    this.trigger.next();

    // Convierte la imagen a datos binarios
    const binaryImageData = this.convertWebcamImageToBinary(this.webcamImage);


    this.serviceActivity.postTagsAzureComputerVision(binaryImageData).subscribe(data => {
      this.resultado = data.tagsResult;
    })

  }

  // Función para convertir WebcamImage a datos binarios
  private convertWebcamImageToBinary(webcamImage: WebcamImage): ArrayBuffer {

    const base64String = webcamImage.imageAsDataUrl.split(',')[1];
    const binaryString = window.atob(base64String);
    const binaryData = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
      binaryData[i] = binaryString.charCodeAt(i);
    }

    return binaryData.buffer;
  }

}
