import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';

  constructor() { }

  ngOnInit(): void {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
