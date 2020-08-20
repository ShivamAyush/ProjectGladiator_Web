import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor() { }
  images = ["/assets/459CT.png", "/assets/RBSKW.png", "/assets/W93BX.png"]

  imagePath=this.images[Math.floor(Math.random() * this.images.length)];
  ngOnInit(): void {
  
  }

}
