import React from "react";
import { Box } from "@mui/material";
import Layout from "../../layout/GlobalLayout/Layout";

function TermsOfUse() {
  return (
    <Layout>
      <div style={{ maxWidth: "700px", margin: "auto", padding: "30px" }}>
        <h1>Terms of Use</h1>
        <p>
          Welcome to OnlineAid! These terms of use outline the rules and
          regulations for the use of our website.
        </p>

        <p>
          By accessing this website, we assume you accept these terms of use in
          full. Do not continue to use OnlineAid's website if you do not accept
          all of the terms and conditions stated on this page.
        </p>

        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By using OnlineAid's website, you
          consent to the use of cookies in accordance with OnlineAid's privacy
          policy. Most modern-day interactive websites use cookies to enable us
          to retrieve user details for each visit. Cookies are used in some
          areas of our site to enable the functionality of this area and ease of
          use for those people visiting.
        </p>

        <h2>License</h2>
        <p>
          Unless otherwise stated, OnlineAid and/or its licensors own the
          intellectual property rights for all material on OnlineAid. All
          intellectual property rights are reserved. You may view and/or print
          pages from https://onlineaid.vercel.app for your own personal use
          subject to restrictions set in these terms of use.
        </p>

        <p>You must not:</p>
        <Box sx={{ pl: 4 }}>
          <ul>
            <li>Republish material from https://onlineaid.vercel.app</li>
            <li>
              Sell, rent, or sub-license material from
              https://onlineaid.vercel.app
            </li>
            <li>
              Reproduce, duplicate, or copy material from
              https://onlineaid.vercel.app
            </li>
            <li>
              Redistribute content from OnlineAid (unless content is
              specifically made for redistribution)
            </li>
          </ul>
        </Box>

        <h2>User Comments</h2>
        <p>This Agreement shall begin on the date hereof.</p>

        <p>
          Certain parts of this website offer the opportunity for users to post
          and exchange opinions, information, material, and data ("Comments") in
          areas of the website. OnlineAid does not screen, edit, publish, or
          review Comments before their appearance on the website and Comments do
          not reflect the views or opinions of OnlineAid, its agents, or
          affiliates. Comments reflect the view and opinion of the person who
          posts such views or opinions. To the extent permitted by applicable
          laws, OnlineAid shall not be responsible or liable for the Comments or
          for any loss, cost, liability, or damages caused or incurred as a
          result of any use of and/or posting of and/or appearance of the
          Comments on this website.
        </p>

        <p>
          OnlineAid reserves the right to monitor all Comments and to remove any
          Comments which it considers in its absolute discretion to be
          inappropriate, offensive, or otherwise in breach of these Terms of
          Use.
        </p>

        <p>You warrant and represent that:</p>
        <Box sx={{ pl: 4 }}>
          <ul>
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so
            </li>
            <li>
              The Comments do not infringe any intellectual property right,
              including without limitation copyright, patent, or trademark, or
              other proprietary right of any third party
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent, or otherwise unlawful
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity
            </li>
          </ul>
        </Box>

        <p>
          You hereby grant OnlineAid a non-exclusive license to use, reproduce,
          edit, and authorize others to use, reproduce, and edit any of your
          Comments in any and all forms, formats, or media.
        </p>

        <h2>Changes to the Terms</h2>
        <p>
          We may update these Terms from time to time, including by adding
          entirely new terms and deleting existing terms. If the changes are
          material, we’ll let you know in advance by posting the changes through
          the Services and/or sending you an email or message about the changes.
          Your use of the Services after the effective date of the changes
          constitutes your acceptance of the updated Terms. If you do not agree
          with the changes, you may close your account.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about the Terms, please email us at
          onlineaid.info@gmail.com
        </p>

        <h2>Don’t Use Our Services to Break the Law.</h2>
        <p>
          You agree that you will not violate any laws in connection with your
          use of the Services. This includes any local, state, federal, and
          international laws that may apply to you. For example, it’s your
          responsibility to obtain any permits or licenses that your shop
          requires, and to meet applicable legal requirements in applicable
          jurisdiction(s). This includes the sale and delivery of your items,
          such as age verification upon delivery, where required by law. You may
          not sell anything that violates any laws; you must comply with our
          Sanctions Policy, and you may not engage in fraud (including false
          claims or infringement notices), theft, anti-competitive conduct,
          threatening conduct, or any other unlawful acts or crimes against
          OnlineAid, another OnlineAid user, or a third party.
        </p>
      </div>
    </Layout>
  );
}

export default TermsOfUse;
