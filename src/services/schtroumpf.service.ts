import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { serverUrl, httpOptionsBase} from "../configs/servir.config";
import {SchtroumpfModel} from "../models/schtroumpf.model";
import {SCHTROUMPF_LIST} from "../app/mocks/schtroumpf.mock";

@Injectable({
  providedIn: 'root'
})
export class SchtroumpfService {

  public singleSchtroumpfSubject$: Subject<SchtroumpfModel> = new Subject<SchtroumpfModel>;

  public schtroumpfsSelected$: Subject<SchtroumpfModel> = new Subject();

  private schtroumpfs: SchtroumpfModel[] = SCHTROUMPF_LIST;

  private schtroumpfUrl = serverUrl + '/schtroumpfs';

  private httpOptions = httpOptionsBase;

  public schtroumpfs$: BehaviorSubject<SchtroumpfModel[]> = new BehaviorSubject(this.schtroumpfs);


  constructor(private http: HttpClient) {
    this.getSchtroumpfFromUrl();
  }

  emitSchtroumpf() {
    this.schtroumpfs$.next(this.schtroumpfs);
  }

  emitSingleSchtroumph(stroumph: SchtroumpfModel) {
    this.singleSchtroumpfSubject$.next(stroumph);
  }

  getAllSchtroumpfs(){
    return this.schtroumpfs;
  }

  getSchtroumpfFromUrl(){
    this.http.get<SchtroumpfModel[]>(this.schtroumpfUrl).subscribe((schtroumpfList) => {
      this.schtroumpfs = schtroumpfList;
      this.emitSchtroumpf();
    })
  }

  getSchtroumpfById(schtroumpfModel: SchtroumpfModel) {
    const url = this.schtroumpfUrl + '/' + schtroumpfModel.id;
    return this.http.get<SchtroumpfModel>(url);
  }

  setSchtroumpfSelected(schtroumpfId: string) {
    const urlWithId = this.schtroumpfUrl + '/' + ':' + schtroumpfId;
    this.http.get<SchtroumpfModel>(urlWithId).subscribe((schtroumpf) => {
      this.schtroumpfsSelected$.next(schtroumpf);
    });
  }


  addSchtroumpfServer(schtroumpf:SchtroumpfModel) {
    this.http.post<SchtroumpfModel>(this.schtroumpfUrl, schtroumpf, this.httpOptions).subscribe(() => this.getSchtroumpfFromUrl());
    this.getSchtroumpfFromUrl();
    this.emitSingleSchtroumph(schtroumpf);
    //this.updateSchtroumpfs(schtroumpf.id);
  }

  addSchtroumpf(schtroumpf: SchtroumpfModel) {
    this.schtroumpfs.push(schtroumpf);
    this.emitSchtroumpf();
  }

  public updateSchtroumpfs(schtroumpfId: string) {
    const urlWithId = this.schtroumpfUrl + '/' + schtroumpfId;
    this.http.get<SchtroumpfModel>(urlWithId).subscribe(() => this.getSchtroumpfFromUrl());
  }

  deleteSchtroumpf(schtroumpf: SchtroumpfModel) {
    const urlWithId = this.schtroumpfUrl + '/' + schtroumpf.id;
    this.http.delete<SchtroumpfModel>(urlWithId, this.httpOptions).subscribe(() =>
      this.getSchtroumpfFromUrl());
  }


}
