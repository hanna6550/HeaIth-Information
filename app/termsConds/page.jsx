import Link from 'next/link'
import React from 'react'


function TermsandConditions() {
  return (
    <div>
  <nav className="bg-blue-400 border-black-200">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="https://healthinfo.com">
        <span className="self-center text-white text-3xl font-semibold whitespace-nowrap pl-10">
          Health-Info
        </span>
      </a>
      <Link className="flex items-center text-xl text-white" href={"/"}>
        LogIn
      </Link>
    </div>
  </nav>

  <div className="mx-10 mt-10 mb-20">
    <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>

    <div className="mx-auto max-w-4xl text-gray-800 space-y-6 text-justify">
      <p>
        Welcome to <strong>Health-Info</strong>. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our platform.
      </p>

      <h2 className="text-2xl font-semibold">1. Health Information Disclaimer</h2>
      <p>
        The content provided on Health-Info is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health professionals regarding medical conditions or treatments.
      </p>

      <h2 className="text-2xl font-semibold">2. No Doctor-Patient Relationship</h2>
      <p>
        Use of this site does not establish a doctor-patient relationship. Health-Info does not offer personalized medical consultations or emergency services.
      </p>

      <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
      <p>
        You agree to use this website only for lawful purposes. You must not misuse the information, disrupt services, or attempt unauthorized access to the site or its systems.
      </p>

      <h2 className="text-2xl font-semibold">4. Content Accuracy</h2>
      <p>
        While we strive to provide accurate and up-to-date health information, Health-Info makes no warranties or guarantees about the completeness, reliability, or accuracy of any content.
      </p>

      <h2 className="text-2xl font-semibold">5. External Links</h2>
      <p>
        Health-Info may contain links to third-party websites. We are not responsible for the content, policies, or practices of any linked sites.
      </p>

      <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and images, is the property of Health-Info and is protected by applicable copyright and intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold">7. Modifications to Terms</h2>
      <p>
        Health-Info reserves the right to modify these terms at any time. Any changes will be effective immediately upon posting. Continued use of the site constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold">8. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of [Your Country or Region], and you agree to submit to the jurisdiction of its courts.
      </p>

      <p className="text-center mt-10 text-sm text-gray-600">
        Last updated: May 2025
      </p>
    </div>
  </div>
</div>
  )
}

export default TermsandConditions