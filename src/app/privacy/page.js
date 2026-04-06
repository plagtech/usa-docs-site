"use client";

const css = `
:root {
  --bg: #f8fafc; --card: #ffffff; --text: #1a1a2e; --text2: #4a5568; --muted: #94a3b8;
  --blue: #2563eb; --blue-dark: #1d4ed8;
  --border: #e2e8f0; --shadow: 0 1px 3px rgba(0,0,0,.06);
  --radius: 12px;
  --body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --display: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--body); background: var(--bg); color: var(--text); }

.legal-page { max-width: 720px; margin: 0 auto; padding: 48px 24px 80px; }
.legal-nav { display: flex; align-items: center; gap: 12px; margin-bottom: 36px; }
.legal-brand { font-family: var(--display); font-size: 18px; font-weight: 800; color: var(--blue); text-decoration: none; }
.legal-back { font-size: 13px; color: var(--muted); text-decoration: none; }
.legal-back:hover { color: var(--blue); }
.legal-page h1 { font-family: var(--display); font-size: 28px; font-weight: 800; margin-bottom: 6px; }
.legal-date { font-size: 13px; color: var(--muted); margin-bottom: 32px; }
.legal-page h2 { font-size: 18px; font-weight: 700; margin-top: 32px; margin-bottom: 12px; color: var(--text); }
.legal-page p { font-size: 14px; line-height: 1.8; color: var(--text2); margin-bottom: 16px; }
.legal-page strong { color: var(--text); }
.legal-highlight { background: #DBEAFE; border-left: 3px solid #2563eb; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px; }
.legal-highlight p { margin-bottom: 0; font-weight: 500; color: var(--text); }
.legal-footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); text-align: center; }
.legal-footer p { font-size: 11px; color: var(--muted); }
.legal-footer a { color: var(--blue); text-decoration: none; }
`;

export default function PrivacyPage() {
  return (
    <>
      <style>{css}</style>
      <div className="legal-page">
        <div className="legal-nav">
          <a href="/" className="legal-brand">USA Docs</a>
          <a href="/" className="legal-back">← Back to home</a>
        </div>

        <h1>Privacy Policy</h1>
        <p className="legal-date">Effective Date: April 5, 2026</p>

        <div className="legal-highlight">
          <p>Your privacy matters to us. We understand the sensitivity of immigration-related personal information and take steps to protect it.</p>
        </div>

        <h2>1. Information We Collect</h2>
        <p>When you use USA Docs to prepare an immigration form, we collect the information you enter during the interview process. This may include your name, date of birth, address, A-Number, country of birth, and other details required by the specific USCIS form you are preparing. We also collect your email address and payment information when you make a purchase.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information you provide for one purpose: to generate your completed USCIS form and accompanying filing instructions. Your payment information is processed by Stripe, our payment processor — we never see or store your credit card number. We may use your email address to deliver your documents or respond to support requests.</p>

        <h2>3. How We Store Your Information</h2>
        <p>Your form answers are temporarily stored on our secure server for the purpose of generating your documents. This data is held in memory during your session and is automatically deleted. We do not maintain a permanent database of your immigration information. Payment records are maintained by Stripe in accordance with their privacy policy.</p>

        <h2>4. Information We Do Not Collect</h2>
        <p>We do not use cookies for advertising or tracking. We do not build profiles about you. We do not collect information from third parties about you. We do not use your data for marketing purposes unless you have separately opted in.</p>

        <h2>5. Who We Share Your Information With</h2>
        <p><strong>We do not sell, rent, or share your personal information with anyone.</strong> The only third party that receives any of your data is Stripe, which processes your payment. We do not share your immigration information with any government agency, employer, or other third party. Your information is not disclosed unless required by law.</p>

        <h2>6. Data Security</h2>
        <p>We use industry-standard security measures to protect your information during transmission and storage. All data is transmitted over encrypted HTTPS connections. Our servers are hosted by Railway, which maintains physical and network security controls. However, no system is perfectly secure, and we cannot guarantee absolute security.</p>

        <h2>7. Your Rights</h2>
        <p>You have the right to request deletion of any personal information we may hold about you. You have the right to know what information we have collected. You have the right to opt out of any future communications. To exercise any of these rights, contact us at <a href="mailto:usadocs777@gmail.com" style={{color:"#2563eb"}}>usadocs777@gmail.com</a>.</p>

        <h2>8. Children's Privacy</h2>
        <p>USA Docs is not intended for use by children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it.</p>

        <h2>9. California Residents</h2>
        <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). You have the right to know what personal information we collect, the right to request deletion, and the right to opt out of the sale of personal information. We do not sell personal information. To make a request, contact us at <a href="mailto:usadocs777@gmail.com" style={{color:"#2563eb"}}>usadocs777@gmail.com</a>.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The effective date at the top of this page indicates when the policy was last revised. Your continued use of our service after any changes constitutes acceptance of the updated policy.</p>

        <h2>11. Contact</h2>
        <p>If you have questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:usadocs777@gmail.com" style={{color:"#2563eb"}}>usadocs777@gmail.com</a>.</p>

        <div className="legal-footer">
          <p>USA Docs | <a href="/">usa-docs.com</a> | <a href="/terms">Terms of Service</a></p>
          <p>© 2026 USA Docs. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
