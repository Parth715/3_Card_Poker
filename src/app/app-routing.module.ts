import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "/welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "play", component: PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
