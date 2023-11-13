import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TableComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private api = 'http://localhost:8000/';
  title = 'angular';
  user = ''

  constructor(private http: HttpClient) { }

  onCreate(form: NgForm) {
    this.http.post(`${this.api}create/`, form.value).subscribe((res) => console.log(res))
    // this.
  }
}