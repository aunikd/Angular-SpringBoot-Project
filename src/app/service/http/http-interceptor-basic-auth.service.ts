import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ApplicationConfig, importProvidersFrom } from '@angular/core';

// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

// import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService:BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

 
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })
  }
      console.log(request)
    return next.handle(request);
  }
}
