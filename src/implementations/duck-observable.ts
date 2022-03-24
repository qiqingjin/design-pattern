import { Quackable } from 'src/types/quackable'
import { Observable, Observer } from '../types/observable'

export class DuckObservable implements Observable {
  observers: Observer[] = []
  duck: Quackable

  constructor (duck: Quackable) {
    this.duck = duck
  }

  register (observer: Observer) {
    this.observers = this.observers.concat(observer)
  }

  notify () {
    this.observers.forEach(o => o.update(this.duck))
  }
}
