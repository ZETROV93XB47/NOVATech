import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-slider-component',
  templateUrl: './home-slider-component.component.html',
  styleUrls: [
    './home-slider-component.component.scss',
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
export class HomeSliderComponentComponent implements OnInit {
//constructor() { }

homeSliderSubtitle!: string;
homeSliderTitle!: string;
imageUrl!: string;

  ngOnInit() {
    this.homeSliderTitle ="A new Online Shop experience.";
    this.homeSliderSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.";
    this.imageUrl = "../../../assets/images/home_slider_1.jpg";
  }


}
