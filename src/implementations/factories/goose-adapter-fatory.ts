import { AbstractDuckFactory } from '../../types/abstract-duck-factory'
import { Quackable } from '../../types/quackable'
import { GooseAdapter } from '../adapters/goose-adapter'
import { BlackGoose } from '../gooses/black-goose'
import { GreyGoose } from '../gooses/grey-goose'

export class GooseAdapterFactory extends AbstractDuckFactory {
  createMallardDuck (): Quackable {
    return new GooseAdapter((new GreyGoose()))
  }

  createDuckCall (): Quackable {
    return new GooseAdapter((new BlackGoose()))
  }

  createRubberDuck (): Quackable {
    return new GooseAdapter((new BlackGoose()))
  }
}
