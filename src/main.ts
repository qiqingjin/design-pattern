import { DuckSimulator } from './implementations/duck-simulator'
import { DuckFactory } from './implementations/factories/duck-fatory'
import { GooseAdapterFactory } from './implementations/factories/goose-adapter-fatory'
import { QuackCountDecoratorFactory } from './implementations/factories/quack-count-decorator-factory'

const duckSimulator = new DuckSimulator()

/**
 * Test common ducks.
 */
const duckFactory = new DuckFactory()
duckSimulator.simulate(duckFactory)

/**
 * Test duck decorators.
 */
const quackCountDecoratorFactory = new QuackCountDecoratorFactory()
duckSimulator.simulate(quackCountDecoratorFactory)
console.log(`*** The ducks quacked ${QuackCountDecoratorFactory.getCounter()} times`)

/**
 * Test duck adapters.
 */
const gooseAdapterFactory = new GooseAdapterFactory()
duckSimulator.simulate(gooseAdapterFactory)
