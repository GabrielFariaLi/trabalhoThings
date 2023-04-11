import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordVoiceComponent } from './record-voice/record-voice.component';

const routes: Routes = [
  {
    path: 'home',
    component: RecordVoiceComponent,
  },

  // otherwise redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
