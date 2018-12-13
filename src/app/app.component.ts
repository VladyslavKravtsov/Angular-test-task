import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theme = 'white';
  title = 'app';

  changeTheme(){
      (this.theme === 'white' ? this.theme = 'red' : this.theme = 'white');
  }
}
