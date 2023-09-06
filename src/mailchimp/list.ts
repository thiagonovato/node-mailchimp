import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAIlCHIMP_API_KEY,
  server: process.env.MAIlCHIMP_SERVER
});

export default class List {
  async ping() {
    return mailchimp.ping.get();
  }
  async getAllLists() {
    return mailchimp.lists.getAllLists()
  }
}