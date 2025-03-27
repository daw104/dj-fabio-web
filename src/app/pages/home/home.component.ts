import {Component} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {Image} from 'primeng/image';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    ButtonDirective,
    Image,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
