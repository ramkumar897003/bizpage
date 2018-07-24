import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() title: string;
  @Input() skillsDescription: string;
  @Input() skills: object[];
  constructor() { }

  ngOnInit() {
  }

}
