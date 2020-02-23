import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarserviceService } from './navbarservice.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ListofFiles: String[] = []

  constructor(private route: Router, private navbarserviceService: NavbarserviceService) { }

  ngOnInit() {
  }

  getListofApps() {
    this.navbarserviceService.getListOfApps().subscribe((listoffiles) => {
      this.ListofFiles = listoffiles;
    })
  }

}
