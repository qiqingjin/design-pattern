import { Quackable } from '../../types/quackable'
import { BaseDuck } from './base-duck'

export class RubberDuck extends BaseDuck implements Quackable {
  quack () {
    console.log('--- RubberDuck: Squeak')
    this.notify()
  }
}
