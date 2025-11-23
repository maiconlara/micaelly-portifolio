import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não está configurada");
      return NextResponse.json(
        { error: "Configuração do servidor inválida" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contato <micaelly@maiconlara.com.br>",
      to: ["micaellyfotoarte@gmail.com"],
      replyTo: [email],
      subject: "Novo Contato Pelo Site",
      react: EmailTemplate({ name, phone, email, message }),
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email enviado com sucesso:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
