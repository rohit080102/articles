import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit(): void {
    this.refreshService.getRefresh().subscribe((refresh: boolean) => {
      if (refresh) {
        if (localStorage.getItem('Loginuser')) {
          this.isloggedin = true;
        }
        // Perform refresh actions here
        console.log('Refreshing HeaderComponent');
      }
    });

  }

  constructor(private router: Router, private refreshService: RefreshService) {

    if (localStorage.getItem('Loginuser')) {
      this.isloggedin = true;
    }
  }
  navbarCollapsed = true;
  isloggedin = false;


  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  navBar = [
    {
      name: "Home",
      link: '/',
    },
    {
      name: "About Us",
      link: '/about-us',
    },
    {
      name: "Articles",
      link: '/article',
    }
    , {
      name: "Contact Us",
      link: '/contact-us',
    }
  ]


  onLogout() {
    localStorage.removeItem('Loginuser');
    this.isloggedin = false;
    this.router.navigate(['/']);
  }


}
