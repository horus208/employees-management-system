import {Component, Input, OnInit} from '@angular/core';
import {InfoService} from "./info.service";
import {CardsComponent} from "./cards/cards.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  traces:any[] = [];
  traces200:any[] = [];
  traces400:any[] = [];
  traces404:any[] = [];
  traces500:any[] = [];
  cpuCount?:number;
  systemHealth?:string;
  upTime?:number
  DB?:string;
  diskSpace?:number;

  constructor(private infoService:InfoService) {
  }
  ngOnInit(): void
  {
    this.getTraces();
    this.getSystemInfo();
  }



  private getTraces()
  {
    this.infoService.getTraces().subscribe(
      (response:any)=> {
        this.processTraces(response.traces)
      });
  }
  private processTraces(traces:any)
  {
    this.traces = traces;

    this.traces.forEach(trace=>{
      switch(trace.response.status)
      {
        case 200:
          this.traces200.push(trace);
          break;
        case 400:
          this.traces400.push(trace);
          break;
        case 404:
          this.traces404.push(trace);
          break;

        case 500:
          this.traces500.push(trace);
          break;
      }


    })

  }



  getSystemInfo()
  {
    this.infoService.getCpuCount().subscribe((response)=>{this.cpuCount = response.measurements[0].value;})
    this.infoService.getSystemHealth().subscribe((response)=>{this.systemHealth = response.status;
      this.DB =response.components.db.details.database;
      this.diskSpace = (response.components.diskSpace.details.total)/1073741824;
    })
    this.infoService.getSystemUpTime().subscribe((response)=>{this.upTime = response.measurements[0].value})

  }


  onRefresh() {
    location.reload();
  }
}
