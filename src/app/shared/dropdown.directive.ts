import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // dropdownOpened = false;

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // @HostListener('click') openDropdown() {
  //   if (!this.dropdownOpened) {
  //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //     this.dropdownOpened = true;
  //   } else {
  //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //     this.dropdownOpened = false;
  //   }
  // }

  @HostBinding('class.open') dropOpened = false;
  @HostListener('document:click', ['$event']) openDropdown(event: Event) {
    this.dropOpened = this.elRef.nativeElement.contains(event.target)
      ? !this.dropOpened
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
