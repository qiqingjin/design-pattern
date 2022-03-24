import { AbstractDuckFactory } from '../../types/abstract-duck-factory'
import { Quackable } from '../../types/quackable'
import { DuckCall } from '../ducks/duck-call'
import { MallardDuck } from '../ducks/mallard-duck'
import { RubberDuck } from '../ducks/rubber-duck'

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck (): Quackable {
    return new MallardDuck()
  }

  createDuckCall (): Quackable {
    return new DuckCall()
  }

  createRubberDuck (): Quackable {
    return new RubberDuck()
  }
}
