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
import { StreamsComponent } from './FrontOffice/streams/streams.component';
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
import { CampagneComponent } from './FrontOffice/aicha/campagne/campagne.component';
import { Contenu } from './Model/Contenu';
import { ContenuComponent } from './FrontOffice/aicha/contenu/contenu.component';
import { ContenuDetailsComponent } from './FrontOffice/aicha/contenu-details/contenu-details.component';
import { ContenuADDComponent } from './FrontOffice/aicha/contenu-add/contenu-add.component';
import { ObjectifdetailsComponent } from './FrontOffice/aicha/objectifdetails/objectifdetails.component';

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
          path:'comminity',
          component:CommunityComponent
        },
        {
          path:'favourite',
          component:FavouritesComponent
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
          component:UsersComponent
        }
        ,{
          path:'UserProfile',
          component:UserProfileComponent
        }
        ,{
          path:'index',
          component:IndexComponent
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
        component:ContenuADDComponent
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
