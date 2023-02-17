import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchtroumpfModel } from "../../../models/schtroumpf.model";
import {SchtroumpfService} from "../../../services/schtroumpf.service";

@Component({
  selector: 'app-schtroumpf-form',
  templateUrl: './schtroumpf-form.component.html',
  styleUrls: ['./schtroumpf-form.component.scss']
})
export class SchtroumpfFormComponent implements OnInit {

  public schtroumpfForm: FormGroup;

  public listRole: string[] = ['Guerrier', 'Alchimiste', 'Sorcier', 'Espions', 'Enchanteur'];

  public start = new Date();

  constructor(public formBuilder: FormBuilder, public schtroumpfService:SchtroumpfService) {
    this.schtroumpfForm = this.formBuilder.group({
      pseudo: [''],
      role: [''],
      password: [''],
    });
  }
  ngOnInit(): void {
  }

  addQuiz(){
    const  schtroumpfTCreate: SchtroumpfModel = this.schtroumpfForm.getRawValue() as SchtroumpfModel;
    this.schtroumpfService.addSchtroumpfServer(schtroumpfTCreate);
    console.log('Add Schtroumpf: ', schtroumpfTCreate);
  }

}
