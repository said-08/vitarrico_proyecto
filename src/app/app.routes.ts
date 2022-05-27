import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component"
import { LogInComponent } from "./Pages/log-in/log-in.component"
import { ContactUsComponent } from "./Pages/contact-us/contact-us.component"
import { ProveedoresComponent } from './proveedores/proveedores.component'
import { ProductoComponent } from "./producto/producto.component"; 


const APP_ROUTES: Routes = [
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'productos', component: ProductoComponent},
    { path: 'Home', component: HomeComponent},
    { path: 'LogIn', component: LogInComponent},
    { path: 'ContacUs', component: ContactUsComponent},

    { path: '**', pathMatch: 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});