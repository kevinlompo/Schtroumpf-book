import { Component, OnInit } from '@angular/core';
import {SchtroumpfModel} from "../../../models/schtroumpf.model";
import {SchtroumpfService} from "../../../services/schtroumpf.service";

@Component({
  selector: 'app-schtroumpf-list',
  templateUrl: './schtroumpf-list.component.html',
  styleUrls: ['./schtroumpf-list.component.scss']
})
export class SchtroumpfListComponent implements OnInit{

  public schtroumpfList: SchtroumpfModel[] = [];

  constructor(public schtroumpfService:SchtroumpfService) {
    this.schtroumpfService.schtroumpfs$.subscribe((schtroumpList)=> {
      this.schtroumpfList = schtroumpList;
    });
  }
  ngOnInit(){
  }

  schtroumpfSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  deleteSchtroumpf(schtroumpf: SchtroumpfModel) {
    console.log('event delete received from child:', schtroumpf.pseudo);
    this.schtroumpfService.deleteSchtroumpf(schtroumpf);
  }

}
