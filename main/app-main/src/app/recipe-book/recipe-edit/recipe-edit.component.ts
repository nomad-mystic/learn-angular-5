import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  protected id: number;
  protected editMode: false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (!_.isUndefined(params['id']) && _.isSet(params['id']) && !_.isNil(params['id']) && !_.isEmpty(params['id'])) {
            this.id = +params['id'];
            this.editMode = params['id'] !== null;
          }
        }
      );
  }

}
