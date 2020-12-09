import { ModelService } from '../services/model.service'
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: 'string'
  password: 'string'
  monthly: "number"
  constructor(private modelService: ModelService) {
    
  }
  getData(): void {
    console.log('get Data')
    this.modelService.getFirestoreData();
  }
  
  logOut():void{
    this.modelService.logoutUser();
    
  }

  getTotal():void{
    console.log("get Total")
    let monthly = this.monthly
    console.log(monthly)
    // this.modelService.getTotalOutput(monthly);
  }
}
