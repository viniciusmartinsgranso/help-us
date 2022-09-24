import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FeedOccurrenceComponent } from '../../../components/feed-occurrence/feed-occurrence.component';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
  ],
  declarations: [FeedPage, FeedOccurrenceComponent],
})
export class FeedPageModule {}
