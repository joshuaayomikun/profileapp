import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSpyDirective]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string;
    const children = this.el.nativeElement.querySelector('.scroll-section').children;
    const scrollTop = event.target.scrollingElement.scrollTop;
    const parentOffset = event.target.scrollingElement.querySelector('.scroll-section').offsetTop;
    const mapOffset = this.el.nativeElement.querySelector('.map').offsetTop;
    const aboutMeMaCard = event.target.scrollingElement.querySelector('.about-me-mat-card').offsetTop;
    // console.log({ parentOffset }, {scrollTop});
    console.log({ScrollingElement: event.target.scrollingElement});
    for (const child of children) {
      const element = child;
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        // console.log({'element-offest': element.offsetTop}, {parentOffset}, {scrollTop}, {aboutMeMaCard});
        if ((element.offsetTop - parentOffset) <= scrollTop ) {
          currentSection = element.id;
          // console.log(element.id);
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
    if (scrollTop >= mapOffset) {
      this.el.nativeElement.querySelector('.map').classList.add('map-fixed');
      this.el.nativeElement.querySelector('.profile-pic-div').classList.add('profile-pic-div-fixed');
    } else {
      this.el.nativeElement.querySelector('.map').classList.remove('map-fixed');
      this.el.nativeElement.querySelector('.profile-pic-div').classList.remove('profile-pic-div-fixed');
    }
  }

}
