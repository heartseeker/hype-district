import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

// angularfire
import { MessagingService } from './messaging.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RootComponent } from './root/root.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedItemsComponent } from './featured-items/featured-items.component';
import { OtherItemsComponent } from './other-items/other-items.component';
import { RecommendedItemsComponent } from './recommended-items/recommended-items.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'products/1', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ShowcaseComponent,
    SidebarComponent,
    FeaturedItemsComponent,
    OtherItemsComponent,
    RecommendedItemsComponent,
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
