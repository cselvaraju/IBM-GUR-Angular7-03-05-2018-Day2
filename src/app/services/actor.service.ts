import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actors: Actor[];

  constructor() {
    this.actors = [
      {name: 'Amitabh Bachhan', city: 'Mumbai'},
      {name: 'Kamal Hasan', city: 'Chennai'},
      {name: 'Julia Roberts', city: 'Hollywood'},
      {name: 'Steven Seagal', city: 'New York'},
      {name: 'Rajnikant', city: 'Chennai'}
    ];
  }

  getActors(): Actor[] {
    return this.actors;
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
  }

  deleteActor(ndx: number) {
    this.actors.splice(ndx, 1);
  }

  updateActor(ndx: number, newActor: Actor) {
    this.actors.splice(ndx, 1, newActor);
  }
}
