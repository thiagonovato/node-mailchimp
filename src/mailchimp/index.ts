
import List from './list'
const list = new List()

export default class MailchimpClass {
  public async ping() {
    return list.ping()
  }

  public async getList() {
    return list.getAllLists()
  }
}