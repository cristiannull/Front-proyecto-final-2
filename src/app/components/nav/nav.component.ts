import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private bodyElement!: HTMLElement;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.bodyElement = document.querySelector("body") as HTMLElement;
  }

  ngOnDestroy() {
    if (this.bodyElement) {
      this.renderer.setStyle(this.bodyElement, "overflow", "initial")
      this.renderer.setStyle(this.bodyElement, "paddingRight", null)
    }
  }
}

