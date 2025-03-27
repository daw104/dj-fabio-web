import {Component} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {Image} from 'primeng/image';

@Component({
  selector: 'app-home',
  imports: [
    ButtonDirective,
    Image,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
