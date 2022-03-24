import { Observable } from './observable'

export interface Quackable extends Observable {
  quack: () => void
  getName: () => string
}
