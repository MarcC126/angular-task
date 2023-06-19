import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageCustomizedComponent } from './card/components/image-customized/image-customized.component';
import { TextCostomizedComponent } from './card/components/text-costomized/text-costomized.component';
import { ButtonComponent } from './card/components/button/button.component';
import { HeadingComponent } from './card/components/heading/heading.component';
import { HomeComponent } from './card/pages/home/home.component';
import { CardComponent } from './card/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ImageCustomizedComponent,
    TextCostomizedComponent,
    ButtonComponent,
    HeadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
