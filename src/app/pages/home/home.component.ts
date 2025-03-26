import {Component} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {Image} from 'primeng/image';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    ButtonDirective,
    Image,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
