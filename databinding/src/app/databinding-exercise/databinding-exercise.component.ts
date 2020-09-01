import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-exercise',
  templateUrl: './databinding-exercise.component.html',
  styleUrls: ['./databinding-exercise.component.css']
})
export class DatabindingExerciseComponent implements OnInit {
	username;
	buttonDisabled = true;

  
  setUsername(event) {
  	this.username = event.target.value;
  	if(this.username != '') {
  		this.buttonDisabled = false;
  	}
  }

  resetUsername() {
  	this.username='';
  	this.buttonDisabled = true;
  }





  constructor() { }

  ngOnInit(): void {
  }

}
