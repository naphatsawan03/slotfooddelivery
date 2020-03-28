import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeliveryProvider } from '../providers/delivery/delivery';
import { HttpClientModule } from '@angular/common/http';
import { FastfoodPage } from '../pages/fastfood/fastfood';
import { SidedishProvider } from '../providers/sidedish/sidedish';
import { DishPage } from '../pages/dish/dish';
import { PotationProvider } from '../providers/potation/potation';
import { DrinkPage } from '../pages/drink/drink';
import { FastfooddetailPage } from '../pages/fastfooddetail/fastfooddetail';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { DrinkdetailPage } from '../pages/drinkdetail/drinkdetail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FastfoodPage,
    DishPage,
    DrinkPage,
    FastfooddetailPage,
    DishdetailPage,
    DrinkdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FastfoodPage,
    DishPage,
    DrinkPage,
    FastfooddetailPage,
    DishdetailPage,
    DrinkdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeliveryProvider,
    SidedishProvider,
    PotationProvider
  ]
})
export class AppModule {}
