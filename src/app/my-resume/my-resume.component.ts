import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {
  myStyle: object = {};
  constructor(private el: ElementRef) { }
  currentSection = 'Paragraph1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    const ele = this.el.nativeElement.querySelector('#' + section);
    console.log(this.el);
    if(ele !== null){
      ele.scrollIntoView();
      document.scrollingElement.scrollTop -= 176;
    }
  }
  ngOnInit() {
    this.myStyle = {
      position: 'absolute',
      width: '100%',
      height: '40vh',
      'z-index': 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
  }

}
