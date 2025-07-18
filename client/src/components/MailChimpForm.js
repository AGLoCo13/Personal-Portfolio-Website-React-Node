import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';

function MailChimpForm() {
  // const postUrl = [
  //   process.env.REACT_APP_MAILCHIMP_URL,
  //   process.env.REACT_APP_MAILCHIMP_U,
  //   process.env.REACT_APP_MAILCHIMP_ID,
  // ].every(Boolean)
  //   ? `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  //   : console.error(
  //       '📌 Mailchimp env vars missing:',
  //       process.env.REACT_APP_MAILCHIMP_URL,
  //       process.env.REACT_APP_MAILCHIMP_U,
  //       process.env.REACT_APP_MAILCHIMP_ID
  //     ) || '';

  const postUrl = 'https://gmail.us21.list-manage.com/subscribe/post?u=3cd9d25e3d78b5e343abbdd46&id=19fc238ced'; // hardcoded for now
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
}

export default MailChimpForm;
