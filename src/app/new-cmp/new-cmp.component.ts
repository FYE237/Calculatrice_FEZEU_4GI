import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  operation ="";
  op1 ="";
  op2="";
  

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  sub(){

  }

  add(){}

  produit(){}

  div(){}


}
