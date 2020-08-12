import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  constructor() { }

  @Input('moves') moves: [];
  @Input('title') title: string;

  ngOnInit(): void {
  }

}
