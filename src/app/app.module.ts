import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';

import { ContactService } from './services/contact.service';
import { UserService } from './services/user.service';
import { BitcoinService } from './services/bitcoin.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsComponent,
    StatisticPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactEditComponent,
    AppHeaderComponent,
    SignupPageComponent,
    ContactDetailsComponent,
    MovesListComponent,
    TransferFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    FontAwesomeModule
  ],
  providers: [ContactService, UserService, BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
