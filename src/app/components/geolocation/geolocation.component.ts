import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('contentMap', {static: false})
  public contentMap: ElementRef;
  // contentMap: any;
  @Input() position: any;
  @Input() coordinates = [28.1028, -15.4131];
  @Input() distance: any;


  goToHome() {
    this.router.navigate(['/home']);
  }

  public ionViewDidEnter() {
    const map = L.map(this.contentMap.nativeElement, {
      center: [this.coordinates[0], this.coordinates[1]],
      zoom: 15,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    const mark = L.marker([this.coordinates[0], this.coordinates[1]], { draggable: false }).addTo(map);
    // let distance: any;

    map.locate({ watch: true, setView: true, maxZoom: 16 }).on('locationFound', (e: any) => {
      if (this.position !== undefined) {
        this.position.setLatLng([e.latitude, e.longitude]);
        map.setView([e.latitude, e.longitude], 30);
        // calculate the distance
        this.distance = Math.round(map.distance([e.latitude, e.longitude], mark.getLatLng()));
        // show the distance
        this.position.bindPopup('You are ' + this.distance + ' metres from the target.').openPopup();
        //
        // draw the way

        L.Routing.control({
          waypoints: [
            L.latLng(e.latitude, e.longitude),
            L.latLng(this.coordinates[0], this.coordinates[1])
          ], routeWhileDragging: true

        }).addTo(map);

        //
      } else {
        this.position = L.circleMarker([e.longitude, e.longitude], { radius: 5 }).addTo(map);
        map.setView([e.latitude, e.longitude], 30);
      }
    });
  }

  // public ionViewDidEnter() {
  //   this.contentMap = L.map('contentMap', {
  //     center: [this.coordinates[0], this.coordinates[1]],
  //     zoom: 15,
  //     zoomControl: true
  //   });

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.contentMap);
  //   const mark = L.marker([this.coordinates[0], this.coordinates[1]], { draggable: false }).addTo(this.contentMap);
  //   // let distance: any;

  //   this.contentMap.locate({ watch: true, setView: true, maxZoom: 16 }).on('locationFound', (e: any) => {
  //     if (this.position !== undefined) {
  //       this.position.setLatLng([e.latitude, e.longitude]);
  //       this.contentMap.setView([e.latitude, e.longitude], 30);
  //       // calculate the distance
  //       this.distance = Math.round(this.contentMap.distance([e.latitude, e.longitude], mark.getLatLng()));
  //       // show the distance
  //       this.position.bindPopup('You are ' + this.distance + ' metres from the target.').openPopup();
  //       //
  //       // draw the way

  //       L.Routing.control({
  //         waypoints: [
  //           L.latLng(e.latitude, e.longitude),
  //           L.latLng(this.coordinates[0], this.coordinates[1])
  //         ], routeWhileDragging: true

  //       }).addTo(this.contentMap);

  //       //
  //     } else {
  //       this.position = L.circleMarker([e.longitude, e.longitude], { radius: 5 }).addTo(this.contentMap);
  //       this.contentMap.setView([e.latitude, e.longitude], 30);
  //     }
  //   });
  // }

  ngOnInit() {}

}
