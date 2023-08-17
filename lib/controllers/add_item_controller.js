import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "list"]
  connect() {
    console.log(this.element.innerHTML)
  }
  create (event) {
    event.preventDefault();
    // console.log(this.inputTarget.value);
    const item = this.inputTarget.value;
    const listItem = `<li class="list-group-item" data-controller="remove-item">${item}<button class="btn btn-danger"  data-action='click->remove-item#remove'>Remove</button></li>`;
    this.listTarget.insertAdjacentHTML('beforeend', listItem);
  }
}
