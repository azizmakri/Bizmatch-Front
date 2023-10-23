import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HeaderComponent } from './FrontOffice/public/header/header.component';          
import { LoginComponent } from './FrontOffice/login/login.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { ProfileComponent } from './FrontOffice/profile/profile.component';
import { FavouritesComponent } from './FrontOffice/favourites/favourites.component';
import { UsergroupComponent } from './FrontOffice/usergroup/usergroup.component';
import { StoreComponent } from './FrontOffice/store/store.component';
import { FriendsComponent } from './FrontOffice/friends/friends.component';
import { ChatComponent } from './FrontOffice/chat/chat.component';
import { StreamsComponent } from './FrontOffice/gestionEvenementConference/streams/streams.component';
import { CommunityComponent } from './FrontOffice/community/community.component';
import { CheckmailComponent } from './FrontOffice/checkmail/checkmail.component';
import { ResetpasswordComponent } from './FrontOffice/resetpassword/resetpassword.component';
import { UsersComponent } from './BackOffice/users/users.component';
import { UserProfileComponent } from './BackOffice/user-profile/user-profile.component';
import { IndexComponent } from './BackOffice/index/index.component';
import { ClaimsComponent } from './BackOffice/claims/claims.component';
import { ToDoComponent } from './BackOffice/to-do/to-do.component';
import { CalendarComponent } from './BackOffice/calendar/calendar.component';
import { WalletComponent } from './FrontOffice/wallet/wallet.component';
import { MarketComponent } from './FrontOffice/market/market.component';
import { EditProfileComponent } from './FrontOffice/edit-profile/edit-profile.component';
import { CheckoutComponent } from './FrontOffice/checkout/checkout.component';
import { CancelComponent } from './FrontOffice/cancel/cancel.component';
import { SucessComponent } from './FrontOffice/sucess/sucess.component';
import { ListPaymentByUserComponent } from './FrontOffice/list-payment-by-user/list-payment-by-user.component';
import { AdminGuard } from './Services/admin.guard';
import { FormulaireCrmComponent } from './FrontOffice/formulaire-crm/formulaire-crm.component';
import { LisetServiceComponent } from './FrontOffice/pato/liset-service/liset-service.component';
import { DetailServiceComponent } from './FrontOffice/pato/detail-service/detail-service.component';
import { AddServiceComponent } from './FrontOffice/pato/add-service/add-service.component';
import { ListofPaymentComponent } from './BackOffice/listof-payment/listof-payment.component';
import { ListEvenementsComponent } from './BackOffice/gestionEvenementConference/list-evenements/list-evenements.component';
import { AjouterEventComponent } from './BackOffice/gestionEvenementConference/ajouter-event/ajouter-event.component';
import { ModifierEventComponent } from './BackOffice/gestionEvenementConference/modifier-event/modifier-event.component';
import { ListFavorisComponent } from './FrontOffice/gestionEvenementConference/list-favoris/list-favoris.component';
import { DetailEvenementComponent } from './FrontOffice/gestionEvenementConference/detail-evenement/detail-evenement.component';
import { CampagneComponent } from './FrontOffice/aicha/campagne/campagne.component';
import { ContenuComponent } from './FrontOffice/aicha/contenu/contenu.component';
import { ContenuDetailsComponent } from './FrontOffice/aicha/contenu-details/contenu-details.component';
import { ContenuAddComponent } from './FrontOffice/aicha/contenu-add/contenu-add.component';
import { ObjectifdetailsComponent } from './FrontOffice/aicha/objectifdetails/objectifdetails.component';
import { ListRoomsComponent } from './FrontOffice/pato/list-rooms/list-rooms.component';
import { ListCommentsComponent } from './FrontOffice/pato/list-comments/list-comments.component';
import { AddBesionComponent } from './FrontOffice/eya/add-besion/add-besion.component';
import { DatailsMarcheComponent } from './FrontOffice/eya/datails-marche/datails-marche.component';
import { DetailsBesionComponent } from './FrontOffice/eya/details-besion/details-besion.component';
const routes: Routes = [
  
        {
          path:'about',
          component:HeaderComponent
        },
        {
          path:'profile',
          component:ProfileComponent
        },
        {
          path:'streams',
          component:StreamsComponent
        }
        ,
        {
          path:'check',
          component:CheckmailComponent
        },
        {
          path:'resetpassword',
          component:ResetpasswordComponent
        },
        
        {
          path:'favourite',
          component:FavouritesComponent
        },
        { 
          path: 'UserProfile/:userName', 
          component: UserProfileComponent 
        },
        {
          path:'chat',
          component:ChatComponent
        },
        {
          path:'friends',
          component:FriendsComponent
        },
        {
          path:'store',
          component:StoreComponent
        },
        {
          path:'usergroup',
          component:UsergroupComponent
        },
        {
          path:'home',
          component:HomepagefrontComponent
        },
        {
          path:'login',
          component:LoginComponent
        }  
        ,{
          path:'register',
          component:RegisterComponent
        }
        ,{
          path:'users',
          component:UsersComponent,
          canActivate: [AdminGuard],

        }
        ,{
          path:'UserProfile',
          component:UserProfileComponent
        }
        ,{
          path:'index',
          component:IndexComponent,
          canActivate: [AdminGuard],
        }
        ,{
          path:'Claims',
          component:ClaimsComponent
        }
        ,{
          path:'ToDo',
          component:ToDoComponent
        }
        ,{
          path:'calendar',
          component:CalendarComponent
        }
        ,{
          path:'editProfile',
          component:EditProfileComponent
        }
        ,{
          path:'wallet',
          component:WalletComponent
        }
        ,{
          path:'market',
          component:MarketComponent
        }
        ,
        {
          path: 'checkout',
          component: CheckoutComponent,
        },
        { path: 'cancel', component: CancelComponent },
        { path: 'success', component: SucessComponent },
        { path: 'listpaymentuser', component: ListPaymentByUserComponent },
        { path: 'crm', component: FormulaireCrmComponent },

        { path: 'listepayments', component: ListofPaymentComponent },

        {
          path:'listeservices',
          component:LisetServiceComponent
        }
        ,{
          path:'detailservices/:id',
          component:DetailServiceComponent
        }
        ,{
          path:'addservice',
          component:AddServiceComponent
        }
        ,
        {
          path:'listrooms',
          component:ListRoomsComponent
        }
        ,{path:'comments/:id',
        component:ListCommentsComponent
        } 
        ,
        {
          path:'comminity',
          component:CommunityComponent
        },
        {
          path:'addbesoin',
          component:AddBesionComponent
        },
        {
          path:'detailsmarche/:id',
          component:DatailsMarcheComponent
        },
        {
          path:'detailbesoin/:id',
          component:DetailsBesionComponent
        }
        ,
        
        /**routes GestionEvenement */
{ path: 'Evenements', component: ListEvenementsComponent },
{ path: 'AjouterEvent', component: AjouterEventComponent },
{
  path: 'ModifierEvenement/:id', // Utilisez le nom de chemin souhaité
  component: ModifierEventComponent,
 
},
 { path: 'ListFavoris', // Utilisez le nom de chemin souhaité
 component: ListFavorisComponent,
 },
 { path: 'DetailEvenement/:id', // Utilisez le nom de chemin souhaité
 component: DetailEvenementComponent,
 }
/**End  */

,{
  path:'campagneMarketing',
  component:CampagneComponent
} 
,{path:'contenu/:id',
 component:ContenuComponent
} ,

{path:'contenuDetails/:id',
 component:ContenuDetailsComponent
},{
path:'contenuAdd',
component:ContenuAddComponent
},
{path:'objectifDetails/:id',
component:ObjectifdetailsComponent
},



         {
        path: "",
        redirectTo: "/home",
          pathMatch: "full",
        }
   
  
  
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
