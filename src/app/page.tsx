import HomeHero from "@/components/HomeHero";
import CallToAction from "@/components/CallToAction";
/* import EmailSignup from "@/components/EmailSignup"; */ // Not finished yet

export default function Home() {
  return (
      <>
            <HomeHero />
            <CallToAction
                  Tagline="We thrive on community."
                  Description="Join us in our mission to make the world a better place through open source technology. Every contribution matters, no matter how small."
                  ButtonText="Start Contributing"
                  ButtonLink="https://github.com/4934tech"
                  ImageSource="/Screenshots/UltraAgentSourceCode.png"
                  ImageWidth={800}
                  ImageHeight={800}
            />
          {/* <EmailSignup /> */}
      </>
  );
}
