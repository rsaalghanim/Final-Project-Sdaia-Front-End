
import { Routes } from '@angular/router';
import {DoctorsComponent} from "./doctors/doctors.component";
import {AppComponent} from "./app.component";
import {PatientsComponent} from "./patients/patients.component";


export const routes: Routes = [{
    path:'',
    redirectTo:'login',
    pathMatch:'full'
},
    {

        path:'doctors',
        component:DoctorsComponent
    },

    {
        path:'',
        component:AppComponent,
        children:[{
            path:'patients',
            component:PatientsComponent
        }
        ]
    },

];
