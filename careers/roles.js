/**
 * ConciergeGh — open roles (single source of truth)
 * ------------------------------------------------------------------
 * Add, edit or close a role by editing this array only — no layout changes.
 *   - To CLOSE a role: set  published: false
 *     (the overview drops its card, and the role page shows a
 *      "this role has been filled" note instead of 404-ing old links).
 *   - To ADD a role: add an object here, then copy the folder
 *     careers/sales-representative/ to careers/<your-slug>/ and edit it.
 *
 * Each role: slug, title, location, type, summary, published (bool),
 * applyEmail, applySubject, datePosted, validThrough, baseSalary, url.
 */
window.CAREER_ROLES = [
  {
    slug: "sales-representative",
    title: "Sales Representative",
    location: "Accra",
    type: "3-month contract · Field sales",
    summary:
      "Bring landlords and property managers in Accra onto ConciergeGh — find prospects, run demos and site visits, and sign them up, working to clear weekly and monthly targets.",
    published: true,
    applyEmail: "info@conciergegh.com",
    applySubject: "Application – Sales Representative – Your Full Name",
    datePosted: "2026-11-12",
    validThrough: "2027-01-11",
    baseSalary: { currency: "GHS", value: 1500, unitText: "MONTH" },
    url: "/careers/sales-representative"
  }
];
