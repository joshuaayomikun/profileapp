import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('static', style({
        color: 'white'
      })),
      state('fixed', style({
        background: 'linear-gradient(135deg, rgba(60, 8, 118) 0%, rgba(250, 0, 118) 100%)',
        color: 'white',
      })), transition('static => fixed', [
        animate('1s')
      ]), transition('fixed => static', [
        animate('1s')
      ])
    ])
  ]
})
export class NavComponent implements OnInit {
  state = 'static';

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const componentPosition = this.navbarOffset(scrollPosition);
    if (scrollPosition >= 70) {
      // console.log({scrollPosition, componentPosition})
      this.el.nativeElement.querySelector('.nav-bar').classList.add('shadow');
      this.state = 'fixed';
    } else {
      this.el.nativeElement.querySelector('.nav-bar').classList.remove('shadow');
      this.state = 'static';
    }

  }
  private navbarOffset(scrollPosition: number) {
// tslint:disable-next-line: max-line-length
    return this.el.nativeElement.querySelector('.nav-bar').getBoundingClientRect().top + scrollPosition - document.documentElement.clientTop;
  }

  ngOnInit() {
  }
}
