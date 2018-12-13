import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text = 'random text';

  constructor() { }

  ngOnInit() {
  }

  changeText() {
      (this.text === 'random text' ? this.text = 'new random text' : this.text = 'random text');
  }

}
