import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() address: any;
  @Input() socialLinks: any;
  @Input() usefulLinks: object[];
  @Input() newsLetterDescription: string;
  constructor() { }

  ngOnInit() {
  }

}
