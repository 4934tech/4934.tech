import HomeHero from "@/components/HomeHero";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
      <>
          <HomeHero />
          <CallToAction
                Tagline="AI with real world capabilities."
                Description="4934 UltraAgent is a powerful AI agent to tightly integrate with your existing systems. It's designed to be a seamless extension of your life, with power to control whatever you want it to."
                ButtonText="Get started"
                ButtonLink="#"
                ImageSource="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
          />
      </>
  );
}
