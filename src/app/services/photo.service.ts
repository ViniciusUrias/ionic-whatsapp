import { Injectable, NgZone } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public router: Router, private ngZone: NgZone) { }

  public async addNewToGallery() {
    try{

      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        allowEditing: true,
        source: CameraSource.Camera,
        quality: 100
      });
    }catch(err){
      this.ngZone.run(() => {
        this.router.navigateByUrl('home');

      });
    }
  }


}
