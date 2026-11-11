import Link from 'next/link';
import './HomeServices.css';

const services = [
  { href: '/acquisition-debt/', name: 'Acquisition Finance', text: 'Debt funding to buy another company, structured around the deal and your cash flows.' },
  { href: '/machinery-loans/', name: 'Machinery Loans', text: 'Finance to buy new or upgrade existing machinery and equipment, imported or Indian-made.' },
  { href: '/ecb/', name: 'External Commercial Borrowings (ECB)', text: 'Raise funds from overseas lenders under RBI rules for expansion and capital spending.' },
  { href: '/billDiscounting/', name: 'Bill Discounting', text: 'Turn unpaid invoices into working capital instead of waiting for customers to pay.' },
  { href: '/unlisted-stocks/', name: 'Unlisted Shares', text: 'Buy and sell pre-IPO and unlisted shares such as NSE, NCDEX, MSEI, OYO and Polymatech.' },
  { href: '/privateEqity/', name: 'Private Equity', text: 'Connecting growing businesses with investors, from growth capital to buyouts.' },
  { href: '/dubaiProperty/', name: 'Dubai Property', text: 'Luxury residential property in Dubai for investment.' },
];

// Plain text section after the full-screen slides, so Google can read what the business does
export default function HomeServices() {
  return (
    <section className='home-services'>
      <div className='home-services-inner'>
        <h2>Business Finance and Investment Advisory in Mumbai</h2>
        <p className='home-services-intro'>
          Dhumavati Consulting LLP is a Mumbai-based consultancy that helps businesses raise funds and helps
          investors access opportunities. We work with you from the first conversation to the final paperwork,
          and coordinate with banks, NBFCs and investors on your behalf.
        </p>
        <div className='home-services-grid'>
          {services.map((s) => (
            <Link href={s.href} className='home-service-card' key={s.href}>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </Link>
          ))}
        </div>
        <p className='home-services-contact'>
          Visit us at Shop No 2, Agar Bazar, Dadar West, Mumbai, call <a href='tel:+918655811111'>+91 86558 11111</a> or
          email <a href='mailto:d@dconsult.in'>d@dconsult.in</a>. <Link href='/contact/'>Contact us</Link> to discuss your requirement.
        </p>
      </div>
    </section>
  );
}
