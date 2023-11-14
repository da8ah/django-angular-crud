import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../types/user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() user_id = -1
  @Input() user: User = {
    id: -1,
    user: '',
    name: '',
    email: '',
    mobile: ''
  }
  @Output() creator = new EventEmitter<User>()
  @Output() updater = new EventEmitter<User>()
  @Output() reseter = new EventEmitter<number>()
  title = 'angular';

  onCreate(form: NgForm) {
    this.creator.emit(form.value)
  }

  onUpdate() {
    this.updater.emit(this.user)
  }

  resetUpdate() {
    this.reseter.emit(-1)
  }
}