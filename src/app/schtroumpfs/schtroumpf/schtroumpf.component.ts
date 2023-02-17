import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SchtroumpfModel} from "../../../models/schtroumpf.model";
import {SchtroumpfService} from "../../../services/schtroumpf.service";
import {SCHTROUMPF, SCHTROUMPF_LIST} from "../../mocks/schtroumpf.mock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-schtroumpf',
  templateUrl: './schtroumpf.component.html',
  styleUrls: ['./schtroumpf.component.scss']
})
export class SchtroumpfComponent implements OnInit{

  @Input()
  schtroumpf: SchtroumpfModel = SCHTROUMPF;

  @Output()
  schtroumpfSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  schtroumpfDelete: EventEmitter<SchtroumpfModel> = new EventEmitter<SchtroumpfModel>();

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  selectSchtroumpf(){
    this.schtroumpfSelected.emit(true);
    //this.schtroumpfService.setSchtroumpfSelected(this.schtroumpf.id);
  }

  delete() {
    this.schtroumpfDelete.emit(this.schtroumpf);
  }


}
