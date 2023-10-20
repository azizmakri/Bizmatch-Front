import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contenu } from 'src/app/Model/Contenu';

@Injectable({
  providedIn: 'root'
})
export class ContenuService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:8083/marketing/contenu';

 CONTENUS: any[] = [];
 private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }
  getContenu(id:number):Observable<Contenu>{
    return this.http.get<Contenu>(this.url+"/"+id,this.httpOptions);
    console.log("get Contenu");
  }
  public GetAllContenu(): Observable<Contenu[]> {
    return this.http.get<Contenu[]>(this.url+"/",this.httpOptions);
  }
  addContenu(contenu: Contenu, imageFile: File): Observable<Contenu> {
   
    const formData: FormData = new FormData();

    formData.append('type', contenu.type);
    formData.append('titre', contenu.titre);
    formData.append('description', contenu.description);
    formData.append('lien', contenu.lien);
    formData.append('image', imageFile, imageFile.name);
    formData.append('dateCreation', contenu.dateCreation.toISOString());
    formData.append('idCampagne', String(contenu.campagneMarketingId));


    return this.http.post<Contenu>(`${this.url}/addavecImage`, formData);
}

 /* addContenu (contenu: Contenu): Observable<Contenu> {
    return this.http.post<Contenu>(this.url+"/addavecImage", contenu,
    this.httpOptions);
    console.log("contenu ajoutee");
  }*/
  deleteContenu (contenu: Contenu | number):
Observable<Contenu> { const id = typeof contenu === 'number'
? contenu : contenu.id; 

const url = `${this.url}/delete/${id}`;
  return this.http.delete<Contenu>(url, this.httpOptions);
}

getContenuById(id: number): Observable<Contenu> {
  return this.http.get<Contenu>(this.url +'/'+ id); }
 
updateContenu (id: number, contenu: Contenu): Observable<Contenu> {
    return this.http.put<Contenu>(this.url+'/update'+ id, contenu,
    this.httpOptions);
    }

}
