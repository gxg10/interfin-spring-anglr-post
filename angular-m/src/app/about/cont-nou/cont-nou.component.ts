import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cont-nou',
  templateUrl: './cont-nou.component.html',
  styleUrls: ['./cont-nou.component.css']
})
export class ContNouComponent implements OnInit {

  emailFormControl: FormControl;

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  openUndoSnackBar() {
    this.snackbar.open('Cerere inregistrata', '',
    {duration: 1000});

  }

}
