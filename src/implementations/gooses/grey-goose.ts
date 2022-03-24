import { Honkable } from '../../types/goose'

export class GreyGoose implements Honkable {
  honk () {
    console.log('--- GreyGoose: Honk')
  }
}
