import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @Input() title; string;
  @Input() ourServicesDescription: string;
  @Input() ourServices: object[];
  constructor() { }

  ngOnInit() {
  }

}
