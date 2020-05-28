import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorService} from '../../shared/services/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ErrorService]
})
export class HomeComponent implements OnInit {
  user = 'eric';
  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
  }
}
