import { AbstractDuckFactory } from '../types/abstract-duck-factory'
import { Quackable } from '../types/quackable'
import { DuckFlock } from './flocks/duck-flock'
import { Quackologist } from './observers/quackologist'

export class DuckSimulator {
  simulate (duck: Quackable)
  simulate (duckFactory: AbstractDuckFactory)
  simulate (param?: Quackable | AbstractDuckFactory) {
    if (!param) {
      return
    }
    if (this.isQuackable(param)) {
      param.quack()
    } else {
      const duckFactory = param

      /**
       * The structure of `mallardDuckFlock`:
       * - mallardDuckFlock
       *   - mallardDuck1
       *   - mallardDuck2
       */
      const mallardDuckFlock = new DuckFlock()
      const mallardDuck1 = duckFactory.createMallardDuck()
      const mallardDuck2 = duckFactory.createMallardDuck()
      mallardDuckFlock.add([mallardDuck1, mallardDuck2])

      /**
       * The structure of `duckFlock`:
       * - duckFlock
       *   - duckCall
       *   - rubberDuck
       *   - mallardDuckFlock
       */
      const duckFlock = new DuckFlock()
      const duckCall = duckFactory.createDuckCall()
      const rubberDuck = duckFactory.createRubberDuck()
      duckFlock.add([duckCall, rubberDuck, mallardDuckFlock])

      /**
       * Quackologist listens `mallardDuckFlock` and `rubberDuck`.
       */
      const quackologist = new Quackologist()
      mallardDuckFlock.register(quackologist)
      rubberDuck.register(quackologist)

      console.log('===== Duck Simulator start =====')

      this.simulate(duckFlock)

      console.log('===== Duck Simulator end =====')
    }
  }

  private isQuackable (duck): duck is Quackable {
    return !!duck?.quack
  }
}
