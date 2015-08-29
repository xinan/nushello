'use strict';
import React from 'react';

import Footer from 'components/layout/footer/footer.jsx';

require('./privacy.scss');

export default class PrivacyPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="row privacy-wrapper">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="card">
              <div className="header">
                <h2 className="title" id="title">Privacy Policy</h2>
                </div>
              <div className="content">
                <p>This Privacy Policy describes how users’ personal information is handled in order to engage in the services available on our application. It applies generally to web pages where this policy appears in the footer. By accepting the Privacy Policy, you express consent to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy. This Privacy Policy is effective upon acceptance for new users and is otherwise effective on August 12, 2015.</p>

                <h3>Definitions</h3>
                <ol>
                  <li>References to ”Our”, ”We”, ”Us” and <strong>NUSHello</strong> shall be references to <strong>NUSHello</strong></li>
                  <li>References to ”You”, ”Users” and ”Your” shall mean references to user(s) visit- ing this web site, as the context requires.</li>
                </ol>

                <h3>Information Collection</h3>
                <p>Browsing our websites does not require your identities to be revealed. However, under the following circumstances, you are not anonymous to us.</p>

                <h3>User</h3>
                <p>We will ask for your personal information. The personal information collected in- cludes but not restricting to the following:</p>
                <ol>
                  <li>Private information such as name and birthdate</li>
                  <li>Contact information such as email address, mobile number and physical address</li>
                  <li>Additional information which we may ask for if we believe the site policies are violated</li>
                </ol>

                <p>Once you log into the account, your identity will be revealed to us.</p>

                <h3>Information Usage</h3>
                <p>The primary purpose in collecting personal information is to provide the users with a smooth and customized experience.</p>
                <p>We will use the information collected for the following purposes</p>

                <ol>
                  <li>To provide its intended services</li>
                  <li>To resolve disputes, and troubleshoot problems and errors</li>
                  <li>To assist in law enforcement purposes and prevent/restrict the occurrences of potentially illegal or prohibited activities</li>
                </ol>

                <h3>Disclosure of information</h3>
                <p>We may share information with governmental agencies or other companies assisting us in fraud prevention or investigation. We may do so when:</p>

                <ol>
                  <li>Permitted or required by law; or,</li>
                  <li>Trying to protect against or prevent actual or potential fraud or unauthorized transactions; or,</li>
                  <li>Investigating fraud which has already taken place.</li>
                </ol>

                <p>The information is not provided to these companies for marketing purposes.</p>

                <h3>Usage of Cookies</h3>
                <p>Cookies are small files placed in your computer hard drives. We use it to analyse our site traffic. We have also used cookies to maintain your signed in status when you login to our websites.</p>

                <h3>Commitment to Data Security</h3>
                <p>Your personally identifiable information is kept secure. Only authorized employees, agents and contractors (who have agreed to keep information secure and confidential) have access to this information. All emails and newsletters from this site allow you to opt out of further mailings.</p>

                <h3>Changes to the Policies</h3>
                <p>We reserved the rights to amend this Privacy Policy at any time. Upon posting of new policies, it will take immediate effect. We may notify you should there be any major changes to the policies.</p>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}
