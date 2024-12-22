import HomeHero from "../features/HomeHero/components";
import CallToAction from "@/components/CallToAction";
/* import EmailSignup from "@/components/EmailSignup"; */ // Not finished yet

export default function Home() {
  return (
      <>
            <HomeHero />
            <CallToAction
                  tagline="We thrive on community."
                  description="Join us in our mission to make the world a better place through open source technology. Every contribution matters, no matter how small."
                  buttonText="Start Contributing"
                  buttonLink="https://github.com/4934tech"
                  imageSource="/Screenshots/UltraAgentSourceCode.png"
                  imageWidth={800}
                  imageHeight={800}
            />
          {/* <EmailSignup /> */}
      </>
  );
}
