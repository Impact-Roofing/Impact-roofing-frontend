export const metadata = {
    title: "Privacy Policy | Impact Roofing",
    description: "Learn how Impact Roofing collects, uses, and protects your personal information.",
};

const SECTIONS = [
    {
        title: "1. Introduction",
        body: `Impact Roofing ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information when you visit our website or use our services.`,
    },
    {
        title: "2. Information We Collect",
        body: `We may collect the following types of information:

Information you provide directly: your name, phone number, email address, property address, and any additional notes or messages when you submit a contact form, request a free inspection, or otherwise reach out to us.

Information collected automatically: when you visit our website, we may automatically collect certain information about your device and browsing behavior, such as your IP address, browser type, pages visited, and the date and time of your visit. This is typically collected through cookies and similar tracking technologies, including tools such as Google Analytics and Meta (Facebook) Pixel.`,
    },
    {
        title: "3. How We Use Your Information",
        body: `We use the information we collect to:

• Respond to your inquiries and provide free quotes or inspections
• Schedule and coordinate roofing services
• Communicate with you about your project, appointments, or account
• Send you marketing communications, including SMS messages and emails, where you have consented to receive them
• Improve our website, services, and advertising
• Comply with legal obligations`,
    },
    {
        title: "4. Cookies and Tracking Technologies",
        body: `Our website uses cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand where our visitors come from. This may include advertising and analytics services such as Google Ads, Google Analytics, and Meta Ads. You can control or disable cookies through your browser settings, though doing so may affect how our website functions.`,
    },
    {
        title: "5. SMS and Phone Communications",
        body: `If you provide your phone number and consent to receive text messages or calls from us, we may contact you regarding your inquiry, appointment reminders, or promotional offers. Message and data rates may apply. You may opt out of SMS communications at any time by replying "STOP" to any message we send, or by contacting us directly.`,
    },
    {
        title: "6. How We Share Your Information",
        body: `We do not sell your personal information to third parties. We may share your information with:

• Employees, contractors, or subcontractors who need access to perform roofing services on our behalf
• Service providers that help us operate our business (e.g., scheduling software, email or SMS providers, hosting providers)
• Insurance companies or adjusters, when relevant to a claim you have authorized us to assist with
• Legal or regulatory authorities, when required by law`,
    },
    {
        title: "7. Data Security",
        body: `We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
        title: "8. Your Rights and Choices",
        body: `Depending on where you live, you may have the right to request access to, correction of, or deletion of your personal information. You may also opt out of receiving marketing communications from us at any time. To exercise any of these rights, please contact us using the information below.`,
    },
    {
        title: "9. Children's Privacy",
        body: `Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children.`,
    },
    {
        title: "10. Third-Party Links",
        body: `Our website may contain links to third-party websites, including social media platforms. We are not responsible for the privacy practices or content of those third-party sites.`,
    },
    {
        title: "11. Changes to This Policy",
        body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
    },
    {
        title: "12. Contact Us",
        body: `If you have any questions about this Privacy Policy or how we handle your information, please contact us:

Impact Roofing
4521 W Lawrence Ave, Chicago, IL 60630
info@impactroofing.com
(773) 555-0192`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="w-full bg-white pb-20 pt-32 lg:pt-40">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
                <p className="text-sm font-bold tracking-[0.15em] text-[#F2733A]">
                    LEGAL
                </p>
                <h1 className="mt-3 font-jost text-4xl font-extrabold leading-tight text-[#0B2545] lg:text-5xl">
                    Privacy Policy
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