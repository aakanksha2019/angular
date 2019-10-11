import { Component, OnInit } from '@angular/core';
import { Trainings } from '../model/trainings';
import { TrainingsService } from '../sevices/trainings.service';

@Component({
  selector: 'app-userprogress',
  templateUrl: './userprogress.component.html',
  styleUrls: ['./userprogress.component.css']
})
export class UserprogressComponent implements OnInit {
  training:Trainings[];
  constructor( private trainings:TrainingsService) { }
  currentUser = JSON.parse(localStorage.getItem('username'));
  userid=this.currentUser.id;
  ngOnInit() {

  this.current();
  
  }
  current(){
    this.trainings.current(this.userid).subscribe(data=>{this.training=data;});
  }
  
}
