import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatrice';
  test="True";
  sequence="";
  sequence1 = "";
  res="";
  calcul="0";
  function(val: string) {
    this.sequence=this.sequence+val;
  }

  
  decimal() {
        if (this.sequence == "") this.sequence = "0.";
      else { if (this.sequence.indexOf(".")!=-1) {
        this.test="False";
      }
      this.sequence=this.sequence+".";
    }
}
  

  clear() {
    this.sequence="";
    this.calcul="";
    this.test="True";
    this.sequence1="0";
    this.res="";
  }

  egal() {
      
          this.res=eval(this.sequence);
          if(this.res=="Infinity") this.calcul="MATH ERROR";
          else this.calcul=eval(this.res);
    //this.sequence=this.sequence;
  }

  sub() {
    if (this.sequence.length>=1)
    {
      if (this.sequence[this.sequence.length-1]!="+" && this.sequence[this.sequence.length-1]!="-"&&this.sequence[this.sequence.length-1]!="/"&& this.sequence[this.sequence.length-1]!="*") this.sequence=this.sequence+"-";
    }
    else this.sequence="0-"; 
  }

  add() {
    if (this.sequence.length>=1)
    {
      if (this.sequence[this.sequence.length-1]!="+" && this.sequence[this.sequence.length-1]!="-"&&this.sequence[this.sequence.length-1]!="/"&& this.sequence[this.sequence.length-1]!="*") this.sequence=this.sequence+"+";
    }
    else this.sequence="0+";  
  }

  produit() {
    if (this.sequence.length>=1)
    {
      if (this.sequence[this.sequence.length-1]!="+" && this.sequence[this.sequence.length-1]!="-"&&this.sequence[this.sequence.length-1]!="/"&& this.sequence[this.sequence.length-1]!="*") this.sequence=this.sequence+"*";
    }
    else this.sequence="0*";  
  }   

  effacer() {
    if(this.sequence.length>=1)
    this.sequence=this.sequence.substr(0,this.sequence.length-1);
    else this.sequence="0";
  }

  div() {
    if (this.sequence.length>=1)
    {
      if (this.sequence[this.sequence.length-1]!="+" && this.sequence[this.sequence.length-1]!="-"&&this.sequence[this.sequence.length-1]!="/"&& this.sequence[this.sequence.length-1]!="*") this.sequence=this.sequence+"/";
    }
    else this.sequence="0/";  
 
 
 
  }
}
