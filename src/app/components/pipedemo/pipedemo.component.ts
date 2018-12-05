import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  today: Date;
  actor: Actor;
  price: number;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.actor = {name: 'abcd', city: 'xyz'};
    this.price = 34.6;
  }

}
