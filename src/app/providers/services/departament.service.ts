import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IResponse} from "../utils/response";
import {EntityDataService} from "../utils/entity-data.service";
import {END_POINTS} from "../utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class DepartamentService  extends EntityDataService<IResponse>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, END_POINTS.api+END_POINTS.admin.departament);
  }
}
