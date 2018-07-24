import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() title: string;
  @Input() teamDescription: string;
  @Input() team: object[];
  constructor() { }

  ngOnInit() {
  }

}
