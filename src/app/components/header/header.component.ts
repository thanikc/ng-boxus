import { Component, HostListener, Input, ViewChild } from "@angular/core";
import { SassHelperComponent } from "../sass-helper/sass-helper.component";

export interface Fragment {
  id: string, label: string, color: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public static fragments: Fragment[] = [
    { id: 'home', label: 'Home', color: 'background' },
    { id: 'skills', label: 'Skills', color: 'bg1' },
    { id: 'about', label: 'About', color: 'bg3' },
    { id: 'portfolio', label: 'Portfolio', color: 'bg2' },
    { id: 'contact', label: 'Contact', color: 'bg4' },
  ];

  @ViewChild(SassHelperComponent) private sassHelper: SassHelperComponent;
  
  public fragmentColor: string;

  public get fragments(): Fragment[] {
    return HeaderComponent.fragments;
  }

  constructor() {}

  @HostListener("window:scroll", [])
  public onWindowScroll() {
    for(let fragment of this.fragments) {
      const el = document.getElementById(fragment.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
    
        const menuHeight = this.sassHelper.readProperty('menu-height');
        // Only completely visible elements return true:
        //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        const isVisible = elemTop < window.innerHeight && elemBottom >= parseInt(menuHeight);
        if(isVisible) {
          this.fragmentColor = this.sassHelper.readProperty(fragment.color);
          break;
        }  
      }
    }
  }

  public onItemClick() {
    const menu = document.getElementsByClassName('main-menu')[0] as HTMLElement;
    const display = menu.style.display;
    if (display === 'block') {
      menu.style.display = 'none';
    }
  }

  public toggleMenu() {
    const menu = document.getElementsByClassName('main-menu')[0] as HTMLElement;
    const display = menu.style.display;
    if (!display || display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

}
