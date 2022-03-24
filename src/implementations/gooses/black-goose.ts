import { Honkable } from '../../types/goose'

export class BlackGoose implements Honkable {
  honk () {
    console.log('--- BlackGoose: Bark')
  }
}
