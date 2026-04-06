"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const API_URL = "https://usa-docs-api-production.up.railway.app";

const FORM_NAMES = {
  i90: "I-90 — Renew or Replace Green Card",
  i130: "I-130 — Petition for Alien Relative",
  n400: "N-400 — Application for U.S. Citizenship",
  i485: "I-485 — Apply for a Green Card",
  i765: "I-765 — Work Permit (EAD)",
  i821d: "I-821D — DACA Renewal",
  i751: "I-751 — Remove Conditions on Green Card",
  i131: "I-131 — Travel Document",
  i129f: "I-129F — Fiancé(e) Visa (K-1)",
};

const css = `
:root {
  --bg: #f8fafc; --card: #ffffff; --text: #1a1a2e; --text2: #4a5568; --muted: #94a3b8;
  --blue: #2563eb; --blue-light: #eff6ff; --blue-dark: #1d4ed8;
  --green: #059669; --green-light: #ecfdf5;
  --red: #dc2626; --red-light: #fef2f2;
  --border: #e2e8f0; --shadow: 0 1px 3px rgba(0,0,0,.06);
  --shadow-md: 0 4px 12px rgba(0,0,0,.08);
  --radius: 12px;
  --body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --display: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--body); background: var(--bg); color: var(--text); }

.success-page {
  max-width: 600px; margin: 0 auto; padding: 48px 24px; min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.success-icon { font-size: 64px; margin-bottom: 16px; }
.success-page h1 { font-family: var(--display); font-size: 28px; font-weight: 700; margin-bottom: 8px; text-align: center; }
.success-page .subtitle { color: var(--text2); font-size: 15px; text-align: center; margin-bottom: 32px; line-height: 1.6; }
.success-page .form-badge {
  display: inline-block; background: var(--blue-light); color: var(--blue); font-size: 13px;
  font-weight: 600; padding: 6px 14px; border-radius: 8px; margin-bottom: 24px;
}

.download-card {
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 24px; width: 100%; box-shadow: var(--shadow); margin-bottom: 16px;
}
.download-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
.download-card p { font-size: 13px; color: var(--muted); margin-bottom: 16px; line-height: 1.5; }

.dl-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; padding: 14px; border-radius: var(--radius); border: none;
  font-size: 15px; font-weight: 600; cursor: pointer; font-family: var(--body);
  transition: all .2s; text-decoration: none;
}
.dl-btn.primary { background: var(--blue); color: white; box-shadow: var(--shadow-md); }
.dl-btn.primary:hover { background: var(--blue-dark); }
.dl-btn.secondary { background: var(--green-light); color: var(--green); border: 1px solid var(--green); }
.dl-btn.secondary:hover { background: var(--green); color: white; }
.dl-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.status-msg { font-size: 13px; color: var(--muted); text-align: center; margin-top: 8px; }
.error-box {
  background: var(--red-light); border: 1px solid var(--red); border-radius: var(--radius);
  padding: 20px; text-align: center; color: var(--red); margin-bottom: 20px;
}

.spinner {
  width: 40px; height: 40px; border: 3px solid var(--border); border-top-color: var(--blue);
  border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 16px;
}
@keyframes spin { to { transform: rotate(360deg); } }

.back-link {
  margin-top: 24px; color: var(--blue); font-size: 14px; text-decoration: none;
  cursor: pointer; font-family: var(--body);
}
.back-link:hover { text-decoration: underline; }

.foot-warn {
  margin-top: 40px; padding: 16px; background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); text-align: center;
}
.foot-warn p { font-size: 11px; color: var(--muted); line-height: 1.6; }
`;

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const formId = searchParams.get("form");

  const [status, setStatus] = useState("verifying"); // verifying, paid, error
  const [downloading, setDownloading] = useState(null); // null, "form", "instructions"
  const [error, setError] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      setError("No payment session found. Please go back and try again.");
      return;
    }
    verifyPayment();
  }, [sessionId]);

  const verifyPayment = async () => {
    try {
      const res = await fetch(`${API_URL}/api/verify-payment/${sessionId}`);
      const data = await res.json();
      if (data.paid) {
        setStatus("paid");
        setPaymentInfo(data);
      } else {
        setStatus("error");
        setError("Payment has not been completed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Could not verify payment. Please refresh the page or contact support.");
    }
  };

  const downloadPDF = async (type) => {
    setDownloading(type);
    try {
      const res = await fetch(
        `${API_URL}/api/generate-pdf/${sessionId}?type=${type}`
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Download failed");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        type === "instructions"
          ? `${(formId || "form").toUpperCase()}_Filing_Instructions.pdf`
          : `${(formId || "form").toUpperCase()}_Completed.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to download. Please try again.");
    }
    setDownloading(null);
  };

  const formName = FORM_NAMES[formId] || formId?.toUpperCase() || "Your Form";

  return (
    <>
      <style>{css}</style>
      <div className="success-page">
        {status === "verifying" && (
          <>
            <div className="spinner" />
            <h1>Verifying Payment...</h1>
            <p className="subtitle">Please wait while we confirm your payment with Stripe.</p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="success-icon">❌</div>
            <h1>Something Went Wrong</h1>
            <div className="error-box">{error}</div>
            <a className="back-link" href="/">← Go back to USA Docs</a>
          </>
        )}

        {status === "paid" && (
          <>
            <div className="success-icon">✅</div>
            <h1>Payment Confirmed!</h1>
            <div className="form-badge">{formName}</div>
            <p className="subtitle">
              Your payment has been verified. Download your completed form and filing
              instructions below. Print the form, sign it, and mail it to USCIS with
              the documents listed in your filing checklist.
            </p>

            <div className="download-card">
              <h3>📄 Your Completed Form</h3>
              <p>
                The official USCIS form filled out with your answers. Print this,
                sign where indicated, and include it in your filing package.
              </p>
              <button
                className="dl-btn primary"
                onClick={() => downloadPDF("form")}
                disabled={downloading !== null}
              >
                {downloading === "form" ? "Generating..." : "Download Completed Form (PDF)"}
              </button>
              {downloading === "form" && (
                <p className="status-msg">
                  Generating your form — this may take up to 30 seconds...
                </p>
              )}
            </div>

            <div className="download-card">
              <h3>📋 Filing Instructions & Checklist</h3>
              <p>
                Step-by-step instructions: where to mail your form, what documents to
                include, USCIS fees to pay, and estimated processing times.
              </p>
              <button
                className="dl-btn secondary"
                onClick={() => downloadPDF("instructions")}
                disabled={downloading !== null}
              >
                {downloading === "instructions"
                  ? "Generating..."
                  : "Download Filing Checklist (PDF)"}
              </button>
            </div>

            <a
              href={`https://www.uscis.gov/${formId ? formId.replace(/(\d)/,'$1').replace('n','n-') : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="back-link"
              style={{ marginTop: 16 }}
            >
              Visit USCIS.gov for official info →
            </a>
            <a className="back-link" href="/">
              ← Fill out another form
            </a>
          </>
        )}

        <div className="foot-warn">
          <p>
            USA Docs is a document preparation service. We are not lawyers.
            We are not a government agency. We do not give legal advice.
          </p>
          <p style={{ marginTop: 8 }}>
            <a href="/terms" style={{ color: "#2563eb", textDecoration: "none", fontSize: 11, marginRight: 12 }}>Terms of Service</a>
            <a href="/privacy" style={{ color: "#2563eb", textDecoration: "none", fontSize: 11 }}>Privacy Policy</a>
          </p>
          <p style={{ marginTop: 6 }}>
            Questions? <a href="mailto:usadocs777@gmail.com" style={{ color: "#2563eb", textDecoration: "none" }}>usadocs777@gmail.com</a>
          </p>
          <p style={{ marginTop: 6 }}>© 2026 USA Docs</p>
        </div>
      </div>
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <>
          <style>{css}</style>
          <div className="success-page">
            <div className="spinner" />
            <h1>Loading...</h1>
          </div>
        </>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
