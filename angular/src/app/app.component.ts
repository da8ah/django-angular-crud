import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormComponent } from "./form/form.component";
import { DjangoService } from './services/django.service';
import { TableComponent } from "./table/table.component";
import { User } from './types/user';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, FormComponent, TableComponent],
  providers: [DjangoService]
})
export class AppComponent {
  private subscription: Subscription = this.service.getData$().subscribe(data => this.data = data);
  data: User[] = []
  user_id = -1
  user: User = {
    id: -1,
    user: '',
    name: '',
    email: '',
    mobile: ''
  }

  constructor(private service: DjangoService) { }

  ngOnInit(): void {
    this.subscription = this.service.getData$().subscribe(data => this.data = data)
    this.onRead()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onCreate(user: User) {
    this.service.create(user)
  }

  onRead() {
    this.service.read()
  }

  setupUpdate(id: number) {
    if (id === -1) this.resetUser()
    this.user_id = id
    this.user = Object.assign({}, this.data.find(item => item.id === id)) || {
      id: -1,
      user: '',
      name: '',
      email: '',
      mobile: ''
    }
  }

  onUpdate(user: User) {
    this.service.update(user, user.id).subscribe((res) => { console.log(res); res.ok && this.service.read() })
  }

  onDelete(id: number) {
    this.service.delete(id)
  }

  resetUser() {
    this.user_id = -1
    this.user = {
      id: -1,
      user: '',
      name: '',
      email: '',
      mobile: ''
    }
    this.service.read()
  }

}