import { Component, OnInit, ElementRef, HostListener  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AboutMeService } from '../service/about-me.service';
import { TechSkill } from '../model/tech-skill';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('flyInOut', [
      state('true', style({ transform: 'translateX(0)' })),
      transition('* => true', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s')
      ])
    ]),
    trigger('flyOutIn', [
      state('true', style({ transform: 'translateX(0)' })),
      transition('* => true', [
        style({ transform: 'translateX(100%)' }),
        animate('1s')
      ])
    ]),
    trigger('flyUpIn', [
      state('true', style({ transform: 'translateY(0)' })),
      transition('* => true', [
        style({ transform: 'translateY(100%)' }),
        animate('1s')
      ])
    ])
  ],
  providers: [AboutMeService],
})
export class LandingPageComponent implements OnInit {
   loaded = true;
   onceScrolled = false;
   timesScrolled = 0;
   techSkills: TechSkill[];
    // width: number = 100;
    // height: number = 100;
  constructor(private el: ElementRef, private aboutMeService: AboutMeService) {
    console.log(el);
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const componentPosition = this.heroOffset(scrollPosition);
    if (scrollPosition >= componentPosition * -1) {
      if (this.timesScrolled <= 0) {
        ++this.timesScrolled;
        this.onceScrolled = true;
        console.log(componentPosition * -1);

      }
      // this.el.nativeElement.querySelector('mat-toolbar').classList.add('color-change')
      this.el.nativeElement.querySelector('.hero').classList.add('scrolled');
      // console.log({scrollPosition, componentPosition})
    } else {
      this.el.nativeElement.querySelector('.hero').classList.remove('scrolled');
    }

  }
  private heroOffset(scrollPosition: number) {
    return this.el.nativeElement.querySelector('.hero').getBoundingClientRect().top + scrollPosition - document.documentElement.clientTop;
  }
  sendmail(): string {
    return 'done';
  }
  GetTechSkill() {
    this.aboutMeService.getTechSkill().subscribe( techSkills => this.techSkills = techSkills);
  }
  ngOnInit() {
    this.GetTechSkill();
  }
}
