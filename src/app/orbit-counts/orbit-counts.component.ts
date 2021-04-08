import { Component, Input, OnInit } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
}
)


export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {
  }

  ngOnInit() {
  }

  satTypeTotal(category: string): number {
    let count: number = 0;
      for (let type in this.satellites) {
        if (this.satellites[type].type === category) {
          count++;
        }
      }
      return count;
    }
  }
