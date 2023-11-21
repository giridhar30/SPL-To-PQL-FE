import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PresetService } from '../preset.service';

@Component({
  selector: 'app-preset-adder',
  templateUrl: './preset-adder.component.html',
  styleUrls: ['./preset-adder.component.scss']
})
export class PresetAdderComponent implements OnInit {

  presetName: string = '';
  inputPreset: string = '';
  presetNames: string[] = [];

  constructor(private presetService: PresetService) { }

  ngOnInit(): void {
    this.presetService.getPresetNames().subscribe(presetNames => {
      this.presetNames = presetNames;
    });
  }

  reset() {
    this.presetName = '';
    this.inputPreset = '';
  }

  submitPreset() {
    if (this.presetName == '' || this.inputPreset == '') {
      Swal.fire({
        icon: "error",
        title: "Empty Value(s)!",
        text: "Please enter the fields and then submit!"
      });
      this.reset();
      return;
    }

    if (!this.inputPreset.startsWith('[')) {
      Swal.fire({
        icon: "error",
        title: "Invalid preset!",
        text: "Please enter a valid preset value!"
      });
      this.reset();
      return;
    }

    let messages;

    try {
      messages = JSON.parse(this.inputPreset);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Invalid preset!",
        text: "Please enter a valid preset value!"
      });
      this.reset();
      return;
    }
    
    if (this.presetNames.includes(this.presetName)) {
      Swal.fire({
        icon: "error",
        title: "Duplicate preset name!",
        text: "Preset already exists!"
      });
      this.reset();
      return;
    }

    this.presetService.postPreset(this.presetName, messages).subscribe({
      next: response => {
        if (response.success == 'true') {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: response.message
          });
          this.presetNames.push(this.presetName);
          this.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: response.message
          });
          this.reset();
        }
      },
      error: err => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: err
        });
      }
    });
    
  }

}
