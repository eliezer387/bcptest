import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAgency } from '../../models/agency.model';
import { ShareAgencyService } from '../../share-agency.service';
import { Subscription } from 'rxjs/';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
declare var ol: any;
@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.scss']
})
export class AgencyDetailsComponent implements OnInit, OnDestroy {
  private agencySubscription = new Subscription();
  updated = false;
  agency = {} as IAgency;
  agencyForm: FormGroup;

  latitude = 0;
  longitude = 0;

  map: any;

  constructor(
    private agencyService: ShareAgencyService,
    private router: Router,
  ) {
    this.agencySubscription = this.agencyService.shareAgency.subscribe(agency => {
      if (Object.keys(agency).length === 0) {
        this.returnHome();
      }
      this.agency = agency;
      this.latitude = agency.lat;
      this.longitude = agency.lon;

      this.agencyForm = new FormGroup({
        name: new FormControl(agency.agencia),
        department: new FormControl(agency.departamento),
        district: new FormControl(agency.distrito),
        province: new FormControl(agency.provincia),
        address: new FormControl(agency.direccion),
      });
    });

  }

  ngOnInit(): void {
    this.buildMap();
  }

  ngOnDestroy(): void {
    this.agencySubscription.unsubscribe();
  }

  returnHome(): void {
    this.router.navigate(['agencias']);
  }

  updateStorage(): void {
    const { name, department, district, province, address } = this.agencyForm.controls;

    const storageData = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : '';
    if (storageData) {
      const index = storageData.map(element => element.lat).indexOf(this.agency.lat);
      storageData[index].agencia = name.value;
      storageData[index].departamento = department.value;
      storageData[index].provincia = province.value;
      storageData[index].direccion = address.value;
      storageData[index].distrito = district.value;

      localStorage.setItem('data', JSON.stringify(storageData));
      this.updated = true;

    }
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
