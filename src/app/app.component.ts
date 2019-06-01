import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {};
  items = [];
  a = false;


  ngOnInit() {
  }

  save() {
    if (this.model['text'] !== '') {
      this.items.unshift({ 'text': this.model['text'], 'complete': false });
      this.model['text'] = '';
    }
  }

  clearComplete() {
    console.log(this.items)
    this.items = [];
  }

  clearSelected(elem) {
    this.items = this.items.filter(el => el.text != elem)
    this.save();
  }

}
