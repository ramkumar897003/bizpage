import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() title: string;
  @Input() contactDescription: string;
  @Input() address: any;
  constructor() { }

  ngOnInit() {
  }

}
