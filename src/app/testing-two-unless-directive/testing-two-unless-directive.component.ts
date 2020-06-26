import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-two-unless-directive',
  templateUrl: './testing-two-unless-directive.component.html',
  styleUrls: ['./testing-two-unless-directive.component.css']
})
export class TestingTwoUnlessDirectiveComponent implements OnInit {

  condition: boolean;

  constructor() { }

  ngOnInit() {
    this.condition=false;
  }

}
