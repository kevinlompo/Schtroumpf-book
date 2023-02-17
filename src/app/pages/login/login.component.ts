import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {SchtroumpfService} from "../../../services/schtroumpf.service";
import {SchtroumpfModel} from "../../../models/schtroumpf.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  schtroumpfSub:  Subscription  = new Subscription();

  schtroumpfList: SchtroumpfModel[] = this.schtroumpfService.getAllSchtroumpfs();

  public loginForm: FormGroup

  constructor(private router: Router,private formBuilder:  FormBuilder, private schtroumpfService:  SchtroumpfService) {
    this.loginForm = this.formBuilder.group({
      pseudo:[''],
      password:['']
    });

    this.schtroumpfSub  = this.schtroumpfService.schtroumpfs$.subscribe((list)=>{
      this.schtroumpfList = list;
    });
  }

  ngOnInit() {
  }

  singIn() {
    const stroumpfLogin: SchtroumpfModel  = this.loginForm.getRawValue()  as SchtroumpfModel;
    for (let schtroumpf of this.schtroumpfList) {
      if (schtroumpf.pseudo === stroumpfLogin.pseudo && schtroumpf.password === stroumpfLogin.password){
        this.router.navigate(['/home'])
      }
    }
  }
}
