import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  phone,
  email,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Novo contato</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section></Section>
        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>Contato</Text>
          <div style={contactSection}>
            <Text style={contactParagraph}>Olá, me chamo {name},</Text>
            <Text style={contactParagraph}>
              {phone} -{" "}
              <Link href={`mailto:${email}`} style={contactLink}>
                {email}
              </Link>
            </Text>
          </div>
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>{message}</Text>
          <Hr style={hr} />
        </Section>
        
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const heading = {
  fontSize: "24px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#90a084",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
  // OverflowWrap: "break-word",
  maxWidth: "500px",
};

const contactSection = {
  marginTop: "6px",
};

const contactParagraph = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#3c4043",
  margin: "5px 0",
};

const contactLink = {
  ...contactParagraph,
  color: "#90a084",
};



const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};
