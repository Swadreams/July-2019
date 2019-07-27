import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number = 5;
  @Output() ratingClicked = new EventEmitter();
  starWidth: number;
  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Rating ${this.rating} is clicked`);
  }

}
