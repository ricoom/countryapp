import { Component, Input, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  
 allCountries:any[]= [];
  constructor(private service:CountriesService) { }

  ngOnInit(): void {

    this.service.getAllCountries().subscribe((data:any[])=>{
       data.forEach(d=>{this.allCountries.push(d.name,d.flags,d,d.currencies)})
      console.log(this.allCountries)
    })
  }

}
