import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Layout';
  links: Array<object> = [
    {name: 'Link', url: ''},
    {name: 'Link', url: ''},
    {name: 'Link', url: ''}
  ]
}
