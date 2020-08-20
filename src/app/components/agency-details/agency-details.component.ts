import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAgency } from '../../models/agency.model';
import { ShareAgencyService } from '../../share-agency.service';
import { Subscription } from 'rxjs/';
declare var ol: any;
@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.scss']
})
export class AgencyDetailsComponent implements OnInit, OnDestroy {
  private agencySubscription = new Subscription();
  agency = {} as IAgency;

  latitude = 0;
  longitude = 0;

  map: any;

  constructor(
    private agencyService: ShareAgencyService
  ) {
    this.agencySubscription = this.agencyService.shareAgency.subscribe(agency => {
      this.agency = agency;
      this.latitude = agency.lat;
      this.longitude = agency.lon;
    });
  }

  ngOnInit(): void {
    this.buildMap();
  }

  ngOnDestroy(): void {
    this.agencySubscription.unsubscribe();
  }


  buildMap(): void {
    const features = [];
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.latitude, this.longitude]),
        zoom: 15
      })
    });

    const iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.transform([this.latitude, this.longitude], 'EPSG:4326', 'EPSG:3857'))
  });

    const iconStyle = new ol.style.Style({
      image: new ol.style.Icon(({
          anchor: [0.5, 1],
          src: 'http://cdn.mapmarker.io/api/v1/pin?size=25&hoffset=1&text=B'
      }))
  });

    iconFeature.setStyle(iconStyle);
    features.push(iconFeature);

    const vectorSource = new ol.source.Vector({
      features
  });

    const vectorLayer = new ol.layer.Vector({
      source: vectorSource
  });
    this.map.addLayer(vectorLayer);
  }

}
