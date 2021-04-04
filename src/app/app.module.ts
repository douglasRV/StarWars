import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Services
import { APIService } from './services/api.service';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Modal
import { ModalDetalhesComponent } from './modal-detalhes/modal-detalhes.component';

// Components
import { PersonagensComponent } from './personagens/personagens.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    ModalDetalhesComponent
  ],
  entryComponents: [
    ModalDetalhesComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    NgbPaginationModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
