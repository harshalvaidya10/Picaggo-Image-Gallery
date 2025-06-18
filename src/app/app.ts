import { Component } from '@angular/core';
import { Gallery } from './gallery/gallery';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Gallery, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'image-gallery';

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
