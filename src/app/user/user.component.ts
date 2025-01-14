import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: any = {
    data: {},
    inputerror: {},
    message: '',
    preload: []
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.preload();
  }


  preload() {
    this.httpClient.get('http://localhost:8080/User/preload').subscribe((res: any) => {
      console.log(res)
      this.form.preload = res.result.roleList;
    });
  }

  save() {
    this.httpClient.post('http://localhost:8080/User/save', this.form.data).subscribe((res: any) => {
      console.log('res => ', res)

      this.form.message = '';
      this.form.inputerror = {};

      if (res.result.message) {
        this.form.message = res.result.message;
      }

      if (!res.success) {
        this.form.inputerror = res.result.inputerror;
      }
    });
  }

}