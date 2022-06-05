import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private loading;
  constructor(private route: Router, private navCtrl: NavController, private loadingCtrl: LoadingController) 
  { }

  ngOnInit() {
  }
  signin(){
    this.loadingCtrl.create({
      message: 'successfully saved...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    
    setTimeout(() => {
      this.loading.dismiss();
      this.route.navigate(['/login']);
    }, 2000);
  }
}
