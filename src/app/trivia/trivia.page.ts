import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {

  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Haz acertado',
      buttons: ['OK'],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: 'Inténtalo de nuevo :c',
      buttons: ['OK'],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
  }
}
