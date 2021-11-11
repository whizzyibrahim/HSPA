import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property:any={
    id:1,
    Name: "Birla House",
    Type:"House",
    Price:10000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
