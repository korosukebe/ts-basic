export default class World {
  message: string

  constructor (message: string) {
    this.message = message
  }

  public sayHello (elem: HTMLElement | null): void {
    if (elem != null) {
      elem.innerText = this.message
    }
  }
}
