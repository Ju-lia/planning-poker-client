import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PokerRoomModule } from '@planning-poker-client/poker-room';
import { WebSocketService } from '@planning-poker-client/square';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppComponent,
          loadChildren: () => PokerRoomModule
        }
      ],
      {
        initialNavigation: true
      }
    ),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionSerializability: true,
          strictStateSerializability: true,
          strictActionWithinNgZone: true
        }
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
