import { ModelService } from '../services/model.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.page.html',
  styleUrls: ['./housing.page.scss'],
})
export class HousingPage implements OnInit {
  mortgage: 'number'
  rent: 'number'
  homeInsurance: 'number'
  homeRepair: 'number'
  hoa: 'number'
  utilites: 'number'
  constructor(private modelService: ModelService) { }

  ngOnInit() {
  }

  addHousingBudget(){
    let mortgage = this.mortgage;
    let rent = this.rent;
    let homeInsurance = this.homeInsurance;
    let homeRepair = this.homeRepair;
    let hoa = this.hoa;
    let utilites = this.utilites;

    let housingTotal = mortgage + rent + homeInsurance + homeRepair + hoa + utilites;
    // console.log(mortgage, rent);
    // console.log(housingTotal);
    this.modelService.setHousingTotal(housingTotal);
  }

}
