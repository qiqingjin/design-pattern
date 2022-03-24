import { AbstractDuckFactory } from '../../types/abstract-duck-factory'
import { Quackable } from '../../types/quackable'
import { DuckCall } from '../ducks/duck-call'
import { MallardDuck } from '../ducks/mallard-duck'
import { RubberDuck } from '../ducks/rubber-duck'
import { QuackCountDecorator } from '../decorators/quack-count-decorator'

export class QuackCountDecoratorFactory extends AbstractDuckFactory {
  createMallardDuck (): Quackable {
    return new QuackCountDecorator(new MallardDuck())
  }

  createDuckCall (): Quackable {
    return new QuackCountDecorator(new DuckCall())
  }

  createRubberDuck (): Quackable {
    return new QuackCountDecorator(new RubberDuck())
  }

  static getCounter (): number {
    return QuackCountDecorator.counter
  }
}
