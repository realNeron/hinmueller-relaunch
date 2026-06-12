import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  selectedTab = 'portrait';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Listen to fragment for route redirection (e.g. /about#karriere)
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'karriere') {
        this.selectedTab = 'karriere';
      }
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
