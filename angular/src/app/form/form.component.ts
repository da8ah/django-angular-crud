import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private api = new URL('https://localhost:8000/');
  title = 'angular';

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    this.http.post(`${this.api}create/`, form.value).subscribe((res) => console.log(res))
  }
}