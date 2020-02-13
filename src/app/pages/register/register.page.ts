import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MustMatch } from 'src/app/module/must-match';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register: FormGroup;
  registerdetails={
    name:'',
    email:'',
    uid:'',
    created:0,
  }
  constructor(
    private fb: FormBuilder,
    private route: Router,
    public loadingCtrl: LoadingController,
    private profileService: ProfileService
  ) { 
    this.register = fb.group({
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-.]+$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
      cpassword: ['', Validators.required]

    }, {
      validator: MustMatch('password', 'cpassword')
    });
  }

  ngOnInit() {
  }

  PersonRegister(){
    this.registerdetails.name=this.register.value.name;
    this.registerdetails.email=this.register.value.email;
    this.registerdetails.created= Date.now()

    this.profileService.signup(this.registerdetails,this.register.value.password)
  }
  login() {
    this.route.navigateByUrl('login');
  }
}
