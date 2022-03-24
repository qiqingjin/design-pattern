export interface Observable {
  register: (observer: Observer) => void
  notify: () => void
}

export interface Observer {
  update: (observable: Observable) => void
}
