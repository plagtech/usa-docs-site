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
.legal-highlight { background: #FEF3C7; border-left: 3px solid #F59E0B; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px; }
.legal-highlight p { margin-bottom: 0; font-weight: 500; color: var(--text); }
.legal-footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); text-align: center; }
.legal-footer p { font-size: 11px; color: var(--muted); }
.legal-footer a { color: var(--blue); text-decoration: none; }
`;

export default function TermsPage() {
  return (
    <>
      <style>{css}</style>
      <div className="legal-page">
        <div className="legal-nav">
          <a href="/" className="legal-brand">USA Docs</a>
          <a href="/" className="legal-back">← Back to home</a>
        </div>

        <h1>Terms of Service</h1>
        <p className="legal-date">Effective Date: April 5, 2026</p>

        <div className="legal-highlight">
          <p>USA Docs is a self-help document preparation service. We are not a law firm. We are not immigration consultants. We are not affiliated with USCIS or any government agency. We do not provide legal advice.</p>
        </div>

        <h2>1. What We Do</h2>
        <p>USA Docs helps you fill out immigration forms based on the information you provide. We take your answers to interview questions and place them into the correct fields on official USCIS forms. We also provide general filing instructions, document checklists, and mailing addresses for your convenience.</p>

        <h2>2. What We Do Not Do</h2>
        <p>We do not advise you on which form to file. We do not determine whether you qualify for any immigration benefit. We do not review your answers for legal accuracy or completeness. We do not represent you before USCIS or any government agency. We do not guarantee that USCIS will approve your application. If you need legal advice, please consult a licensed immigration attorney.</p>

        <h2>3. Your Responsibilities</h2>
        <p>You are responsible for selecting the correct form for your situation. You are responsible for providing accurate and complete information. You are responsible for reviewing your completed form before submitting it to USCIS. You are responsible for including all required supporting documents. You are responsible for paying any USCIS filing fees directly to the government, which are separate from our service fee.</p>

        <h2>4. Pricing and Payment</h2>
        <p>Our document preparation fees range from $49 to $149 depending on the form. Prices are displayed on each form's detail page before you begin. Payment is processed securely through Stripe. The fee you pay to USA Docs covers document preparation only — USCIS filing fees are separate and paid directly to the government.</p>

        <h2>5. Refund Policy</h2>
        <p><strong>All sales are final once your completed documents have been delivered.</strong> Because our service produces a digital product customized with your personal information, we are unable to offer refunds after your documents have been generated and made available for download. If you experience a technical issue that prevents you from receiving your documents, please contact us at usadocs777@gmail.com and we will work to resolve it.</p>

        <h2>6. Limitation of Liability</h2>
        <p>USA Docs provides a document preparation service only. We make no guarantees regarding the outcome of any immigration application. We are not liable for any USCIS decisions, delays, requests for evidence, denials, or other consequences arising from the use of our service. Our total liability to you for any claim arising from our service is limited to the amount you paid for that service.</p>

        <h2>7. Accuracy of Information</h2>
        <p>We rely entirely on the information you provide. We do not independently verify any information you enter. If you provide incorrect or incomplete information, the resulting documents will reflect those errors. We strongly encourage you to review all completed forms carefully before filing them with USCIS.</p>

        <h2>8. Data Handling</h2>
        <p>The personal information you enter during the form preparation process is used solely to generate your completed documents. Please see our <a href="/privacy" style={{color:"#2563eb"}}>Privacy Policy</a> for details on how we handle your data.</p>

        <h2>9. Modifications</h2>
        <p>We may update these Terms of Service from time to time. The effective date at the top of this page indicates when the terms were last revised. Your continued use of our service after any changes constitutes acceptance of the updated terms.</p>

        <h2>10. Contact</h2>
        <p>If you have questions about these terms or our service, please contact us at <a href="mailto:usadocs777@gmail.com" style={{color:"#2563eb"}}>usadocs777@gmail.com</a>.</p>

        <div className="legal-footer">
          <p>USA Docs | <a href="/">usa-docs.com</a> | <a href="/privacy">Privacy Policy</a></p>
          <p>© 2026 USA Docs. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
