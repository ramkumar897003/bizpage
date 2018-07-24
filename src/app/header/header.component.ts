import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() menus: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
