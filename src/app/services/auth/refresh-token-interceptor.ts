// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, mergeMap } from 'rxjs/operators';
// import { AuthorizationService } from './authorization.service';
// import { JwtInterceptor } from '@auth0/angular-jwt';

// @Injectable()
// export class RefreshTokenInterceptor implements HttpInterceptor {
//   constructor(private authorizationService: AuthorizationService, private jwtInterceptor: JwtInterceptor) {
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('RefreshTokenInterceptor')
//     if (this.jwtInterceptor.isWhitelistedDomain(req) && !this.jwtInterceptor.isBlacklistedRoute(req)) {
//       return next.handle(req).pipe(
//         catchError((err) => {
//           const errorResponse = err as HttpErrorResponse;
//           console.log(errorResponse)
//           //TODO Serkan:  && errorResponse.error.message === 'Expired JWT Token'
//           if (errorResponse.status === 401) {
//             return this.authorizationService.refresh().pipe(mergeMap(() => {
//               return this.jwtInterceptor.intercept(req, next);
//             }));
//           }
//           return throwError(err);
//         }));
//     } else {
//       return next.handle(req);
//     }
//   }
// }
