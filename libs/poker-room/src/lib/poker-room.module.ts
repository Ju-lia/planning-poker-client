import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WebSocketService } from '@planning-poker-client/poker-card';

import { PitchWidgetComponent } from './pitch-widget/pitch-widget.component';
import { PitchComponent } from './pitch/pitch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PitchWidgetComponent }
    ])
  ],
  providers: [WebSocketService],
  declarations: [PitchComponent, PitchWidgetComponent]
})
export class PokerRoomModule {}
