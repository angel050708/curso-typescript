import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Application, ApplicationSettings } from '@nativescript/core';
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import { FirebaseMessaging } from '@nativescript/firebase-messaging';

const USERNAME_KEY = 'username';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('notifToast', { static: false }) notifToastRef!: ElementRef;

  private _activatedUrl: string;
  private _sideDrawerTransition: DrawerTransitionBase;
  username = '';
  notifMessage = '';

  constructor(private router: Router, private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this._activatedUrl = '/home';
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._activatedUrl = event.urlAfterRedirects;
        this.username = ApplicationSettings.getString(USERNAME_KEY, 'Usuario');
      });

    this.username = ApplicationSettings.getString(USERNAME_KEY, 'Usuario');
    this.initFirebase();
  }

  private async initFirebase(): Promise<void> {
    try {
      await FirebaseMessaging.registerForRemoteNotifications();
      FirebaseMessaging.onMessage((message) => {
        const title = message.notification?.title || 'Nueva notificación';
        const body = message.notification?.body || '';
        this.showNotifToast(`${title}${body ? ': ' + body : ''}`);
      });
    } catch (err) {
      console.error('Firebase messaging init error:', err);
    }
  }

  private async showNotifToast(message: string): Promise<void> {
    this.notifMessage = message;
    if (!this.notifToastRef) return;
    const view = this.notifToastRef.nativeElement;
    await view.animate({ opacity: 1, duration: 300 });
    await new Promise<void>(resolve => setTimeout(resolve, 3000));
    await view.animate({ opacity: 0, duration: 300 });
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: { name: 'fade' },
    });

    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
  }
}
