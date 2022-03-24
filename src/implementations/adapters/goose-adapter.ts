import { Quackable } from '../../types/quackable'
import { Honkable } from '../../types/goose'
import { BaseDuck } from '../ducks/base-duck'

export class GooseAdapter extends BaseDuck implements Quackable {
  goose: Honkable

  constructor (goose: Honkable) {
    super()
    this.goose = goose
  }

  quack () {
    this.goose.honk()
    this.notify()
  }
}
