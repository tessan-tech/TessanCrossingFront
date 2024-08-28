import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Adjust the path if needed

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Define the /login route
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Optional: Redirect root to /login
  { path: '**', redirectTo: '/login' },  // Optional: Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }