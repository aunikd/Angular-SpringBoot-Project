import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css'],
//   standalone: true, // Generated - Change
//   imports: [RouterLink] // Added
// })
// export class FooterComponent implements OnInit {

// constructor() { }

// ngOnInit() {
// }

// }