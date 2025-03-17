import mailchimp from '@mailchimp/mailchimp_marketing';
import { config, MailchimpConfig } from '../../../config';

const mailchimpConfig: MailchimpConfig = {
  apiKey: config.mailchimp.apiKey || '',
  server: config.mailchimp.server,
};

mailchimp.setConfig({
  apiKey: mailchimpConfig.apiKey,
  server: mailchimpConfig.server,
});

export default mailchimp;