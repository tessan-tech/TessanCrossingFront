import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { TessanCrossingApiService } from "src/services/api/tessan-crossing-api-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})

export class LoginComponent implements OnInit {
  public loginFormGroup: UntypedFormGroup;
  public emailControl: FormControl;
  public passwordControl: FormControl;
  public showPassword = false;
  public loading = false;

  constructor(
    private router: Router,
    private tessanCrossingApiService: TessanCrossingApiService
  ) {
    this.emailControl = new FormControl(
      "",
      Validators.required,
    );
    this.passwordControl = new FormControl(
      "",
      Validators.required,
    );
    this.loginFormGroup = new UntypedFormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  async ngOnInit(): Promise<void> {

  }

  public login(form: UntypedFormGroup): void {
    this.loading = true;
    form.markAllAsTouched();
    if (form.invalid) {
      this.loading = false;
      return;
    }
    const { email, password } = form.value;
    let error = "";
    var call = this.tessanCrossingApiService
      .login(email, password);

    var result = lastValueFrom(call)
      .then((AuthResult) => {
        if (AuthResult)
        {
          console.log("LOGGED IN");
        }
        return this.router.navigate(["/pages/lobby"]);
      })
      .catch((e) => {
      })
      .finally(() => (this.loading = false));
  }

}
