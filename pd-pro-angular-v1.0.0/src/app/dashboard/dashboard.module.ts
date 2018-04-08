import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule
    ],
    declarations: [OverviewComponent, StatsComponent]
})

export class DashboardModule {}
