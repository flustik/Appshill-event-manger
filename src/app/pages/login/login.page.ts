import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/user/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(public loadingCtrl: LoadingController, 
  	public alertCtrl: AlertController, 
  	private authService: AuthService, 
  	private router: Router, 
  	private formBuilder: FormBuilder) 
  {
  	this.loginForm = this.formBuilder.group({
  		email: ['',
  		Validators.compose([Validators.required, Validators.email])],
      password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }


  ngOnInit() {
  }
  async loginUser(loginForm): Promise<void> {
    const loading = await this.loadingCtrl.create();
    try {
      loading.present();
      const email: string = loginForm.value.email;
      const password: string = loginForm.value.password;
      await this.authService.loginUser(email, password);
      await loading.dismiss();
      this.router.navigateByUrl('/home');
    } catch (error) {
      90
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        message: error.message,
        buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
        ],
      });
      alert.present();
    }
  }

}	
