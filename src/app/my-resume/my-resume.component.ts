import { Component, OnInit, ElementRef } from '@angular/core';
import { ResumeService } from '../service/resume.service';
import { WorkHistory } from '../model/work-history';
import { Education } from '../model/education';
import { Certification } from '../model/certification';
import { Training } from '../model/training';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  providers: [ResumeService],
  styleUrls: ['./my-resume.component.css']
})

export class MyResumeComponent implements OnInit {
  myStyle: object = {};
  workHistory: WorkHistory[];
  education: Education[];
  certification: Certification[];
  training: Training[];
  currentSection = 'Paragraph1';
  constructor(private el: ElementRef, private resumeService: ResumeService) { }
  ngOnInit() {

    this.getWorkHistory();
    this.getEducation();
    this.getTraining();
    this.getCertification();
    console.log(this.education);
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

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  getWorkHistory(): void {
    this.resumeService.getWorkHistory()
      .subscribe(workHistory => (this.workHistory = workHistory));
  }

  getEducation(): void {
    this.resumeService.getEducation()
      .subscribe(education => (this.education = education));
  }

  getCertification(): void {
    this.resumeService.getCertification()
      .subscribe(certification => (this.certification = certification));
  }

  getTraining(): void {
    this.resumeService.getTraining()
      .subscribe(training => (this.training = training));
  }

  scrollTo(section: string) {
    const ele = this.el.nativeElement.querySelector('#' + section);
    console.log(this.el);
    if (ele !== null) {
      ele.scrollIntoView();
      document.scrollingElement.scrollTop -= 176;
    }
  }

}
