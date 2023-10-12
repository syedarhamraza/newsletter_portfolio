import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { Img } from "@react-email/img"

interface WelcomeEmailProps {
  firstName: string
}

export const WelcomeEmail = ({ firstName }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome {firstName}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://www.arhamatlas.online/_next/image?url=%2Flogo.png&w=128&q=75"
          }
          width="170"
          height="170"
          alt="Arham"
          style={logo}
        />
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Welcome to My newsletter. Here, you'll find a showcase of my skills
          and projects that demonstrate my passion for web development. I'm
          excited to share my work with you and explore the world of web
          development together.
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href="https://arhamatlas.online/"
          >
            Portfolio
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Syed Arham Raza
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Pakistan</Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const logo = {
  margin: "0 auto",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const btnContainer = {
  textAlign: "center" as const,
}

const button = {
  backgroundColor: "#000000",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}
