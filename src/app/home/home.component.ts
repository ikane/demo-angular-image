import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HardwareFamily } from '../HardwareFamily';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hardwareFamilies: HardwareFamily[];

  constructor(private apiService: ApiService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.hardwareFamilies = this.apiService.getHardwareFamilies();
    this.apiService.getHardwareFamilies().subscribe(
      data => {
        this.hardwareFamilies = data;
      }
    );
  }

}
