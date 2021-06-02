import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReportService} from "../service/report.service";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-xml-download',
  templateUrl: './xml-download.component.html',
  styleUrls: ['./xml-download.component.css']
})
export class XmlDownloadComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  downloadXML() {
    this.reportService.getReport(this.range.get('start').value, this.range.get('end').value)
      .subscribe(value => {
        console.log('<==========value============>')
        console.log(value)
        var blob = new Blob(["value.text()"], { type: '' });
        saveAs(blob, 'fileName.xml');
      })
  }

}
