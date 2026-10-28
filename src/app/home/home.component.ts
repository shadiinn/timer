import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  count=signal(0);
  timer:any;
  isrunning=false;

  start(){
    this.isrunning=true;
    this.timer=setInterval(()=>{
      this.count.update(a=>a+1);
    },1000)
  }

  stop(){
    this.isrunning=false;
    clearInterval(this.timer);
  }
  reset(){
    this.isrunning=false;
    this.stop();
    this.count.set(0);

  }
}
