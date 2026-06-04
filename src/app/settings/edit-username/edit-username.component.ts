import { Component, OnInit } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

const USERNAME_KEY = 'username';

@Component({
  selector: 'EditUsername',
  templateUrl: './edit-username.component.html',
})
export class EditUsernameComponent implements OnInit {
  username = '';

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.username = ApplicationSettings.getString(USERNAME_KEY, '');
  }

  onSave(): void {
    ApplicationSettings.setString(USERNAME_KEY, this.username);
    this.routerExtensions.back();
  }

  onBack(): void {
    this.routerExtensions.back();
  }
}
