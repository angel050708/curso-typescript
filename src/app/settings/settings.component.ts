import { Component, OnInit } from '@angular/core';
import { Application, ApplicationSettings } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { FirebaseMessaging } from '@nativescript/firebase-messaging';
import { SocialShare } from '@nativescript/social-share';

const USERNAME_KEY = 'username';

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  username = '';
  firebaseToken = 'Cargando token...';

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.username = ApplicationSettings.getString(USERNAME_KEY, 'Sin nombre');
    this.loadFirebaseToken();
  }

  private async loadFirebaseToken(): Promise<void> {
    try {
      const token = await FirebaseMessaging.getToken();
      this.firebaseToken = token || 'Token no disponible';
    } catch (err) {
      this.firebaseToken = 'Error al obtener token';
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onEditUsername(): void {
    this.routerExtensions.navigate(['/settings/edit-username']);
  }

  onShareText(): void {
    SocialShare.shareText(
      `Hola! Estoy usando my-drawer-ng. Usuario: ${this.username}`,
      'Compartir desde my-drawer-ng'
    );
  }
}
