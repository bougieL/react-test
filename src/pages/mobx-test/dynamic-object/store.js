import { observable, computed, action } from 'mobx'

export const store = new (class {
  @observable maxKey = 0
  @observable data = {
    username: '123',
    password: '456'
  }

  @action updateItem = (key, value) => {
    this.data[key] = value
  }

  @action addItem = () => {
    this.data[`new ${++this.maxKey}`] = ''
  }
})()
