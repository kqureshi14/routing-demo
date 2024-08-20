import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
