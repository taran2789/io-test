
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'amexio-form-body',
  template: `
  <ng-content></ng-content>
  `,
})

export class AmexioFormBodyComponent implements OnInit {
  /*
Properties
name : padding
datatype : string
version : 4.2 onwards
default : left
description : padding for body.
*/
@Input() padding: string;

  constructor() {
  }

  ngOnInit() {
  }
}
