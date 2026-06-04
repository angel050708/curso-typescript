import { Component, OnInit } from '@angular/core';
import { Application, ApplicationSettings } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

const USERNAME_KEY = 'username';

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  username = '';

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.username = ApplicationSettings.getString(USERNAME_KEY, 'Sin nombre');
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onEditUsername(): void {
    this.routerExtensions.navigate(['/settings/edit-username']);
  }
}
