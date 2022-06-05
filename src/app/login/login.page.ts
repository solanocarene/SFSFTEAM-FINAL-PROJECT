import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loading;

  constructor(private route: Router, private navCtrl: NavController, private loadingCtrl: LoadingController) 
  { }
  showpassword = false;
  passwordToggleIcon = 'eye-outline';

  togglepassword(){
    this.showpassword = !this.showpassword;

    if(this.passwordToggleIcon == 'eye-outline'){
      this.passwordToggleIcon = 'eye-off-outline';
    }else{
      this.passwordToggleIcon = 'eye-outline';
    }
  }
  
  ngOnInit() {
  }

  signin(){
    
    this.loadingCtrl.create({
      message: 'logging...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    
    setTimeout(() => {
      this.loading.dismiss();
      this.route.navigate(['/home/accounts']);
    }, 2000);
  }
  signup(){
    this.loadingCtrl.create({
      message: 'signing...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    
    setTimeout(() => {
      this.loading.dismiss();
      this.route.navigate(['/signup']);
    }, 500);
  }
  resetpassword(){
    this.route.navigate(['/resetpassword']);
  }
}
