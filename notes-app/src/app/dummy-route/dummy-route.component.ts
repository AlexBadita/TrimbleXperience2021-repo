import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dummy-route',
  templateUrl: './dummy-route.component.html',
  styleUrls: ['./dummy-route.component.scss']
})
export class DummyRouteComponent implements OnInit {

  id: string;
  text: string;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter.id;
      //this.text = parameter.text;
    })
  }

}
