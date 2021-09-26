import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeadingComponent } from './components/heading/heading.component';
// import { MathService } from './services/math.service';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        ProductsComponent,
        AboutComponent,
        PageNotFoundComponent,
        HeadingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [],
    // providers: [MathService], // צור אובייקט ממחלקת השירות הזו עבור כל הרכיבים ששייכים למודול
    bootstrap: [LayoutComponent]
})
export class AppModule { }
