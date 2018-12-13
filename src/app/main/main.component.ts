import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


    selectedStyle;
    styles = [
        {cssClass: 'a', name: 'X large'},
        {cssClass: 'b', name: 'large'},
        {cssClass: 'c', name: 'medium'},
        {cssClass: 'd', name: 'small'},
        {cssClass: 'e', name: 'X small'}
    ];

  constructor() {
      this.selectedStyle = this.styles[3];
  }

  ngOnInit() {
  }

}
