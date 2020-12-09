import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  cell: 'number'
  loans: 'number'
  food: 'number'
  pet: 'number'
  clothing: 'number'
  other: 'number'
  entertainment: 'number'
  constructor(private modelService: ModelService) { }

  ngOnInit() {
  }

  addPersonalBudget(){
    let cell = this.cell;
    let loans = this.loans;
    let food = this.food;
    let pet = this.pet;
    let clothing = this.clothing;
    let other = this.other;
    let entertainment = this.entertainment;
    

    let personalTotal =  cell + loans + food + pet + clothing + other + + entertainment;
    // console.log(mortgage, rent);
    console.log(personalTotal, "page");
    this.modelService.setPersonalBudget(personalTotal);
  }

}
