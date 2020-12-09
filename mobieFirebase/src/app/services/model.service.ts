import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class ModelService {
  private user: any;
  public valTotal: Number;
  
  
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.user = user;
      } else {
        console.log("No User");
        this.user = "";
      }
    });
  }

  signIn(eMail, pWord): void {
    console.log(eMail, pWord);
    this.auth.signInWithEmailAndPassword(eMail, pWord)
    .then(() => {
      console.log("User Signed In");
      alert("User Signed In");
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(`error code ${errorCode} Error message ${errorMessage}`);
    });;
    this.router.navigate(['/home'])
  }

  signUpUser(eMail,pWord): void{
    this.auth.createUserWithEmailAndPassword(eMail, pWord).then((result) => {
      alert("User Created");
      console.log(result.user.uid);
    })
    this.router.navigate(['/home'])
  }

  logoutUser(): void {
    this.auth.signOut().then(() => {
      console.log("User Signed Out");
      alert("User Signed Out");
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(`error code ${errorCode} Error message ${errorMessage}`);
    });
    this.router.navigate(['/login'])
  }

  getFirestoreData(): void {
    // this.auth.signInAnonymously().then((data) => {});
    if (this.user) {
      // console.log("none");
      this.firestore
        .collection("names")
        .get()
        .subscribe((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            console.log(doc.id);
          });
        });
    }
  }

  setHousingTotal(housingTotal): void {
    console.log(housingTotal);
    this.firestore
    .collection("budgets")
    .doc("housing")
    .set({housingtotal: housingTotal})
    .then(function () {
      console.log("Housing Budget Made!");
    })
    .catch(function(error) {
      console.error("Error", error);
  });
  }
  

  setAutoBudget(autoTotal): void{
    console.log(autoTotal);
    this.firestore
    .collection("budgets")
    .doc("auto")
    .set({autototal: autoTotal})
    .then(function () {
      console.log("Auto Budget Made!");
    })
    .catch(function(error) {
      console.error("Error", error);
  });
  }

  setPersonalBudget(personalTotal): void{
    console.log(personalTotal, "model");
    this.firestore
    .collection("budgets")
    .doc("personal")
    .set({personaltotal: personalTotal})
    .then(function () {
      console.log("Personal Budget Made!");
    })
    .catch(function(error) {
      console.error("Error", error);
  });
  }

  setSavingsBudget(savingsTotal): void{
    console.log(savingsTotal, "model");
    this.firestore
    .collection("budgets")
    .doc("savings")
    .set({savingstotal: savingsTotal})
    .then(function () {
      console.log("Savings Budget Made!");
    })
    .catch(function(error) {
      console.error("Error", error);
  });
  }


  //get Total would grab all docs and subtract them from monthly to display a left over savings
  // could not get valTotal to have data
  // getTotalOutput(monthly):void{
    
   
  //     this.firestore.collection("budgets").doc("auto").get().subscribe(function(doc) {
  //       // var autoData = doc.data().autototal
  //       var autoData = doc.data()
  //       console.log(autoData);
  //       // getVar(autoData)
  //       this.valTotal = autoData.autototal;
  //     })
  //     // function getVar(autoData){
      
  //     // this.valTotal = autoData;
  //     // console.log(this.valTotal);
  //     // }
      
  // };

} 
