import { Component } from "@angular/core";

export const PREFIX = "--";

@Component({
  selector: 'sass-helper',
  template: '',
})
export class SassHelperComponent {
  constructor() {}

  readProperty(name: string): string {
    let bodyStyles = window.getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(PREFIX + name);
  }

}