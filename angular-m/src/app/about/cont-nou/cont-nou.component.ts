import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Account} from '../../model/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/cont';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-cont-nou',
  templateUrl: './cont-nou.component.html',
  styleUrls: ['./cont-nou.component.css']
})
export class ContNouComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;

  cont = {
    nume: '',
    prenume: '',
    email: '',
    address: '',
    telefon: ''
  };

  // cont: Account;
  submitted = false;

  constructor(public snackbar: MatSnackBar,
              private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {
    // console.log(this.signupForm.value.nume);
    // console.log(this.signupForm.value.prenume);
    this.cont.nume = this.signupForm.value.nume;
    this.cont.prenume = this.signupForm.value.prenume;
    this.cont.email = this.signupForm.value.email;
    this.cont.address = this.signupForm.value.address;
    this.cont.telefon = this.signupForm.value.telefon;
    console.log(this.cont);

    this.addCont().subscribe(
      data => {
        console.log('dataaa', data);
      }
    );
    this.signupForm.resetForm();
    // this.signupForm. = null;
    this.cont = {
      nume: '',
      prenume: '',
      email: '',
      address: '',
      telefon: ''
    };
    this.submitted = true;
  }

  addCont(): Observable<any> {
    return this.http.post(url, this.cont, httpOptions);
  }

  openUndoSnackBar() {
    this.snackbar.open('Cerere inregistrata - veti fi contactat de un consultant in curand', '',
    {duration: 3000});

  }

  onTest() {
    console.log('this user', this.cont);
  }

}
