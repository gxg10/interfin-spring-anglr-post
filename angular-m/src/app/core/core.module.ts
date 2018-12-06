import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {}
