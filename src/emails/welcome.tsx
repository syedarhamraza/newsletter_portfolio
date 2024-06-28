import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface WelcomeEmailProps {
  firstName: string
}

export const WelcomeEmail = ({ firstName }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome {firstName}!</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Section className="mt-[32px]">
            <Img
              src="https://www.arhammastery.dev/android-chrome-512x512.png"
              width="100"
              height="100"
              alt="Vercel"
              className="my-0 mx-auto"
            />
          </Section>
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            Welcome to <strong>ArhamMastery!</strong>
          </Heading>
          <Text className="text-black text-[14px] leading-[24px]">
            Hello {firstName},
          </Text>
          <Text className="text-black text-[14px] leading-[24px]">
            Welcome to my community! I'm excited to share my latest e-book on
            cybersecurity with you. This book is packed with essential tips and
            insights to help you protect your digital life. Click the download
            button below to get your free copy and start securing your digital
            world today!{" "}
          </Text>
          <Section className="text-center mt-[32px] mb-[32px]">
            <Button
              pX={20}
              pY={12}
              className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
              href="https://drive.google.com/uc?export=download&id=1bMmav85tReN23f0Rhe6Mwsxt6Ijlx0uy"
            >
              Download
            </Button>
          </Section>

          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text className="text-[#666666] text-[12px] leading-[24px]">
            This invitation was intended for{" "}
            <span className="text-black">{firstName}</span> from{" "}
            <strong>ArhamMastery</strong>. If you were not expecting this
            invitation, you can ignore this email. If you are concerned about
            your account's safety, please reply to this email to get in touch
            with us.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default WelcomeEmail
