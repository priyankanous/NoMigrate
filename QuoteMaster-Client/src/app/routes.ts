import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ItemsComponent } from './items/items.component';
import { PricingComponent } from './pricing/pricing.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'proposals', component: ProposalsComponent},
            {path: 'items', component: ItemsComponent},
            {path: 'pricing', component: PricingComponent},
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
