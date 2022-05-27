import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./Pages/log-in/log-in.component"
import { HomeComponent } from "./Pages/home/home.component"
import { ContactUsComponent } from "./Pages/contact-us/contact-us.component"
import { ProveedoresComponent } from './proveedores/proveedores.component'

const routes: Routes = [
    { path:'**', redirectTo:'LogIn', pathMatch:'full' },
    { path: 'LogIn', component: LogInComponent},
    { path: 'Home', component: HomeComponent},
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'ContacUs', component: ContactUsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }