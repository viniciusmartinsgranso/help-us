import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HalfCircleSpinnerModule } from 'angular-epic-spinners';
import { FeedOccurrenceModule } from '../../../components/feed-occurrence/feed-occurrence.module';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    HalfCircleSpinnerModule,
    FeedOccurrenceModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
