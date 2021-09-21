import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.css'],
})
export class ImagegalleryComponent implements OnInit {
  allImages: any[] = [];

  constructor(private imageService: ImagesService) {
    this.allImages = imageService.getImages()

    console.log('Todas las imagenes retornadas por el service');
    console.dir(this.allImages);

    console.log('Imagen por id = 5');
    console.dir(imageService.getImageById(5));
  }

  ngOnInit(): void {}
}
