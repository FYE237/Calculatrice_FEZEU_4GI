import { syntaxError } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatrice';
  calcul ="";
  op1 ="";
  op2="";
  operation="";
  i=0;j=0;
  res=0;

  setOperation1(op: string){
    if (this.getOperation1() == "SYNTAXE ERROR") this.op1="";
    this.op1=this.op1+op;
  }
  setOperation2(op: string){
    this.op2=this.op2+op;
  }
  getOperation1(){
    return this.op1;
  }
  getOperation2(){
    return this.op2;
  }


  function1(){
    if(this.operation=="")
      {
        this.setOperation1("1");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("1");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }

  function2(){
    if(this.operation=="")
      {
        this.setOperation1("2");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("2");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }

  function3(){
    if(this.operation=="")
      {
        this.setOperation1("3");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("3");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }
 
  function4(){if(this.operation=="")
  {
    this.setOperation1("4");
    this.calcul=this.getOperation1();
  }
  else {
    this.setOperation2("4");
    this.calcul=this.getOperation2();
  }
  console.log(this.calcul);
}

  function5(){if(this.operation=="")
  {
    this.setOperation1("5");
    this.calcul=this.getOperation1();
  }
  else {
    this.setOperation2("5");
    this.calcul=this.getOperation2();
  }
  console.log(this.calcul);
}

  function6(){
    if(this.operation=="")
      {
        this.setOperation1("6");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("6");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }
  
  function7(){
    if(this.operation=="")
      {
        this.setOperation1("7");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("7");
        this.calcul=this.getOperation2();
      }
  
      console.log(this.calcul);
  }

  function8(){
    if(this.operation=="")
      {
        this.setOperation1("8");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("8");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }

  function9(){
    if(this.operation=="")
      {
        this.setOperation1("9");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("9");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }

  function0(){
    if(this.operation=="")
      {
        this.setOperation1("0");
        this.calcul=this.getOperation1();
      }
      else {
        this.setOperation2("0");
        this.calcul=this.getOperation2();
      }
      console.log(this.calcul);
  }

  decimal(){
    if(this.operation=="")
      {
        if(this.op1=="")
          {
            this.setOperation1("0");
          }
          this.setOperation1(".");
          //this.op1+=".";
          this.calcul=this.getOperation1();

          
      }
    else {
      if(this.op2=="")
          {
            this.setOperation2("0");
          }
          this.setOperation2(".");
          //this.op2+="."
          this.calcul=this.calcul+this.getOperation2();
    }
  }

  clear(){
    this.calcul="";
    this.op1="";
    this.op2="";
    this.operation="";
    this.res=0;
    this.i=0,this.j=0;
  }

  egal(){
     this.j=parseFloat(this.getOperation2());
      this.i=parseFloat(this.getOperation1());
    if(this.operation == "+") {
      this.res=this.i+this.j;
    }

    if(this.operation == "*") {
       this.res=this.i*this.j;
    }

    if(this.operation == "/") {
      try {
        this.res=this.i/this.j;
      } catch (error) {
        this.calcul="SYNTAXE ERROR";
      }
       
    }

    if(this.operation == "-") {
      this.res=this.i-this.j;
    }
    if(this.operation == "")  this.res=this.i;

    this.calcul=this.res.toString();
    console.log(this.res);
    console.log(this.i);
  }

  sub(){
    /*this.i = parseFloat(this.getOperation1());
    this.j=parseFloat(this.getOperation2());
    */this.operation="-";
    //this.res=parseFloat(this.getOperation1());
    this.calcul="";
  }

  add(){
    /*this.i = parseFloat(this.getOperation1());
    this.j=parseFloat(this.getOperation2());
    */this.operation="+"
    //this.res=parseFloat(this.getOperation1());
    this.calcul="";
  }

  produit(){
    /*this.i = parseFloat(this.getOperation1());
    this.j=parseFloat(this.getOperation2());
    */this.operation="*"
    //this.res=parseFloat(this.getOperation1());
    this.calcul="";
  }

  div(){
    this.operation="/";
    this.calcul="";
  }
}
