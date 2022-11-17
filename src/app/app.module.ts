import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSliderComponentComponent } from './components/home-slider-component/home-slider-component.component';
import { HomeCarouselComponentComponent } from './components/home-carousel-component/home-carousel-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomeLatestComponentComponent } from './components/home-latest-component/home-latest-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { ProductCardComponentComponent } from './components/product-card-component/product-card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSliderComponentComponent,
    HomeCarouselComponentComponent,
    HeaderComponent,
    HomeLatestComponentComponent,
    ProductsComponentComponent,
    ProductCardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
