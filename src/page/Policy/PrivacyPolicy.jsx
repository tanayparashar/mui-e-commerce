import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/GlobalLayout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div style={{ maxWidth: "700px", margin: "auto", padding: "30px" }}>
        <h1>Privacy Policy</h1>
        <p>
          At Online Aid, we value the privacy and security of our users. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information when you use our services.
        </p>
        <div>
          <h3>Information We Collect:</h3>
          <p>
            We collect and use your personal information to provide and improve
            our Services, to protect the security and integrity of our Services
            and to comply with our legal obligations. To learn more about what
            information we collect and how we use it, see{" "}
            <Link to="/privacy-section">Section 1</Link> and{" "}
            <Link to="/privacy-section">Section 2 </Link>
            below.
          </p>
        </div>
        <div>
          <h3>How We Use Your Information:</h3>
          <p>
            When you access or use the Services or interact with our Sites
            and/or Apps, we collect, use, share, and otherwise process your
            personal information for the purposes described in this policy. To
            the extent required by applicable law, we rely on a number of legal
            bases to use your information in these ways. If you reside outside
            the European Economic Area (“EEA”), Switzerland or the United
            Kingdom (“UK”) (together referred to as the “European Region”), the
            legal bases on which we rely may differ from those listed below.
          </p>
        </div>
        <div>
          <h3>How We Protect Your Information:</h3>
          <p>
            How We Protect Your Information The security of your personal
            information is important to us. We protect your personal information
            through technical and administrative measures designed to mitigate
            the risk of unlawful or unauthorized access, destruction, loss,
            alteration, disclosure or use of your data. To protect your account,
            we encourage you to choose your password carefully and enable two
            factor authentication (2FA) for signing in. You can learn more about
            enhancing your account security in your account settings.
          </p>
          <p>
            We use Google reCAPTCHA Enterprise in connection with our Services
            to help prevent spam, fraud, and abuse. reCAPTCHA Enterprise
            collects hardware and software information, such as device and
            application data, and sends it to Google for purposes of providing,
            maintaining, and improving reCAPTCHA Enterprise and for general
            security purposes. Your use of reCAPTCHA Enterprise is subject to
            Google’s Privacy Policy and Terms of Use.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
