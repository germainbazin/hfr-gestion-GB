import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Injectable()
export class HttpService {

  constructor(private _httpCLient: HttpClient) { }

}
