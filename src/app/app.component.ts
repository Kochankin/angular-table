import { Component } from '@angular/core';

// description of main app component
@Component({
  selector: 'app-root', // to use in template <app-root> </app-root>
  templateUrl: './app.component.html', // html template
  styleUrls: ['./app.component.css'], // css of component
})
export class AppComponent {
  title = 'Tour of Heroes'; // export of variable
}
