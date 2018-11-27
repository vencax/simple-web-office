import {observable, action} from 'mobx'

export default class MessageStore {

  @observable messages = observable.map({}, {deep: false})

  @action addMessage(text, type, timeout = 2000) {
    const message = {text, type, timeout}
    this.messages.set(text, message)
    if (timeout > 0) {
      setTimeout(this.removeMessage.bind(this, message), timeout)
    }
    return message
  }

  @action removeMessage(message) {
    this.messages.delete(message.text)
  }

}
