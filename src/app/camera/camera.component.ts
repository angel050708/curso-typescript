import { Component } from '@angular/core';
import { Application, ImageSource } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Camera } from '@nativescript/camera';
import { SocialShare } from '@nativescript/social-share';

@Component({
  selector: 'CameraPage',
  templateUrl: './camera.component.html',
})
export class CameraComponent {
  capturedImage: ImageSource | null = null;

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  async onTakePhoto(): Promise<void> {
    try {
      await Camera.requestPermissions();
      const imageAsset = await Camera.takePicture({
        width: 800,
        height: 800,
        keepAspectRatio: true,
        saveToGallery: false,
      });
      this.capturedImage = await ImageSource.fromAsset(imageAsset);
    } catch (err) {
      console.error('Camera error:', err);
    }
  }

  onShareImage(): void {
    if (this.capturedImage) {
      SocialShare.shareImage(this.capturedImage, 'Compartir imagen');
    }
  }

  onShareText(): void {
    SocialShare.shareText('¡Mira esta foto que tomé con my-drawer-ng!', 'Compartir texto');
  }
}
