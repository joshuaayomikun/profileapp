import { Component, OnInit, Input, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
  @Input() public particleParams = {};
  @Input() public particleStyle = {};
  myStyle: object = {};
  myParams: object = {};
  constructor() { }

  ngOnInit() {
    //console.log(Object.keys(this.particleStyle).length)
// tslint:disable-next-line: no-string-literal
    this.myStyle = Object.keys(this.particleStyle).length === 0 ? {
      position: 'absolute',
      width: '100%',
      height: '80vh',
      'z-index': 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    } : this.particleStyle;

    this.myParams = {
      particles: {
        number: {
            value: 50,
        },
        color: {
            value: '#fff'
        },
        shape: {
            type: 'polygon'
        },
      }
    };
  }

}
