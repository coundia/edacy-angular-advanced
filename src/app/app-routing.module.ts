import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PipesComponent} from "./pipes/pipes.component";
import {ValidatorTestComponent} from "./validator-test/validator-test.component";

const routes: Routes = [
  {path:'pipes' , component : PipesComponent},
  {path:'validators' , component : ValidatorTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
