import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReportService} from '../service/report.service';
import { saveAs } from 'file-saver';
import * as _moment from 'moment';
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
  message: string;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  downloadXML(): void {
    console.log('start date');
    console.log(this.range.get('start').value);
    const from = this.range.get('start').value.format('YYYY-MM-DD');
    const to = this.range.get('end').value.format('YYYY-MM-DD');
    this.reportService.getReport(from, to)
      .subscribe(value => {
        this.valid = true;
        const blob = new Blob([value], { type: '' });
        saveAs(blob, 'go_aml_' + from + '_' + to + '.xml');
      }, error => {
        this.valid = false;
        this.message = error.status === 404 ? 'No transactions found' : 'Error Occurred, Try again';
        console.log(error);
      });
  }

}
