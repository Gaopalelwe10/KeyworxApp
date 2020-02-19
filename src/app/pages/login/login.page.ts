import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController, AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public forgotpasswordForm: FormGroup;
  isForgotPassword: boolean = true;

  constructor(private fb: FormBuilder,
    private route: Router,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private profileService: ProfileService) {

    this.loginForm = fb.group({
      email:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-.]+$')]],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
    });

    this.forgotpasswordForm = fb.group({
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-.]+$'), Validators.required])],
    })
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async login() {
    const loading = this.loadingCtrl.create({
      // message: 'Signing in, Please wait...',
      // showBackdrop: false,
      cssClass: 'custom-loader',
      spinner: "crescent",
    });
    (await loading).present();

    this.profileService.login(this.loginForm.value.email, this.loginForm.value.password).then(async () => {
      localStorage.setItem("user", this.loginForm.value.email);
      (await loading).dismiss();
    });

  }
  reset(){
    this.profileService.sendPasswordResetEmail(this.forgotpasswordForm.value.email)
    .then((success) => {
      this.alertCtrl.create({
        // message: 'You can not order more than six',
        subHeader: 'Check your Email account',
        buttons: ['Ok']
      }).then(
        alert => alert.present()
      );
      this.isForgotPassword = true;
    }).catch((error) => {
      this.alertCtrl.create({
        // message: 'You can not order more than six',
        subHeader: 'There is no user record corresponding to this identifier. The user may have been deleted',
        buttons: ['Ok']
      }).then(
        alert => alert.present()
      );
    })
  }

  registerPage() {
    this.route.navigateByUrl("register")
  }
}
