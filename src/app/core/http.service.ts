import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';

@Injectable()
export class HttpService {

  private baseUrl: string;
  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) {
    this.baseUrl = '';
  }



   /**
   * get请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public get(url: string, params: any): any {
    return this.http.get(url, {search: params})
      .toPromise()
      .then(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  /**
   * post请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public post(url: string, params: any) {
    return this.http.post(url, params)
      .toPromise()
      .then(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  /**
   * put 請求
   * @param url
   * @param params
   */
  public put(url: string, params: any) {
    return this.httpClient.put(url, params);
  }
  /**
   * delete 請求
   * @param url
   */
  public delete(url: string) {
    return this.httpClient.delete(url);
  }

  /**
   * 处理请求成功
   * @param res
   * @returns {{data: (string|null|((node:any)=>any)
 */
  private handleSuccess(res: Response) {
    let body = res['_body'];
    // console.log("接口返回的成功信息：" + body)
    if (body) { // 有数据返回
      return JSON.parse(body);
    } else { // 无数据返回
      return {
        data: res.json().data || {}, // 返回内容
        code: res.json().code || {}, // 返回code
        message: res.json().message || {}, // 返回信息
        statusText: res.statusText,
        status: res.status,
        success: true
      }
    }
  }

  /**
   * 处理请求错误
   * @param error
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  private handleError(error) {
    console.log(error);
    let msg = '请求失败';
    if (error.status == 400) {
      console.log('请求参数正确');
    }
    if (error.status == 404) {
      console.error('请检查路径是否正确');
    }
    if (error.status == 500) {
      console.error('请求的服务器错误');
    }
    console.log(error);
    return {success: false, msg: msg};
  }
/**
   * 统一发送请求
   * @param params
   * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
   */
  public request(params: any): any {
    // POST请求（参数、返回值类型都是任意类型）
    if (params['method'] == 'post' || params['method'] == 'POST') {
      return this.post(params['url'], params['data']);
    } else { // 其他请求
      return this.get(params['url'], params['data']);
    }
  }
}
