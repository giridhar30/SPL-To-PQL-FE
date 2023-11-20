import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { PresetAdderComponent } from './preset-adder/preset-adder.component';

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'preset', component: PresetAdderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
