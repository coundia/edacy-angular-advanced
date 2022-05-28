import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PipesComponent} from "./pipes/pipes.component";
import {ValidatorsComponent} from "./validators/validators.component";

const routes: Routes = [
  {path:'pipes' , component : PipesComponent},
  {path:'validators' , component : ValidatorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
