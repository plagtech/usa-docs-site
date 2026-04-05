export const metadata = {
  title: "USA Docs — Immigration Document Preparation",
  description: "We help you fill out immigration forms. Answer simple questions, get your forms ready to file. Available in English, Spanish, Vietnamese, Korean, Chinese, and Tagalog.",
  keywords: "immigration forms, USCIS, document preparation, green card, citizenship, work permit, DACA, visa, I-130, N-400, I-485",
  openGraph: {
    title: "USA Docs — Immigration Document Preparation",
    description: "We help you fill out immigration forms. Answer simple questions, get your forms ready to file.",
    url: "https://usa-docs.com",
    siteName: "USA Docs",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
