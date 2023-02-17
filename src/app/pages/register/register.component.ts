import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SchtroumpfService} from "../../../services/schtroumpf.service";
import {SchtroumpfModel} from "../../../models/schtroumpf.model";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  accountSuccessfulEmitter: EventEmitter<SchtroumpfModel> = new EventEmitter<SchtroumpfModel>();

  constructor(public formBuilder: FormBuilder, public schtroumpfService: SchtroumpfService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      pseudo: [''],
      password: [''],
      role: ['']
    })
  }

  ngOnInit(): void {
    this.schtroumpfService.getSchtroumpfFromUrl();
    this.schtroumpfService.emitSchtroumpf();
  }

/*  initForm() {
    this.registerForm = this.formBuilder.group({
      pseudo: [''],
      password: [''],
      role: ['']
    });
  }*/


  signUp() {
    const newSchtroumpf: SchtroumpfModel = this.registerForm.getRawValue() as SchtroumpfModel;

    this.schtroumpfService.addSchtroumpfServer(newSchtroumpf);

    this.accountSuccessfulEmitter.emit(newSchtroumpf);
    alert("Signup SuccessFull");
    console.log(this.accountSuccessfulEmitter);
    this.registerForm.reset();
    this.router.navigate(['/chargement']);

  }
}
