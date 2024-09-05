import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  public correo: string;
  public password: any;

  constructor(private navCtrl: NavController) { 
    this.correo = '';
    this.password = '';
  }
  
  login(){
    if (this.correo == 'admin@gmail.com' && this.password == '12345'){
      this.navCtrl.navigateForward("/bienvenida")
    }
    else if (this.correo == 'alumn@gmail.com' && this.password == '54321'){
      this.navCtrl.navigateForward("/bienvenida-alum")
    }
    else {
      alert('no esta en la base de datos')
    }
  }
}
