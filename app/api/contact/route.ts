import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Valideer de vereiste velden
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    // Controleer of Resend API key is ingesteld
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is niet ingesteld in environment variables');
      // Fallback: log de e-mail (voor development)
      console.log('=== NIEUW CONTACTFORMULIER (zonder API key) ===');
      console.log('Van:', email);
      console.log('Naar: poetsdrift@gmail.com');
      console.log('Naam:', name);
      console.log('Telefoon:', phone || 'Niet opgegeven');
      console.log('Dienst:', service || 'Niet opgegeven');
      console.log('Bericht:', message);
      console.log('==============================================');
      
      return NextResponse.json(
        { 
          success: true,
          message: 'Uw bericht is ontvangen. Wij nemen zo spoedig mogelijk contact met u op.' 
        },
        { status: 200 }
      );
    }

    // Formatteer de e-mail inhoud
    const emailSubject = `Nieuw contactformulier bericht van ${name}`;
    const emailBody = `
Nieuw bericht via het contactformulier:

Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || 'Niet opgegeven'}
Gewenste Dienst: ${service || 'Niet opgegeven'}

Bericht:
${message}

---
Dit bericht is verzonden via het contactformulier op poetsdrift.nl
    `.trim();

    // Stuur e-mail via Resend
    const { data, error } = await resend.emails.send({
      from: 'Poetsdrift Contactformulier <onboarding@resend.dev>', // Voor productie: gebruik je eigen geverifieerde domain
      to: 'poetsdrift@gmail.com',
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Nieuw bericht via het contactformulier</h2>
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
          <p><strong>Gewenste Dienst:</strong> ${service || 'Niet opgegeven'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 3px solid #000;">
            <p><strong>Bericht:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Dit bericht is verzonden via het contactformulier op poetsdrift.nl
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.' },
        { status: 500 }
      );
    }

    console.log('E-mail succesvol verzonden:', data);

    return NextResponse.json(
      { 
        success: true,
        message: 'Uw bericht is verzonden. Wij nemen zo spoedig mogelijk contact met u op.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
