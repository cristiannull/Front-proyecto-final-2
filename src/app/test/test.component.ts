import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  private apiUrl = 'http://18.221.10.95:3000/api/videogame';

  constructor(private http: HttpClient) {}

  getVideogamestest(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}