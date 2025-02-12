import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn: boolean=false;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn=this.hardcodedAuthenticationService.isUserLoggedIn();
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