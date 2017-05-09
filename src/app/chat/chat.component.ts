import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ISlimScrollOptions } from 'ng2-slimscroll';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private opts: ISlimScrollOptions;

  public tabs: any[] = [
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', removable: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  public usersOnline: any[] = [
    {uid: 'asdf1234f', displayName: 'Fulano'},
    {uid: '123sdfasd', displayName: 'Beltrano'},
    {uid: 'asdf124ff', displayName: 'Ciclano'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
    {uid: '456dfdggf', displayName: 'John Doe'},
  ];

  public openChat(user: firebase.User) {
    this.tabs.push({title: user.displayName, uid: user.uid, content: '', removable: true});
  }

  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }

  public removeTabHandler(tab: any): void {
    console.log(tab);
  }

  constructor() { }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: '#333',
      gridBackground: '#eee',
      barOpacity: '1',
      barWidth: '4',
      gridWidth: '2',
      gridMargin: '1px 1px'
    }
  }

}
