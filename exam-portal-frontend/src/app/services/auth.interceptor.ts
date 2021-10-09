import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService: LoginService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let authReq = req;

        let token = this.loginService.getToken();

        console.log("inside interceptor");

        if(token != null){
            console.log("inside interceptor: token is not null");
            authReq = authReq.clone({setHeaders:{"Authorization":`Bearer ${token}`}});
            
        }

        return next.handle(authReq);
    }
    
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]