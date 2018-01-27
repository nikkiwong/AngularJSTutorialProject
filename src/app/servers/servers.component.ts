import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: [app-servers] can reference it through attributes in html eg. <div app-servers></div>
  // selector: ".app-servers" can be referenced as a class in html eg. <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = ""

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created!!"
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
