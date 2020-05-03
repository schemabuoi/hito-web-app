import { Component, OnInit } from '@angular/core';

enum NavbarAction {
  GROUP_CHAT = 0,
  LOCAL_CHAT = 1,
  HISTORY = 2
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  readonly GROUP_CHAT_ACTION: NavbarAction = NavbarAction.GROUP_CHAT;
  readonly LOCAL_CHAT_ACTION: NavbarAction = NavbarAction.LOCAL_CHAT;
  readonly HISTORY_ACTION: NavbarAction = NavbarAction.HISTORY;

  activeAction: NavbarAction;

  selectedAction: NavbarAction;

  constructor() { }

  ngOnInit(): void {
    this.onActionClick(NavbarAction.LOCAL_CHAT)
  }

  onActionClick(action: NavbarAction) {
    this.activeAction = action;
  //   if(action === this.GROUP_CHAT_ACTION
  //     && this.selectedAction !== this.GROUP_CHAT_ACTION) {
  //
  //   }
  //   else if(action === this.LOCAL_CHAT_ACTION
  //     && this.selectedAction !== this.LOCAL_CHAT_ACTION) {
  //
  //   }
  //   else if(action === this.HISTORY_ACTION
  //     && this.selectedAction !== this.HISTORY_ACTION) {
  //
  //   }
  }
}