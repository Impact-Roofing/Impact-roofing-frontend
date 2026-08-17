export const metadata = {
    title: "Terms of Service | Impact Roofing",
    description: "The terms and conditions governing your use of Impact Roofing's website and services.",
};

const SECTIONS = [
    {
        title: "1. Acceptance of Terms",
        body: `By accessing or using the Impact Roofing website (the "Site") or requesting our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services.`,
    },
    {
        title: "2. Description of Services",
        body: `Impact Roofing provides residential and commercial roofing services, including but not limited to roof inspections, replacements, repairs, siding, gutters, and emergency storm damage response. Services are subject to availability, on-site evaluation, and any applicable agreements signed between you and Impact Roofing.`,
    },
    {
        title: "3. Free Inspections and Quotes",
        body: `Any free inspection, quote, or estimate offered through our Site is provided for informational purposes and does not constitute a binding contract. Final pricing and scope of work will be confirmed in a separate written agreement prior to the start of any work.`,
    },
    {
        title: "4. Use of the Website",
        body: `You agree to use our Site only for lawful purposes. You may not use the Site in any way that could damage, disable, or impair the Site, or interfere with any other party's use of it. You agree not to attempt to gain unauthorized access to any part of the Site, other accounts, or computer systems connected to the Site.`,
    },
    {
        title: "5. Intellectual Property",
        body: `All content on this Site, including text, graphics, logos, images, and software, is the property of Impact Roofing or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our prior written consent.`,
    },
    {
        title: "6. Communications Consent",
        body: `By submitting a form or providing your contact information on our Site, you consent to be contacted by Impact Roofing via phone, email, or SMS text message regarding your inquiry or our services. Message and data rates may apply. You may opt out of SMS communications at any time by replying "STOP."`,
    },
    {
        title: "7. Disclaimer of Warranties",
        body: `Our Site and its content are provided "as is" and "as available" without warranties of any kind, either express or implied. While we strive to keep information on our Site accurate and up to date, we do not warrant that the Site will be error-free, uninterrupted, or that any defects will be corrected. Any warranties related to workmanship or materials for completed roofing projects will be governed by the separate written agreement or warranty provided for that project.`,
    },
    {
        title: "8. Limitation of Liability",
        body: `To the fullest extent permitted by law, Impact Roofing shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Site or our services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.`,
    },
    {
        title: "9. Third-Party Links",
        body: `Our Site may contain links to third-party websites or services that are not owned or controlled by Impact Roofing. We are not responsible for the content, privacy policies, or practices of any third-party websites.`,
    },
    {
        title: "10. Governing Law",
        body: `These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Illinois.`,
    },
    {
        title: "11. Changes to These Terms",
        body: `We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be posted on this page with an updated effective date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.`,
    },
    {
        title: "12. Contact Us",
        body: `If you have any questions about these Terms, please contact us:

Impact Roofing
4521 W Lawrence Ave, Chicago, IL 60630
info@impactroofing.com
(773) 555-0192`,
    },
];

export default function TermsOfServicePage() {
    return (
        <main className="w-full bg-white pb-20 pt-32 lg:pt-40">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
                <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                    LEGAL
                </p>
                <h1 className="mt-3 font-jost text-4xl font-extrabold leading-tight text-[#0B2545] lg:text-5xl">
                    Terms of Service
                </h1>
                <p className="mt-3 text-sm text-[#0B2545]/50">
                    Effective date: 17/08/2026
                </p>

                <div className="mt-10 flex flex-col gap-8">
                    {SECTIONS.map((section) => (
                        <div key={section.title}>
                            <h2 className="font-jost text-xl font-bold text-[#0B2545]">
                                {section.title}
                            </h2>
                            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[#0B2545]/70">
                                {section.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}