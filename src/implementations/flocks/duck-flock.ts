import { Observer } from '../../types/observable'
import { Quackable } from '../../types/quackable'

export class DuckFlock implements Quackable {
  ducks: Quackable[] = []

  add (ducks: Quackable[]) {
    this.ducks = this.ducks.concat(ducks)
  }

  register (observer: Observer) {
    this.ducks.forEach(d => d.register(observer))
  }

  notify () {
    this.ducks.forEach(d => d.notify())
  }

  quack () {
    this.ducks.forEach(d => d.quack())
  }

  getName (): string {
    return this.ducks.reduce((name, duck) => `${name} ${duck.getName()}`, '')
  }
}
