import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAIlCHIMP_API_KEY,
  server: process.env.MAIlCHIMP_SERVER
});

export async function callPing() {
  return await mailchimp.ping.get();
}