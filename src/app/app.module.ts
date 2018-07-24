import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { FeaturedServicesComponent } from './featured-services/featured-services.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CalltoactionComponent } from './calltoaction/calltoaction.component';
import { SkillsComponent } from './skills/skills.component';
import { FactsComponent } from './facts/facts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    BacktotopComponent,
    FeaturedServicesComponent,
    AboutComponent,
    ServicesComponent,
    CalltoactionComponent,
    SkillsComponent,
    FactsComponent,
    PortfolioComponent,
    ClientsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
