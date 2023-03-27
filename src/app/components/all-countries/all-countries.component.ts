import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

newCountry=''
 allCountries:any[]= [];
  constructor(private service:CountriesService) { }

  ngOnInit(): void {

    this.service.getAllCountries().subscribe((data:any[])=>{
       this.allCountries=data
      console.log(this.allCountries)
    })
  }

filterCountry(country: any){
   this.newCountry= country.target.value;

 this.allCountries.forEach(data=>{
  if(this.newCountry!=data.name.common){
    this.allCountries.shift()
  }
 })

}

}
