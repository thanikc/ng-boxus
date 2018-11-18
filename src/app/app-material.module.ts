import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material';

const imports = [
  MatButtonModule
];

@NgModule({
  imports,
  exports: imports,
})
export class AppMaterialModule { }