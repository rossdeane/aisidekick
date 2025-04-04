import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-icon-only.png"
                alt="AI Sidekick Logo"
                width={40}
                height={40}
                className="sm:hidden "
              />
              <Image
                src="/logo-no-background.png"
                alt="AI Sidekick Logo"
                width={240}
                height={60}
                className="hidden sm:block"
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button
                asChild
                variant="ghost"
                className="text-black hover:text-brand-accent"
              >
                <Link href="#services">Services</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-black hover:text-brand-accent"
              >
                <Link href="#pricing">Pricing</Link>
              </Button>
              <Button
                asChild
                className="bg-brand-accent hover:bg-brand-accent/90 text-white"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-7 md:py-24 lg:py-16 xl:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-dela tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  AI for your small business
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Bring the power of AI into your business without the faff.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  asChild
                  className="px-8 bg-brand-accent hover:bg-brand-accent/90 text-white"
                >
                  <Link href="#contact">Book a Free Demo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-accent text-brand-accent hover:bg-brand-accent/10"
                >
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-16 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-oswald tracking-tighter sm:text-5xl font-bold pb-8">
                  🛠️ What We Offer
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AI sidekick works with small businesses like yours to help
                  bring you the benefits of the AI revolution without spending
                  thousands on software or hiring extra staff.
                </p>

                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We have off-the-shelf solutions that are proven to save you
                  time, money and bring in more business - and our expert team
                  helps you integrate it into <i>your</i> business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {/* Service 1 */}
              <Card className="flex flex-col items-center text-center border-brand-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-oswald">
                    📸 Social Media Sidekick
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Turn your photos into scroll-stopping posts. Just drop your
                    images, and we'll send back a week's worth of
                    Instagram-ready captions tailored to your voice.
                  </p>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="flex flex-col items-center text-center border-brand-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-oswald">
                    🤖 WhatsApp Sidekick
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Never miss a message again. Our WhatsApp bot handles
                    customer inquiries instantly, even when you're offline,
                    keeping your business running 24/7.
                  </p>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="flex flex-col items-center text-center border-brand-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-oswald">
                    📥 Email Sidekick
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    No more email overwhelm. We'll scan your incoming emails,
                    highlight top leads, and summarise everything you actually
                    need to read.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Custom Solutions Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-oswald font-bold mb-4">
                Have something particular in mind?
              </h3>
              <p className="max-w-[700px] mx-auto text-gray-700 md:text-lg mb-6">
                If you have ideas for AI that go beyond our off-the-shelf
                products, we'd love to help you achieve them. Reach out to us
                for custom integration packages.
              </p>
              <Button
                asChild
                className="bg-brand-accent hover:bg-brand-accent/90 text-white"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-oswald tracking-tighter sm:text-5xl font-bold">
                  💼 Who It's For
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our solutions are perfect for small businesses looking to
                  leverage AI without the complexity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-brand-accent/20 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-oswald">Local shops & salons</h3>
                <p className="text-gray-700">
                  Enhance customer engagement and streamline operations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-brand-accent/20 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-oswald">Service providers</h3>
                <p className="text-gray-700">
                  Tradespeople, estate agents, wellness professionals, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-brand-accent/20 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-oswald">Small teams</h3>
                <p className="text-gray-700">
                  Who need to save time and boost customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-oswald tracking-tighter sm:text-5xl font-bold">
                  💰 Pricing Plans
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              {/* Starter Plan */}
              <Card className="flex flex-col border-brand-accent/20">
                <CardHeader>
                  <CardTitle className="font-oswald">Starter</CardTitle>
                  <CardDescription>
                    For businesses just getting started with AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">£79/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>One service of your choice</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>Monthly support & updates</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-2 border-brand-accent">
                <CardHeader>
                  <CardTitle className="font-oswald">Pro</CardTitle>
                  <CardDescription>
                    Our most popular plan for small businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">£149/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>Any 2 services</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>Priority setup & support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>Monthly optimisation report</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              {/* All-In Plan */}
              <Card className="flex flex-col border-brand-accent/20">
                <CardHeader>
                  <CardTitle className="font-oswald">All-In</CardTitle>
                  <CardDescription>
                    Complete AI solution for your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-3xl font-bold">£249/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>All 3 services</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>White-glove onboarding</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-brand-accent" />
                      <span>Weekly performance check-ins</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="text-center mt-6 text-sm text-gray-700">
              Custom pricing available for agencies or multi-location
              businesses.
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-oswald tracking-tighter sm:text-5xl font-bold">
                  🚀 Ready to Get Started?
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple setup. No tech headaches. Real results.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-700">
          © {new Date().getFullYear()} AI Sidekick | aisidekick.co.uk
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
