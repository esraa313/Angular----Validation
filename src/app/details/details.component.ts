import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ID = 0 ;
  constructor(myActivated: ActivatedRoute){
    console.log(myActivated.snapshot.params["id"]);
    this.ID = myActivated.snapshot.params["id"] ;

  }
}
