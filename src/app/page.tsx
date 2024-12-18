import HomeHero from "@/components/HomeHero";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
      <>
          <HomeHero />
          <CallToAction
                Tagline="We strive on community."
                Description="Join us in our mission to make the world a better place through technology."
                ButtonText="Start Contributing"
                ButtonLink="https://github.com/4934tech"
                ImageSource="/Screenshots/UltraAgentSourceCode.png"
                ImageWidth={800}
                ImageHeight={800}
          />
      </>
  );
}
