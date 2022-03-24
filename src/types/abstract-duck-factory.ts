import { Quackable } from './quackable'

export abstract class AbstractDuckFactory {
  abstract createMallardDuck (): Quackable
  abstract createDuckCall (): Quackable
  abstract createRubberDuck (): Quackable
}
