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
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
    });

    this.forgotpasswordForm = fb.group({
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    })
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async login() {
    const loading = this.loadingCtrl.create({
      message: 'Signing in, Please wait...',
      // showBackdrop: false,
      spinner: "dots",
    });
    (await loading).present();

    this.profileService.login(this.loginForm.value.email, this.loginForm.value.password).then(async () => {
      (await loading).dismiss();
    });

  }

  registerPage() {
    this.route.navigateByUrl("register")
  }
}
