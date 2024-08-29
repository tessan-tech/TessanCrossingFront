import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  public DoctorName: string = "";

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.DoctorName = this.route.snapshot.paramMap.get('DoctorName') ?? "";
  }
}
