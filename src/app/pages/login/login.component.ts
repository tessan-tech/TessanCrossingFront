import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TessanCrossingApiService } from 'src/services/api/tessan-crossing-api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginFormGroup!: UntypedFormGroup;
  public emailControl: FormControl;
  public passwordControl: FormControl;
  public showPassword = false;
  public loading = false;

  constructor(
    private router: Router,
    private tessanCrossingApiService: TessanCrossingApiService,
    private fb: FormBuilder
  ) {
    this.emailControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);
    this.loginFormGroup = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });

    /*new UntypedFormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });*/
  }

  public login(form: UntypedFormGroup): void {
    this.loading = true;
    form.markAllAsTouched();
    if (form.invalid) {
      this.loading = false;
      return;
    }
    const { email, password } = form.value;
    let call = this.tessanCrossingApiService.login(email, password).subscribe({
      next: (res: any) => {
        console.log(res.doctorName);
        return this.router.navigate(['/lobby', { DoctorName: res.doctorName }]);
      },
      error: (err: any) => {
        err.Errorr;
        console.log('error: ' + JSON.stringify(err));
      },
    });
  }
}
