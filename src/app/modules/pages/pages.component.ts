import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.scrollToFragment();
    });
  }

  ngAfterViewInit(): void {
    this.scrollToFragment();
  }

  private scrollToFragment() {
    try {
      const el = document.getElementById(this.fragment);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) {

    }
  }
}
