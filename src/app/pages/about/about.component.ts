import {Component} from '@angular/core';
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-about',
  imports: [
    ButtonDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
