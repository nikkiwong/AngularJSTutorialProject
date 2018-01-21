import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: [app-servers] can reference it through attributes in html eg. <div app-servers></div>
  // selector: ".app-servers" can be referenced as a class in html eg. <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
