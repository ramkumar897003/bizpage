import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input() intros: object[];
  constructor() { }

  ngOnInit() {
  }

}
