import { NgModule } from "@angular/core";
import { StiriComponent } from "./stiri.component";
import { StiriItemComponent } from "./stiri-item/stiri-item.component";
import { StiriContinutComponent } from "./stiri-continut/stiri-continut.component";
import { CommonModule } from "@angular/common";
import { StiriRoutingModule } from "./stiri-routing.module";
import { CoreModule } from "../header/core.module";



@NgModule({
    declarations: [
        StiriComponent,
        StiriItemComponent,
        StiriContinutComponent
    ],
    imports: [
        CommonModule,
        StiriRoutingModule,
        CoreModule
    ]
})
export class StiriModule {

}
