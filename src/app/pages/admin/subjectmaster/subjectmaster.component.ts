import { Component } from '@angular/core';
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { AddsubjectComponent } from "../addsubject/addsubject.component";
import { AssignsubjectComponent } from "../assignsubject/assignsubject.component";

@Component({
  selector: 'app-subjectmaster',
  imports: [MatCard, MatCardContent, MatTabGroup, MatTab, AddsubjectComponent, AssignsubjectComponent],
  templateUrl: './subjectmaster.component.html',
  styleUrl: './subjectmaster.component.scss'
})
export class SubjectmasterComponent {

}
