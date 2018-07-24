import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css']
})
export class FeaturedServicesComponent implements OnInit {

  @Input() services: object[];
  constructor() { }

  ngOnInit() {
  }

}
