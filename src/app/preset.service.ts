import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresetService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://127.0.0.1:5000/"

  getPresetNames() {
    return this.http.get<any[]>(this.baseURL + 'preset')
  }

  postPreset(presetName: string, presetValue: any[]) {
    return this.http.post<any>(this.baseURL + 'preset', {name: presetName, messages: presetValue})
  }

}
