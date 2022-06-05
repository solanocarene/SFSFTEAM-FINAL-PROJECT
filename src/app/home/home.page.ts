import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private loading;
  constructor(private route: Router, private navCtrl: NavController, private loadingCtrl: LoadingController) 
  { }

  logout(){
    this.loadingCtrl.create({
      message: 'logging out...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    
    setTimeout(() => {
      this.loading.dismiss();
      this.route.navigate(['/pages/login']);
    }, 6500);
  }
 
}
