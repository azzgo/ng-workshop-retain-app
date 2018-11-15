import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiClientInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    return next
      .handle(
        req.clone({
          // 测试用 leancloud 应用 key 请勿乱用
          headers: req.headers.set('X-LC-Id', 'rih7YXe2BreYebBVwgdOSpo7-gzGzoHsz')
            .set('X-LC-Key', 'av0n90OQ0RdGHj17iwcURFGr')
        }),
      )
  }
}
