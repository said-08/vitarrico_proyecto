import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component"
import { LogInComponent } from "./Pages/log-in/log-in.component"
import { ContactUsComponent } from "./Pages/contact-us/contact-us.component"


const APP_ROUTES: Routes = [
    { path: 'LogIn', component: LogInComponent},
    { path: 'ContacUs', component: ContactUsComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'LogIn'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});