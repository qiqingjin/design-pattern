import { Observer } from '../../types/observable'
import { Quackable } from '../../types/quackable'

export class QuackCountDecorator implements Quackable {
  duck: Quackable
  static counter = 0

  constructor (duck: Quackable) {
    this.duck = duck
  }

  register (observer: Observer) {
    this.duck.register(observer)
  }

  notify () {
    this.duck.notify()
  }

  quack () {
    QuackCountDecorator.counter++
    this.duck.quack()
  }

  getName (): string {
    return this.duck.getName()
  }

  static getCounter (): number {
    return QuackCountDecorator.counter
  }
}
