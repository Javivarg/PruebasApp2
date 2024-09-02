import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.page.html',
  styleUrls: ['./vista2.page.scss'],
})
export class Vista2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome(){
    this.router.navigate(['/home'])
  }
}
