import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "custom-pin",
  templateUrl: "pin.html"
})
export class PinComponent {
  @Input() pagetitle: String = "Enter Pin";

  pin:string= "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  emitEvent() {
    this.change.emit(this.pin);
  }

  handleInput(pin: string) {
    if (pin === "clear") {
      this.pin = "";
      return;
    }

    if (this.pin.length === 4) {
      return;
    }
    this.pin += pin;
  }
}