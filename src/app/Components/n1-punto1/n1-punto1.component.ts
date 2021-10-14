import { Component, OnInit } from '@angular/core';
import { CookiesServicesService } from 'src/app/Services/cookies-services.service';

@Component({
  selector: 'app-n1-punto1',
  templateUrl: './n1-punto1.component.html',
  styleUrls: ['./n1-punto1.component.css']
})
export class N1Punto1Component implements OnInit {

  constructor(private _cookiesService: CookiesServicesService) 
  { 
    // 
  }

  ngOnInit(): void 
  {
    this.renovToken();
  }

  renovToken()
  {
    this._cookiesService.checkToken();
  }
}
