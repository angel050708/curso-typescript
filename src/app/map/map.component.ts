import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { MapView, Marker, Position } from '@nativescript/google-maps';

@Component({
  selector: 'MapPage',
  templateUrl: './map.component.html',
})
export class MapComponent {
  latitude = -34.6037;
  longitude = -58.3816;
  zoom = 12;

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onMapReady(event: any): void {
    const mapView: MapView = event.object;

    const marker = new Marker();
    marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
    marker.title = 'Buenos Aires';
    marker.snippet = 'Capital de Argentina';
    marker.userData = { id: 1 };

    mapView.addMarker(marker);
  }
}
