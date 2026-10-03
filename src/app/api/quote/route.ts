import { NextResponse } from "next/server";
import { Resend } from "resend";

const DISFLAY_EMAIL = "info@disflay.com";
const DISFLAY_PHONE = "+91 9660021636";

type Store = {
  id: number;
  screens: number;
};

type QuoteRequest = {
  name: string;
  phone: string;
  email?: string;
  stores: Store[];
  plan: "monthly" | "half-yearly" | "yearly";
  planPrice: number;
  serviceMonths: number;
  totalScreens: number;
  averagePerScreen: number;
  savings: number;
  creativePack: boolean;
  creativePrice: number;
  total: number;
};

const planLabels = {
  monthly: "Monthly",
  "half-yearly": "Half-Yearly",
  yearly: "Yearly",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequest;

    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 },
      );
    }

    if (!body.phone?.trim()) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 },
      );
    }

    if (!Array.isArray(body.stores) || body.stores.length === 0) {
      return NextResponse.json(
        { error: "At least one store is required." },
        { status: 400 },
      );
    }

    if (body.stores.length > 10) {
      return NextResponse.json(
        { error: "For more than 10 stores, please contact Disflay directly." },
        { status: 400 },
      );
    }

    const storeRows = body.stores
      .map(
        (store, index) => `
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">
              Store ${index + 1}
            </td>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:right;">
              ${store.screens} ${store.screens === 1 ? "Screen" : "Screens"}
            </td>
          </tr>
        `,
      )
      .join("");

    const customerEmail = body.email?.trim() || undefined;
    const recipients = customerEmail
      ? [DISFLAY_EMAIL, customerEmail]
      : [DISFLAY_EMAIL];

    const customerEmailRow = customerEmail
      ? `
        <tr>
          <td style="padding:8px 0;color:#6b7280;">Email</td>
          <td style="padding:8px 0;text-align:right;">${customerEmail}</td>
        </tr>
      `
      : "";

    const html = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
            <div style="background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">
              
              <div style="padding:28px 30px;background:#111827;color:#ffffff;">
                <div style="font-size:13px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#9ca3af;">
                  Disflay
                </div>
                <h1 style="margin:8px 0 0;font-size:26px;">
                  ${customerEmail ? "Your Disflay Quote" : "New Disflay Quote Request"}
                </h1>
              </div>

              <div style="padding:30px;">
                
                <h2 style="margin:0 0 16px;font-size:18px;">
                  Customer Details
                </h2>

                <table style="width:100%;border-collapse:collapse;font-size:14px;">
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Name</td>
                    <td style="padding:8px 0;text-align:right;font-weight:bold;">
                      ${body.name.trim()}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Phone</td>
                    <td style="padding:8px 0;text-align:right;font-weight:bold;">
                      ${body.phone.trim()}
                    </td>
                  </tr>
                  ${customerEmailRow}
                </table>

                <div style="height:1px;background:#e5e7eb;margin:24px 0;"></div>

                <h2 style="margin:0 0 16px;font-size:18px;">
                  Store & Screen Details
                </h2>

                <table style="width:100%;border-collapse:collapse;font-size:14px;">
                  ${storeRows}
                  <tr>
                    <td style="padding:14px 12px 8px;font-weight:bold;">
                      Total Screens
                    </td>
                    <td style="padding:14px 12px 8px;text-align:right;font-weight:bold;">
                      ${body.totalScreens}
                    </td>
                  </tr>
                </table>

                <div style="height:1px;background:#e5e7eb;margin:24px 0;"></div>

                <h2 style="margin:0 0 16px;font-size:18px;">
                  Quote Summary
                </h2>

                <table style="width:100%;border-collapse:collapse;font-size:14px;">
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Plan</td>
                    <td style="padding:8px 0;text-align:right;font-weight:bold;">
                      ${planLabels[body.plan]}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Service period</td>
                    <td style="padding:8px 0;text-align:right;">
                      ${body.serviceMonths} months
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Subscription payment</td>
                    <td style="padding:8px 0;text-align:right;">
                      ₹${body.planPrice.toLocaleString("en-IN")}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Average cost / Screen / month</td>
                    <td style="padding:8px 0;text-align:right;font-weight:bold;">
                      ₹${Math.round(body.averagePerScreen).toLocaleString("en-IN")}
                    </td>
                  </tr>
                  ${
                    body.savings > 0
                      ? `
                        <tr>
                          <td style="padding:8px 0;color:#6b7280;">Savings</td>
                          <td style="padding:8px 0;text-align:right;color:#15803d;font-weight:bold;">
                            ₹${body.savings.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      `
                      : ""
                  }
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Creative Pack</td>
                    <td style="padding:8px 0;text-align:right;">
                      ${
                        body.creativePack
                          ? `₹${body.creativePrice.toLocaleString("en-IN")}`
                          : "Not selected"
                      }
                    </td>
                  </tr>
                </table>

                <div style="margin-top:22px;padding:20px;border-radius:14px;background:#f3f4f6;">
                  <div style="font-size:13px;color:#6b7280;">
                    Estimated Total
                  </div>
                  <div style="margin-top:5px;font-size:30px;font-weight:bold;">
                    ₹${body.total.toLocaleString("en-IN")}
                  </div>
                </div>

                <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e5e7eb;font-size:14px;color:#6b7280;">
                  <strong style="color:#111827;">Disflay</strong><br/>
                  Phone: ${DISFLAY_PHONE}<br/>
                  Email: ${DISFLAY_EMAIL}
                </div>

              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        { error: "Quote email service is not configured yet." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Disflay Quotes <quotes@disflay.com>",
      to: recipients,
      subject: `Disflay Quote — ${body.name.trim()} — ${planLabels[body.plan]}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send the quote right now." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote sent successfully.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while creating the quote." },
      { status: 500 },
    );
  }
}
