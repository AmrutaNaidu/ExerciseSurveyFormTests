import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-form-test',
  templateUrl: './survey-form-test.component.html',
  styleUrls: ['./survey-form-test.component.css']
})
export class SurveyFormTestComponent implements OnInit {
  constructor() { }

  localStorageData: any = []
  selectedForm = [];
  submitted = false;
  selectedState;
  masterList = [];
  name = ""
  email = ""
  age = ""
  date = ""
  icecream = ""
  newFlavor = ""
  meal = ""
  coffeeCount = ""
  music = ""
  movie = ""
  states = [
    {name: "New Jersey", abb: "NJ"},
    {name: "New York", abb: "NY"}, 
    {name: "Delaware", abb: "DE"}, 
    {name: "Penslyvania", abb: "PA"} 
  ];

  ngOnInit(): void {
    this.localStorageData = JSON.parse(localStorage.getItem("userdata"))
    if(this.localStorageData != null) {
      this.masterList = JSON.parse(localStorage.getItem("userdata"))
    }
  }  

  submitForm() {
    this.submitted = true;
    let requestData = {
      name: this.name,
      email: this.email,
      age: this.age,
      selectedState: this.selectedState,
      date: this.date,
      icecream: this.icecream, 
      meal: this.meal,
      coffeeCount: this.coffeeCount,
      music: this.music, 
      movie: this.movie,   
      submitted: this.submitted   
    }  

    this.masterList.push(requestData);
    this.saveForm();
    //return true;
  } 
  saveForm() { 
    if(this.submitted == true) {
      localStorage.setItem("userdata", JSON.stringify(this.masterList))
    }
  }

}
