import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.page.html',
  styleUrls: ['./auto.page.scss'],
})
export class AutoPage implements OnInit {
  payment: 'number'
  fuel: 'number'
  autoInsurance: 'number'
  autoRepair: 'number'
  constructor(private modelService: ModelService) { }

  ngOnInit() {
  }

  addAutoBudget(){
    let payment = this.payment;
    let fuel = this.fuel;
    let autoInsurance = this.autoInsurance;
    let autoRepair = this.autoRepair;
    

    let autoTotal =  fuel + autoInsurance + autoRepair + payment;
    // console.log(mortgage, rent);
    console.log(autoTotal);
    this.modelService.setAutoBudget(autoTotal);
  }


}
