import Section from "@/components/Section";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-secondary/30 to-background py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-slate">
          <div className="space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Venturemond ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Information You Provide</h3>
                  <p>When you contact us or use our services, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company or organization name</li>
                    <li>Project details and requirements</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Technical Information</h3>
                  <p>We automatically collect certain information when you visit our website:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Cookies</h3>
                  <p>
                    We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Improve our website and services</li>
                <li>Send you updates about our products and services (with your consent)</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Data Storage & Security */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Sharing of Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Sharing of Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>Law enforcement or government agencies when required by law</li>
                <li>Third parties in connection with a merger, acquisition, or sale of assets (with notice to you)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where we rely on it to process your information</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a href="mailto:hello@venturemond.com" className="text-primary hover:underline">
                    hello@venturemond.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Address:</span> 4th Floor, Bizness Square, Hitec City, Hyderabad – 500084
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
