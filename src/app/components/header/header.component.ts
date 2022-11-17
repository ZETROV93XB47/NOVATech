import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    '../../../styles/bootstrap4/bootstrap.min.css',
    '../../../plugins/font-awesome-4.7.0/css/font-awesome.min.css',
    '../../../plugins/OwlCarousel2-2.2.1/owl.carousel.css',
    '../../../plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
    '../../../plugins/OwlCarousel2-2.2.1/animate.css',
    '../../../plugins/OwlCarousel2-2.2.1/animate.css',
    '../../../styles/main_styles.css',
    '../../../styles/responsive.css'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
