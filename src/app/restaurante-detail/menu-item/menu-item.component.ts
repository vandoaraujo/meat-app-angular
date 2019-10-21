import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from "app/restaurante-detail/menu-item/menu-item.model";

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
// Sempre que tiver uma propriedade que o componente parent vai nos informar, precisamos
// marca-la como input
  @Input()  menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
