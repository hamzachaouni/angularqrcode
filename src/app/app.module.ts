import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';
import { FormurlwebsiteComponent } from './typesqrcode/formurlwebsite/formurlwebsite.component';
import { FormgooglemapsComponent } from './typesqrcode/formgooglemaps/formgooglemaps.component';
import { FormpdfComponent } from './typesqrcode/formpdf/formpdf.component';
import { FormImageComponent } from './typesqrcode/form-image/form-image.component';
import { FormSocialMediaLinkComponent } from './typesqrcode/form-social-media-link/form-social-media-link.component';
import { FormVcardProfileComponent } from './typesqrcode/form-vcard-profile/form-vcard-profile.component';
import { FormFormattedTextComponent } from './typesqrcode/form-formatted-text/form-formatted-text.component';
import { FormAppStoreLinkComponent } from './typesqrcode/form-app-store-link/form-app-store-link.component';
import { FormAudioComponent } from './typesqrcode/form-audio/form-audio.component';
import { FormFacebookComponent } from './typesqrcode/form-facebook/form-facebook.component';
import { FormLinkedInComponent } from './typesqrcode/form-linked-in/form-linked-in.component';
import { FormYoutubeComponent } from './typesqrcode/form-youtube/form-youtube.component';
import { FormTwitterComponent } from './typesqrcode/form-twitter/form-twitter.component';
import { FormCouponComponent } from './typesqrcode/form-coupon/form-coupon.component';
import { FormSmsComponent } from './typesqrcode/form-sms/form-sms.component';
import { FormPhoneNumberComponent } from './typesqrcode/form-phone-number/form-phone-number.component';
import { FormEmailAdressComponent } from './typesqrcode/form-email-adress/form-email-adress.component';
import { FormCalendarComponent } from './typesqrcode/form-calendar/form-calendar.component';
import { FormSimpleVcardComponent } from './typesqrcode/form-simple-vcard/form-simple-vcard.component';
import { FormWifiComponent } from './typesqrcode/form-wifi/form-wifi.component';
import { FormSimpleTextComponent } from './typesqrcode/form-simple-text/form-simple-text.component';
import { FormPaypalComponent } from './typesqrcode/form-paypal/form-paypal.component';
import { FormBitcoinComponent } from './typesqrcode/form-bitcoin/form-bitcoin.component';
import { environment } from '../environments/environment';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { DataService } from './services/data.service';
import { TqrcodeService } from './services/tqrcode.service';
import { HttpModule } from '@angular/http';
import { AllComponent } from './components/visitorComponents/typesQrcode/all/all.component';
import { RecommendedComponent } from './components/visitorComponents/typesQrcode/recommended/recommended.component';
import { PromotionsComponent } from './components/visitorComponents/typesQrcode/promotions/promotions.component';
import { SocialComponent } from './components/visitorComponents/typesQrcode/social/social.component';
import { ProductServiceComponent } from './components/visitorComponents/typesQrcode/product-service/product-service.component';
import { BusinessComponent } from './components/visitorComponents/typesQrcode/business/business.component';
import { PersonalComponent } from './components/visitorComponents/typesQrcode/personal/personal.component';
import { AdminHomeComponent } from './components/adminComponents/admin-home/admin-home.component';
import { SettingQrcodeComponent } from './components/adminComponents/setting-qrcode/setting-qrcode.component';
import { SettingQrcodeService } from './services/adminServices/setting-qrcode.service';
import { ShowQrcodeComponent } from './components/visitorComponents/show-qrcode/show-qrcode.component';
import { ShowQrcodeService } from './services/visitorServices/show-qrcode.service';
import { CreateQrcodeService } from './services/visitorServices/create-qrcode.service';
import { CreateQrcodeComponent } from './components/visitorComponents/create-qrcode/create-qrcode.component';
import { HomeComponent } from './components/visitorComponents/home/home.component';
import { BlogComponent } from './components/visitorComponents/blog/blog.component';
import { LoginComponent } from './components/visitorComponents/login/login.component';
import { RegisterComponent } from './components/visitorComponents/register/register.component';
import { WhyqrcodesComponent } from './components/visitorComponents/whyqrcodes/whyqrcodes.component';
import { FeaturesComponent } from './components/visitorComponents/features/features.component';
import { SupportComponent } from './components/visitorComponents/support/support.component';
import { DowloadsComponent } from './components/userComponents/dowloads/dowloads.component';
import { FooterComponent } from './components-no-routes/footer/footer.component';
import { NavbarComponent } from './components-no-routes/navbar/navbar.component';
import { MessageComponent } from './components-no-routes/message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    WhyqrcodesComponent,
    FeaturesComponent,
    SupportComponent,
    FooterComponent,
    FormurlwebsiteComponent,
    FormgooglemapsComponent,
    FormpdfComponent,
    FormImageComponent,
    FormSocialMediaLinkComponent,
    FormVcardProfileComponent,
    FormFormattedTextComponent,
    FormAppStoreLinkComponent,
    FormAudioComponent,
    FormFacebookComponent,
    FormLinkedInComponent,
    FormYoutubeComponent,
    FormTwitterComponent,
    FormCouponComponent,
    FormSmsComponent,
    FormPhoneNumberComponent,
    FormEmailAdressComponent,
    FormCalendarComponent,
    FormSimpleVcardComponent,
    FormWifiComponent,
    FormSimpleTextComponent,
    FormPaypalComponent,
    FormBitcoinComponent,
    DowloadsComponent,
    NavbarComponent,
    MessageComponent,
    AllComponent,
    RecommendedComponent,
    PromotionsComponent,
    SocialComponent,
    ProductServiceComponent,
    BusinessComponent,
    PersonalComponent,
    AdminHomeComponent,
    SettingQrcodeComponent,
    ShowQrcodeComponent,
    CreateQrcodeComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    HttpModule,

  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService, DataService, TqrcodeService, SettingQrcodeService, ShowQrcodeService, CreateQrcodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
