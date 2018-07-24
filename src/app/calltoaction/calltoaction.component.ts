import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent implements OnInit {

  @Input() title: string;
  @Input() callToActionDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
