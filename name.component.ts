import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
       list:any[]=[]
       todo:string
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.list.push(this.todo)
  }
  delete(item){
      var i=this.list.indexOf(item)
      this.list.splice(i,1)
     }
     edit(item){
      var j=this.list.indexOf(item)
      var todo=this.list.splice(j,1)
      this.list.push(this.todo)
     }
}