import {NgModel} from "@angular/forms";
import {CursosComponent} from "./cursos.component";
import {CursosService} from "./cursos.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

// @ts-ignore
@NgModel({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent
],
  providers: [
    CursosService
  ],
})
export class CursosModule {
}
