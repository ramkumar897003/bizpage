import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  @Input() title: string;
  @Input() testimonials: object[];
  constructor() { }

  ngOnInit() {
  }

}
