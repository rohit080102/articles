import { ArticleListComponent } from './articles/article-list/article-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { AboutUsComponent } from './staticpages/about-us/about-us.component';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PagenotfoundComponent }
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "article", component: ArticleListComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
