import { HttpClient, HttpErrorResponse, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment  } from "src/environments/environment";
import { LoginResult } from "src/models/login/loginResult";

@Injectable({
    providedIn: "root",
})

export class TessanCrossingApiService  {
    constructor(private httpClient: HttpClient) { 
    }

    public login(mail: string, password: string): Observable<HttpEvent<LoginResult>> {
        return this.httpClient.post<HttpEvent<LoginResult>>(`${environment.apiUrl}/api/doctor/login`, { mail, password });
    }
}
