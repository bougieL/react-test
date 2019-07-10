import { observable, computed, action } from 'mobx'

export const store = new (class {
  @observable data = [
    {
      data: {
        data: [
          {
            username: '123',
            password: '456'
          }
        ]
      }
    }
  ]

  @computed get username() {
    return this.data[0].data.data[0].username
  }

  @computed get password() {
    return this.data[0].data.data[0].password
  }

  @action updateUsername = (str) => {
    this.data[0].data.data[0].username = str
  }

  @action updatePassword = (str) => {
    this.data[0].data.data[0].password = str
  }
})()
