import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userId: any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{

      this.userId = params.get('id');
      console.info("user Id ", this.userId);
    });
    
  }

}
