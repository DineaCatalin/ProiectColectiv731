import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {BackendService} from '../backend.service';
import {MenuPageComponent} from '../menu-page/menu-page.component';


@Component({
  selector: 'app-create-user',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {
  constructor(private backend: BackendService) {
  }

  ngOnInit() {
    this.logout();
  }
  logout(): void {
    sessionStorage.clear();
  }
}
