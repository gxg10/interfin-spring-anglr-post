import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material.module";


@NgModule({
    declarations: [HeaderComponent],
    imports: [AppRoutingModule, MaterialModule],
    exports: [AppRoutingModule,HeaderComponent]
})
export class CoreModule {

}
