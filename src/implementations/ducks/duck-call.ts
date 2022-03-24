import { Quackable } from '../../types/quackable'
import { BaseDuck } from './base-duck'

export class DuckCall extends BaseDuck implements Quackable {
  quack () {
    console.log('--- DuckCall: Kwak')
    this.notify()
  }
}
