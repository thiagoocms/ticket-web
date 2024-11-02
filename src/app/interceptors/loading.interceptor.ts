import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  count = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.count === 0) {
      this.loadingService.show();
    }
    this.count++

    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(()=> {
          this.count--
          if(this.count === 0) {
            this.loadingService.hide()
          }
        }, 500)
      })
    );
  }
}