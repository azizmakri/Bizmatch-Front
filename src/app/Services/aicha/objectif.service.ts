import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObjectifCommercial } from 'src/app/Model/ObjectifCommercial';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
url = 'http://localhost:8083/DevBusiness/objectif';
OBJECTIFSCOMMERCIALS: any[] = [];
etat= null // Initialisé à null pour le moment
 private _refresh$=new Subject<void>()

 get refresh$(){
   return this._refresh$;
 }
  constructor(private http: HttpClient) { }
  
  getObjectifCommercial(id:number):Observable<ObjectifCommercial>{
    return this.http.get<ObjectifCommercial>(this.url+"/"+id,this.httpOptions);
    console.log("get ObjectifCommercial");
  }
  public GetAllObjectifCommercial(): Observable<ObjectifCommercial[]> {
    return this.http.get<ObjectifCommercial[]>(this.url+"/",this.httpOptions);
   
  }
  addObjectifCommercial (objectif: ObjectifCommercial): Observable<ObjectifCommercial> {
    return this.http.post<ObjectifCommercial>(this.url+"/add", objectif,
    this.httpOptions);
    console.log("objectif ajoutee");
  }
  deleteObjectifCommercial (objectif: ObjectifCommercial | number):
Observable<ObjectifCommercial> { const id = typeof objectif === 'number'
? objectif : objectif.id; 

const url = `${this.url}/delete/${id}`;
  return this.http.delete<ObjectifCommercial>(url, this.httpOptions);
}

getObjectifCommercialById(id: number): Observable<ObjectifCommercial> {
  return this.http.get<ObjectifCommercial>(this.url +'/'+ id); }
 
updateObjectifCommercial (id: number, objectif: ObjectifCommercial): Observable<ObjectifCommercial> {
    return this.http.put<ObjectifCommercial>(this.url+'/update'+ id, objectif,
    this.httpOptions);
    }
    
    updateStatusBasedOnDate(objectif: ObjectifCommercial) {
      let currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // pour n'avoir que la date sans l'heure
  
      let dateFin = new Date(objectif.dateFin);
      dateFin.setHours(0, 0, 0, 0); // pour n'avoir que la date sans l'heure
  
      if (dateFin < currentDate) {
          objectif.etat = 'ATTEINT';
      } else if (dateFin > currentDate) {
          objectif.etat = 'NON_ATTEINT';
      } else if (dateFin.getTime() === currentDate.getTime())
        {
          objectif.etat = 'EN_COURS';
      }
  }
  
}
