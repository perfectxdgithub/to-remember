type Kind = 'bird' | 'human' | 'dog' | 'fish'

interface IBaseCreatrue {
  kind: Kind
}

class Human implements IBaseCreatrue {
  name: string

  // kind
  kind: Kind

  constructor(name: string, kind: Kind) {
    this.name = name
    this.kind = kind
  }
}

const xd = new Human('xiedong', 'human')
console.log(xd.name)
