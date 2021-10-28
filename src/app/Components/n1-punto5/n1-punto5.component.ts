import { Component, OnInit } from '@angular/core';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';

@Component({
  selector: 'app-n1-punto5',
  templateUrl: './n1-punto5.component.html',
  styleUrls: ['./n1-punto5.component.css']
})
export class N1Punto5Component implements OnInit {

  constructor(private _cookiesService: CookiesServicesService) { }

  ngOnInit(): void 
  {
    this.renovToken();
  }

  renovToken()
  {
    this._cookiesService.checkToken();
  }

}
