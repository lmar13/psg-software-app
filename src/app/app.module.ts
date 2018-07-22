import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent, ContactFormComponent, EmailFormatValidator } from './contact';
import { CamsComponent, SkiCamsComponent } from './ski-cams';
import { MatButtonModule, MatTabsModule, MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkiCamsComponent,
    ContactComponent,
    CamsComponent,
    ContactFormComponent,
    EmailFormatValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
