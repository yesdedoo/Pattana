//Component
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicImageViewerModule } from 'ionic-img-viewer';

//Registration Page
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
//Shop Page

//Me Page


//API
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { TestapiProvider } from '../pages/providers/testapi/testapi';


@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:true,
    }),
    IonicImageViewerModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    TestapiProvider,
    
  ]
})
export class AppModule {}
