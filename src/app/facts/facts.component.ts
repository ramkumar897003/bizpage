import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  @Input() title: string;
  @Input() factsDescription: string;
  @Input() factImage: string;
  @Input() facts: object[];
  constructor() { }

  ngOnInit() {
  }

}
