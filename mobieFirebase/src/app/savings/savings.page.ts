import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.page.html',
  styleUrls: ['./savings.page.scss'],
})
export class SavingsPage implements OnInit {

  constructor(private modelService: ModelService) { }
  emergency: 'number'
  investments: 'number'
  retirement: 'number'
  ngOnInit() {
  }

  addAutoBudget(){
    let emergency = this.emergency;
    let investments = this.investments;
    let retirement = this.retirement;
    
    

    let savingsTotal =  emergency + investments + retirement;
    // console.log(mortgage, rent);
    console.log(savingsTotal, "page");
    this.modelService.setSavingsBudget(savingsTotal);
  }

}
