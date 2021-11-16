import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public photoService: PhotoService, public router: Router) { }

  ngOnInit() {
    this.photoService.addNewToGallery();


  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy() {
    return this.router.navigate(['home'], {replaceUrl:true});
  }


  addPhotoToGallery() {
  }
}
