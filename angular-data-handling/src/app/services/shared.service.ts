import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private items: string[] = ["Shared Item 1", "Shared Item 2"];

  getItems(): string[] {
    return this.items;
  }

  setItem(item: string): void {
    this.items.push(item);
  }
}
