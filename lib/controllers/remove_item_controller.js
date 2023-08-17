import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "list"]
  connect() {
    console.log('hello from removeItemController')
  }

  remove() {
    // this.element #=> the element that contains the data-controller
    this.element.remove()
  }
}
