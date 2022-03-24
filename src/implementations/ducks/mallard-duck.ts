import { Quackable } from '../../types/quackable'
import { BaseDuck } from './base-duck'

export class MallardDuck extends BaseDuck implements Quackable {
  quack () {
    console.log('--- MallardDuck: Quack')
    this.notify()
  }
}
