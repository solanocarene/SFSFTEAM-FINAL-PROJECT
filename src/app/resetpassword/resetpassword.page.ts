import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  private loading;
  constructor(private route: Router, private navCtrl: NavController, private loadingCtrl: LoadingController) 
  { }

  ngOnInit() {
  }
  signin(){
    this.loadingCtrl.create({
      message: 'reset password...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    
    setTimeout(() => {
      this.loading.dismiss();
      this.route.navigate(['/login']);
    }, 1200);
  }
}
