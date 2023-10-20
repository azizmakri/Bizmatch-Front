import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './FrontOffice/public/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { ProfileComponent } from './FrontOffice/profile/profile.component';
import { FavouritesComponent } from './FrontOffice/favourites/favourites.component';
import { ChatComponent } from './FrontOffice/chat/chat.component';
import { FriendsComponent } from './FrontOffice/friends/friends.component';
import { StoreComponent } from './FrontOffice/store/store.component';
import { UsergroupComponent } from './FrontOffice/usergroup/usergroup.component';
import { StreamsComponent } from './FrontOffice/GestionEvenementConference/streams/streams.component';
import { CommunityComponent } from './FrontOffice/community/community.component';
import { AuthServiceService } from './Services/User/auth/auth-service.service';
import { CheckmailComponent } from './FrontOffice/checkmail/checkmail.component';
import { ResetpasswordComponent } from './FrontOffice/resetpassword/resetpassword.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { IndexComponent } from './BackOffice/index/index.component';
import { UserProfileComponent } from './BackOffice/user-profile/user-profile.component';
import { ClaimsComponent } from './BackOffice/claims/claims.component';
import { UsersComponent } from './BackOffice/users/users.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './FrontOffice/public/footer/footer.component';
import { MarketComponent } from './FrontOffice/market/market.component';
import { SidebarComponent } from './BackOffice/public/sidebar/sidebar.component';
import { TopHeaderComponent } from './BackOffice/public/top-header/top-header.component';
import { ToDoComponent } from './BackOffice/to-do/to-do.component';
import { CalendarComponent } from './BackOffice/calendar/calendar.component';
import { EditProfileComponent } from './FrontOffice/edit-profile/edit-profile.component';
import { SidebarfrontComponent } from './FrontOffice/public/sidebarfront/sidebarfront.component';
import { WalletComponent } from './FrontOffice/wallet/wallet.component';
import { ModalsComponent } from './FrontOffice/public/modals/modals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancelComponent } from './FrontOffice/cancel/cancel.component';
import { SucessComponent } from './FrontOffice/sucess/sucess.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutComponent } from './FrontOffice/checkout/checkout.component';
import { ListPaymentByUserComponent } from './FrontOffice/list-payment-by-user/list-payment-by-user.component';
import { FormulaireCrmComponent } from './FrontOffice/formulaire-crm/formulaire-crm.component';
import { AjouterEventComponent } from './BackOffice/gestionEvenementConference/ajouter-event/ajouter-event.component';
import { ListEvenementsComponent } from './BackOffice/gestionEvenementConference/list-evenements/list-evenements.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ModifierEvenementComponent } from './BackOffice/gestionEvenementConference/modifier-event/modifier-event.component';
import { ListFavorisComponent } from './FrontOffice/gestionEvenementConference/list-favoris/list-favoris.component';
import { DetailEvenementComponent } from './FrontOffice/gestionEvenementConference/detail-evenement/detail-evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomepagefrontComponent,
    ProfileComponent,
    FavouritesComponent,
    ChatComponent,
    FriendsComponent,
    StoreComponent,
    UsergroupComponent,
    StreamsComponent,
    CommunityComponent,
    CheckmailComponent,
    ResetpasswordComponent,
    IndexComponent,
    UserProfileComponent,
    ClaimsComponent,
    UsersComponent,
    FooterComponent,
    MarketComponent,


    SidebarComponent,
        TopHeaderComponent,
        ToDoComponent,
        CalendarComponent,
        EditProfileComponent,
        SidebarfrontComponent,
        WalletComponent,
        ModalsComponent,
        CancelComponent,
        SucessComponent,
        CheckoutComponent,
        ListPaymentByUserComponent,
        FormulaireCrmComponent,
        AjouterEventComponent,
        ListEvenementsComponent,
        ModifierEvenementComponent,
        ListFavorisComponent,
        DetailEvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    IonicModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
