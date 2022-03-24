import { Quackable } from 'src/types/quackable'
import { Observer } from '../../types/observable'

export class Quackologist implements Observer {
  update (duck: Quackable) {
    console.log(`--- Quackologist: ${duck.getName()} just quacked`)
  }
}
