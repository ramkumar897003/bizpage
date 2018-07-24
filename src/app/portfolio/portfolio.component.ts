import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() title: string;
  @Input() portfolioFilters: string[];
  @Input() portfolios: object[];
  constructor() { }

  ngOnInit() {
  }

}
