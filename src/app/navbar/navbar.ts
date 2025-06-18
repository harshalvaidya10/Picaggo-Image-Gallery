import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = false;
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Screenshots', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' }
  ];
}
