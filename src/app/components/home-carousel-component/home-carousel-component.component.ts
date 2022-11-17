import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppSettings } from 'src/constants/IndexImages';

@Component({
	selector: 'ngbd-carousel-navigation',
	templateUrl: './home-carousel-component.component.html',
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeCarouselComponentComponent {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	imageUrl = "../../../assets/images/home_slider_1.jpg";
	homeCaroucelImgae = AppSettings.HOME_CAROUCEL_1;
	//images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/1000/750`);
	images = [this.homeCaroucelImgae, this.homeCaroucelImgae, this.homeCaroucelImgae];
	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}

	

}