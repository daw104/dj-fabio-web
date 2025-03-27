import {AfterViewInit, Component} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {ActivatedRoute} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [
    ButtonDirective
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {


  constructor(private route: ActivatedRoute,
              private viewportScroller: ViewportScroller,
              private router: Router) {
  }


  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Usar ViewportScroller para hacer scroll
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 10); // Pequeño retraso para asegurar que la vista esté lista
      }
    });
  }

}
