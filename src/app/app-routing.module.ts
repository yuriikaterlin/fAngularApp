import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component'
import { AboutComponent } from './about/about.component'
import {HireMeComponent} from "./hire-me/hire-me.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about'},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'hire-me', component: HireMeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
