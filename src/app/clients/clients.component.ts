import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @Input() title: string;
  @Input() clients: string[];
  constructor() { }

  ngOnInit() {
  }

}
