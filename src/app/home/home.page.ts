import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;

  constructor(private http: HTTP) { }

  ngOnInit(): void {
    this.testHttp();
  }

  private testHttp = () => {
    this.http.get('url', { param1: 'test' }, { Authorization: 'auth' })
      .then(data => {
        this.data = JSON.stringify(data);
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      }).catch(error => {
        this.data = JSON.stringify(error);
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
      });
  }
}
