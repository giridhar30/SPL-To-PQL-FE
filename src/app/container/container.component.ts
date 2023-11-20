import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { ApiRequest } from '../api-request.model';
import { ApiResponse } from '../api-response.model';
import Swal from 'sweetalert2';
import { PresetService } from '../preset.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  preset: string = "| dataset";
  inputQuery: string = '';
  outputQuery: ApiResponse = {pql_code: ''};
  loading: boolean = false;
  presetNames: string[] = [];

  constructor(private converterService: ConverterService, private presetService: PresetService) { }
  ngOnInit(): void {
    this.presetService.getPresetNames().subscribe(presetNames => {
      this.presetNames = presetNames;
    });
  }

  submitQuery() {
    this.outputQuery = {pql_code: ''};
    this.loading = true;
    if (this.inputQuery == '') {
      Swal.fire({
        icon: "error",
        title: "Empty Query!",
        text: "Please enter the query for conversion!"
      });
      this.loading = false;
      return;
    }
    let apiRequest: ApiRequest = {spl_code: this.inputQuery, preset: this.preset};
    this.converterService.convertSPL(apiRequest).subscribe(pql => {
      this.loading = false;
      this.outputQuery = pql
    });
  }

  reset() {
    this.outputQuery = {pql_code: ''};
    this.inputQuery = '';
  }

}
