import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUEST_TYPE_LABELS: Record<string, string> = {
    inspection: "Free roof inspection",
    "service-call": "Small repair / service call",
    partnership: "Contractor or insurance partnership",
};

// El formulario ya limpia el HTML en el cliente, pero el endpoint es público:
// se escapa de nuevo antes de meter los datos en el cuerpo del email.
const escapeHtml = (value: unknown) =>
    String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { requestType, firstName, email, phone, address, message } = body;

        if (!firstName || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const requestLabel =
            REQUEST_TYPE_LABELS[requestType] ?? REQUEST_TYPE_LABELS.inspection;

        await resend.emails.send({
            from: 'Impact Roofing Lead <info@contact.advancedteamelite.com>',
            to: process.env.NOTIFICATION_EMAIL || 'dtalledo@advancedteamelite.com',
            subject: `New ${requestLabel} request: ${firstName}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
                    <h2 style="color: #00589e;">New Request</h2>
                    <p><strong>Request type:</strong> ${escapeHtml(requestLabel)}</p>
                    <p><strong>Name:</strong> ${escapeHtml(firstName)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
                    <p><strong>Address:</strong> ${escapeHtml(address) || 'Not provided'}</p>
                    <p><strong>Additional Notes:</strong></p>
                    <p style="background: #f4f4f4; padding: 10px;">${escapeHtml(message) || 'No additional notes.'}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}