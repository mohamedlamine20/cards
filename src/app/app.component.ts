import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts =[
    {
      title:"Neat Tree",
      username:"nature",
      imageUrl:"assets/tree.jpeg",
      content:" i saw this neat tree tody"

    },
    {
      title:"Snowy mountain",
      username:"mountainlover",
      imageUrl:"assets/mountain.jpeg",
      content:"here is a picture of a snowy mountain "
    },
    {
      title:"mountain biking",
      username:"biking ",
      imageUrl:"assets/biking.jpeg",
      content:"idid same biking today "
       
    }
  ]; 
}
