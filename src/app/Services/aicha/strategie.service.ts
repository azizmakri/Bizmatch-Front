import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StrategieMarketing } from 'src/app/Model/StrategieMarketing';

@Injectable({
  providedIn: 'root'
})
export class StrategieService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  url = 'http://localhost:8083/DevBusiness/strategie';
  
 STRATEGIES: any[] = [];
 private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }
  getStrategie(id:number):Observable<StrategieMarketing>{
    return this.http.get<StrategieMarketing>(this.url+"/"+id,this.httpOptions);
    console.log("get strategie");
  }
  public GetAllStrategieMarketing(): Observable<StrategieMarketing[]> {
    return this.http.get<StrategieMarketing[]>(this.url+"/",this.httpOptions);
  }
  addStrategieMarketing (strategie: StrategieMarketing): Observable<StrategieMarketing> {
    return this.http.post<StrategieMarketing>(this.url+"/addavecImage", StrategieMarketing,
    this.httpOptions);
    console.log("StrategieMarketing ajoutee");
  }
  deleteStrategieMarketing (strategie: StrategieMarketing | number):
Observable<StrategieMarketing> { const id = typeof strategie === 'number'
? strategie : strategie.id; 

const url = `${this.url}/delete/${id}`;
  return this.http.delete<StrategieMarketing>(url, this.httpOptions);
}

getStrategieMarketingById(id: number): Observable<StrategieMarketing> {
  return this.http.get<StrategieMarketing>(this.url +'/'+ id); }
 
updateStrategieMarketing (id: number, strategie: StrategieMarketing): Observable<StrategieMarketing> {
    return this.http.put<StrategieMarketing>(this.url+'/update'+ id, strategie,
    this.httpOptions);
    }

}
