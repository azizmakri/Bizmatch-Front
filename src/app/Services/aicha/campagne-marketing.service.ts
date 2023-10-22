import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CampagneMarketing } from '../../Model/CampagneMarketing';

@Injectable({
  providedIn: 'root'
})
export class CampagneMarketingService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
 url = 'http://localhost:8083/marketing/campagne';

 CAMPAGNESMARKETING: any[] = [];
 statut= null // Initialisé à null pour le moment
  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { 
    
  }

  getCampagneMarketing(id:number):Observable<CampagneMarketing>{
    return this.http.get<CampagneMarketing>(this.url+"/"+id,this.httpOptions);
    console.log("get CampagneMarketing");
  }
  public GetAllCampagneMarketing(): Observable<CampagneMarketing[]> {
    return this.http.get<CampagneMarketing[]>(this.url+"/getall",this.httpOptions);
  }
  addCampagneMarketing (campagne: CampagneMarketing): Observable<CampagneMarketing> {
    return this.http.post<CampagneMarketing>(this.url+"/add", campagne,
    this.httpOptions);
    console.log("campagne ajoutee");
  }
  deleteCampagneMarketing (campagne: CampagneMarketing | number):
Observable<CampagneMarketing> { const id = typeof campagne === 'number'
? campagne : campagne.id; 

const url = `${this.url}/delete/${id}`;
  return this.http.delete<CampagneMarketing>(url, this.httpOptions);
}

getCampagneMarketingById(id: number): Observable<CampagneMarketing> {
  return this.http.get<CampagneMarketing>(this.url +'/'+ id); }
 
updateCampagneMarketing (id: number, campagne: CampagneMarketing): Observable<CampagneMarketing> {
    return this.http.put<CampagneMarketing>(this.url+'/update'+ id, campagne,
    this.httpOptions);
    }
    
    updateStatusBasedOnDate(campagne: CampagneMarketing) {
      let currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // pour n'avoir que la date sans l'heure
  
      let dateFin = new Date(campagne.dateFin);
      dateFin.setHours(0, 0, 0, 0); // pour n'avoir que la date sans l'heure
  
      if (dateFin < currentDate) {
          campagne.statut = 'TERMINEE';
      } else if (dateFin > currentDate) {
          campagne.statut = 'PLANIFIEE';
      } else if (dateFin.getTime() === currentDate.getTime())
        {
          campagne.statut = 'EN_COURS';
      }
  }
  

}