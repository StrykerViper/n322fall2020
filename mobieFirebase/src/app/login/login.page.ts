import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: 'string'
  password: 'string'
  constructor(private modelService: ModelService) { }

  ngOnInit() {
  }
  logIn():void{
    // console.log(this.email);
    let eMail = this.email;
    let pWord = this.password;
    this.modelService.signIn(eMail, pWord);
  }
  signUp(): void{
    let eMail = this.email;
    let pWord = this.password;
    // console.log(eMail, pWord);
    this.modelService.signUpUser(eMail,pWord);
  }
}
