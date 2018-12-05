import { Component, OnInit } from '@angular/core';

import { Actor } from '../../models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: [
    './actorlist.component.css'
  ]
})
export class ActorlistComponent implements OnInit {

  actors: Actor[];
  message: string;
  listFlag: boolean;
  btnText: string;
  newName: string;
  newCity: string;
  selectedIndex: number;
  tempActor: Actor;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.getActors();

    this.message = 'hello';
    this.listFlag = true;
    this.btnText = 'Hide List';
    this.newName = this.newCity = '';
    this.selectedIndex = -1;
    this.tempActor = null;
  }

  btnClicked() {
    alert('OUCH!! That hurt... Please be gentle.');
  }

  deleteActor(ndx) {
    // this.actors.splice(ndx, 1);
    this.actorService.deleteActor(ndx);
    this.selectedIndex = -1;
  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = (this.listFlag) ? 'Hide List' : 'Show List';
  }

  addActor() {
    // this.actors.push({
    //   name: this.newName,
    //   city: this.newCity
    // });

    this.actorService.addActor({
      name: this.newName,
      city: this.newCity
    });
    this.newName = this.newCity = '';
  }

  addActor2(name, city) {
    // this.actors.push({
    //   name: name,
    //   city: city
    // });
    // this.actors.push({name, city});
    this.actorService.addActor({name, city});
  }

  editActor(ndx) {
    this.selectedIndex = ndx;
    // SHALLOW COPY!!! Don't do this
    // this.tempActor = this.actors[ndx];

    // DEEP COPY

    // Approach-1 (Not Recommended)
    // this.tempActor = {
    //   name: this.actors[ndx].name,
    //   city: this.actors[ndx].city
    // };

    // Approach-2 (Recommended approach)
    this.tempActor = Object.assign({}, this.actors[ndx]);
  }

  cancelEdit(ndx) {
    this.selectedIndex = -1;
  }

  saveActor(ndx) {
    // this.actors.splice(ndx, 1, this.tempActor);
    this.actorService.updateActor(ndx, this.tempActor);
    this.selectedIndex = -1;
  }

  handleKey(event) {
    // console.log(event);
    if (event.key === 'Escape') {
      this.cancelEdit(-1);
    }
  }

}
