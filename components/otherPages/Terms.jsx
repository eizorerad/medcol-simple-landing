import React from "react";

export default function Terms() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Terms of Service</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and
              use of the Medcol platform, website, and related services
              (collectively, the &quot;Service&quot;) provided by Medcol FZCO, a
              company registered in Dubai Silicon Oasis, Technohub 1b, Dubai,
              United Arab Emirates (&quot;Medcol&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;). By accessing or using the
              Service, you agree to be bound by these Terms.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              1. Description of Service
            </h3>
            <p>
              Medcol provides an AI-powered pre-visit preparation platform
              designed for healthcare providers and their patients. The Service
              enables patients to share their medical history, symptoms, and
              concerns prior to clinical visits, and generates structured
              clinician-ready summaries to improve visit quality and efficiency.
            </p>
            <p>
              Medcol is not a medical device, does not provide medical diagnoses,
              and is not a substitute for professional medical advice, diagnosis,
              or treatment. The Service is intended to support—not replace—the
              clinical judgment of licensed healthcare professionals.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              2. Eligibility and Account Registration
            </h3>
            <p>
              The Service is available to healthcare organizations, licensed
              clinicians, and patients who are invited by their healthcare
              providers. By creating an account, you represent that: (a) you are
              at least 18 years of age; (b) the information you provide is
              accurate and complete; and (c) you will maintain the security of
              your account credentials.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              3. Acceptable Use
            </h3>
            <p>You agree not to:</p>
            <ul className="list list-bullets">
              <li>
                Use the Service for any unlawful purpose or in violation of
                applicable healthcare regulations.
              </li>
              <li>
                Submit false, misleading, or fabricated medical information.
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or extract source code
                from the Service or its AI models.
              </li>
              <li>
                Access or attempt to access another user&apos;s account or data
                without authorization.
              </li>
              <li>
                Use the Service to store or transmit malicious code or content.
              </li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              4. Intellectual Property
            </h3>
            <p>
              All rights, title, and interest in and to the Service, including
              all software, AI models, algorithms, designs, text, graphics, and
              other content, are and remain the exclusive property of Medcol FZCO
              or its licensors. Nothing in these Terms grants you any right to
              use Medcol&apos;s trademarks, logos, or brand features without
              prior written consent.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              5. Data Ownership
            </h3>
            <p>
              Patient data submitted through the Service remains the property of
              the patient and/or the healthcare organization. Medcol processes
              this data solely to provide and improve the Service, in accordance
              with our Privacy Policy and applicable data protection laws.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              6. Disclaimers
            </h3>
            <p>
              The Service is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. Medcol makes no warranties, express or
              implied, regarding the accuracy, reliability, or completeness of
              AI-generated summaries. Healthcare providers are solely responsible
              for verifying all clinical information and exercising independent
              medical judgment.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              7. Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by applicable law, Medcol FZCO
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits,
              revenue, data, or business opportunities arising out of or related
              to your use of the Service. Medcol&apos;s total aggregate
              liability shall not exceed the amount paid by you to Medcol in the
              twelve (12) months preceding the claim.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              8. Termination
            </h3>
            <p>
              We may suspend or terminate your access to the Service at any time
              for violation of these Terms or for any other reason at our
              discretion, with reasonable notice where practicable. Upon
              termination, your right to use the Service ceases immediately, and
              we will handle your data in accordance with our Privacy Policy.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              9. Governing Law and Dispute Resolution
            </h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United Arab Emirates as applied in the Emirate of
              Dubai. Any disputes arising out of or in connection with these
              Terms shall be subject to the exclusive jurisdiction of the courts
              of Dubai, UAE.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              10. Changes to These Terms
            </h3>
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes by posting the updated Terms on our website and
              updating the &quot;Last updated&quot; date below. Your continued
              use of the Service after such changes constitutes acceptance of the
              revised Terms.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              11. Contact Information
            </h3>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Medcol FZCO</strong>
              <br />
              Dubai Silicon Oasis, Technohub 1b
              <br />
              Dubai, United Arab Emirates
              <br />
              Email: leo@medcol.io
            </p>
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: 9 Feb, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
