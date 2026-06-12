import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css'
})
export class LegalComponent implements OnInit {
  selectedTab = 'impressum';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Listen to fragment changes to activate the corresponding tab directly
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const frag = fragment.toLowerCase();
        if (frag === 'datenschutz') {
          this.selectedTab = 'datenschutz';
        } else if (frag === 'erstinformation') {
          this.selectedTab = 'erstinformation';
        } else if (frag === 'impressum') {
          this.selectedTab = 'impressum';
        }
        // Scroll to tab nav wrapper if a fragment is supplied
        setTimeout(() => {
          const element = document.querySelector('.tab-nav-wrapper');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
