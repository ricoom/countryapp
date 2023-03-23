import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

 url=`https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies`

  constructor(private http:HttpClient) { }

  getAllCountries():Observable<any[]>{
    
return this.http.get<any[]>(this.url);
 }
}
