import { Component, NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
