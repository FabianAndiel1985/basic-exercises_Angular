import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-exercise',
  templateUrl: './directives-exercise.component.html',
  styleUrls: ['./directives-exercise.component.css']
})
export class DirectivesExerciseComponent implements OnInit {
  
  paragraphVisible = true;
  amountButtonClicked = 0;
  buttonClickArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleParagraph() {
  		if(this.paragraphVisible) {
  			this.paragraphVisible = false;
  		}

  		else {
  			this.paragraphVisible = true;
  		}

  		this.amountButtonClicked++;
  		this.buttonClickArray.push(this.amountButtonClicked);
	}
}
