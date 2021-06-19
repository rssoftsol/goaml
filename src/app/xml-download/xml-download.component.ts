import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReportService} from '../service/report.service';
import { saveAs } from 'file-saver';
import * as _moment from 'moment';
import { validator } from 'xsd-schema-validator';

// tslint:disable-next-line:no-duplicate-imports

const moment = _moment;
@Component({
  selector: 'app-xml-download',
  templateUrl: './xml-download.component.html',
  styleUrls: ['./xml-download.component.css']
})
export class XmlDownloadComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(moment()),
    end: new FormControl(moment())
  });

  valid = true;
  downloading: boolean;
  messages: string[];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  downloadXML(): void {
    this.valid = true;
    this.downloading = true;
    console.log('start date');
    console.log(this.range.get('start').value);
    const from = this.range.get('start').value.format('YYYY-MM-DD');
    const to = this.range.get('end').value.format('YYYY-MM-DD');
    this.reportService.getReport(from, to)
      .subscribe(data => {
        /*validator.validateXML(value, 'resources/foo.xsd', (err, result) => {
          if (err) {
            throw err;
          }
          result.valid; // true
        });*/
        this.valid = false;
        this.messages = data.errorMessages;
        const blob = new Blob([data.report], { type: '' });
        saveAs(blob, 'go_aml_' + from + '_' + to + '.xml');
        this.downloading = false;
      }, error => {
        this.valid = false;
        this.messages = [error.status === 404 ? 'No transactions found' : 'Error Occurred, Try again'];
        console.log(error);
        this.downloading = false;
      });
  }

}
