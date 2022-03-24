import { Observer } from '../../types/observable'
import { Quackable } from '../../types/quackable'
import { DuckObservable } from '../duck-observable'

export class BaseDuck implements Quackable {
  observable: DuckObservable
  constructor () {
    this.observable = new DuckObservable(this)
  }

  register (observer: Observer) {
    this.observable.register(observer)
  }

  notify () {
    this.observable.notify()
  }

  getName (): string {
    return this.constructor.name
  }

  quack () {
    this.notify()
  }
}
