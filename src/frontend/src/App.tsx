import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Award,
  Check,
  ChevronRight,
  Leaf,
  Menu,
  Shield,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

const AFFILIATE_LINK = "https://89543kkf30rs90h0lfylw78m-r.hop.clickbank.net";

function AffiliateButton({
  children,
  className = "",
  size = "default",
  "data-ocid": ocid,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "sm";
  "data-ocid"?: string;
}) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button
        size={size}
        data-ocid={ocid}
        className={`bg-brand hover:bg-brand-hover text-white font-semibold shadow-brand transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
      >
        {children}
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </a>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-brand font-bold text-xl tracking-tight font-['Playfair_Display',serif]">
              CitrusBurn™
            </span>
            <span className="hidden sm:inline text-muted-foreground text-sm font-medium">
              Independent Review
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              type="button"
              data-ocid="header.nav.link"
              onClick={() => scrollTo("benefits")}
              className="text-sm font-medium text-foreground hover:text-brand transition-colors cursor-pointer"
            >
              Benefits
            </button>
            <button
              type="button"
              data-ocid="header.nav.link"
              onClick={() => scrollTo("how-it-works")}
              className="text-sm font-medium text-foreground hover:text-brand transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              type="button"
              data-ocid="header.nav.link"
              onClick={() => scrollTo("faq")}
              className="text-sm font-medium text-foreground hover:text-brand transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <AffiliateButton data-ocid="header.cta.primary_button" size="sm">
              Check Availability
            </AffiliateButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:text-brand"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => scrollTo("benefits")}
              className="text-sm font-medium text-left text-foreground hover:text-brand"
            >
              Benefits
            </button>
            <button
              type="button"
              onClick={() => scrollTo("how-it-works")}
              className="text-sm font-medium text-left text-foreground hover:text-brand"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => scrollTo("faq")}
              className="text-sm font-medium text-left text-foreground hover:text-brand"
            >
              FAQ
            </button>
            <AffiliateButton
              data-ocid="header.cta.primary_button"
              className="w-full justify-center"
            >
              Check Availability
            </AffiliateButton>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-br from-white via-orange-50/40 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="order-2 md:order-1">
            <Badge className="mb-4 bg-brand-light text-brand border-0 font-semibold text-xs uppercase tracking-widest">
              2026 Honest Review
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-['Playfair_Display',serif] text-foreground">
              Is CitrusBurn™ Worth Trying in{" "}
              <span className="text-brand">2026?</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Discover a plant-based supplement designed to support healthy
              metabolism, natural energy, and daily wellness.
            </p>
            <p className="text-base text-foreground/80 mb-6 leading-relaxed">
              Many people struggle with low energy, slow metabolism, and
              cravings that make it harder to stay consistent with their health
              goals. CitrusBurn is designed to support your daily routine with
              carefully selected plant-based ingredients.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: <Award className="h-4 w-4" />, label: "GMP Certified" },
                {
                  icon: <Shield className="h-4 w-4" />,
                  label: "Non-GMO Formula",
                },
                {
                  icon: <Leaf className="h-4 w-4" />,
                  label: "Plant-Based Ingredients",
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 text-sm font-medium shadow-xs"
                >
                  <span className="text-brand">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 flex items-start gap-2">
              <span className="text-amber-500 text-lg">⚠</span>
              <p className="text-sm font-medium text-amber-800">
                Due to high demand, CitrusBurn stock may sell out quickly.
              </p>
            </div>

            <AffiliateButton
              data-ocid="hero.cta.primary_button"
              size="lg"
              className="text-base px-8 py-6 w-full sm:w-auto"
            >
              Visit Official Website &amp; Check Availability
            </AffiliateButton>
          </div>

          {/* Right: Bottle Image */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand/10 blur-3xl scale-75" />
              <img
                src="/assets/generated/citrusburn-bottle.dim_400x500.png"
                alt="CitrusBurn supplement bottle"
                className="relative z-10 w-64 md:w-80 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMON CHALLENGES SECTION ===== */}
      <section id="benefits" className="py-16 bg-gray-50/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-3">
              Common Challenges
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Many adults face these everyday hurdles on their wellness journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🐢",
                title: "Sluggish Metabolism",
                desc: "Feeling like your body processes energy slowly.",
                ocid: "benefits.item.1",
              },
              {
                emoji: "⚡",
                title: "Afternoon Fatigue",
                desc: "Lack of energy throughout the day.",
                ocid: "benefits.item.2",
              },
              {
                emoji: "🍕",
                title: "Persistent Cravings",
                desc: "Difficulty staying consistent with healthy habits.",
                ocid: "benefits.item.3",
              },
            ].map((item) => (
              <Card
                key={item.title}
                data-ocid={item.ocid}
                className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold mb-2 font-['Playfair_Display',serif]">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CITRUSBURN SECTION ===== */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-3">
              Why CitrusBurn?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CitrusBurn is designed as a simple addition to a balanced
              lifestyle. The formula focuses on plant-based ingredients often
              associated with metabolism support and daily energy.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 md:p-10 shadow-sm">
            <ul className="space-y-3 mb-8">
              {[
                "100% Plant-Based Formula",
                "Non-GMO Ingredients",
                "Manufactured in a GMP-Certified Facility",
                "Easy-to-Take Capsules",
                "Designed for Adult Wellness Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <AffiliateButton data-ocid="why.cta.primary_button" size="lg">
                See Official CitrusBurn Discount
              </AffiliateButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE SECTION ===== */}
      <section className="py-16 bg-gray-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-3">
              CitrusBurn vs Typical Supplements
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold text-foreground text-base">
                    Feature
                  </TableHead>
                  <TableHead className="font-bold text-center text-brand text-base">
                    CitrusBurn™
                  </TableHead>
                  <TableHead className="font-bold text-center text-muted-foreground text-base">
                    Typical Supplements
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Plant-Based Formula", "✔", "Often No"],
                  ["GMP Certified Manufacturing", "✔", "Not Always"],
                  ["Non-GMO Ingredients", "✔", "Sometimes"],
                  ["Easy Capsule Format", "✔", "Varies"],
                  ["Wellness Support", "✔", "Limited"],
                ].map(([feature, cb, ts], i) => (
                  <TableRow
                    key={feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <TableCell className="font-medium">{feature}</TableCell>
                    <TableCell className="text-center">
                      <span className="text-success font-bold text-lg">
                        {cb}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground text-sm">
                      {ts}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="text-center">
            <AffiliateButton
              data-ocid="comparison.cta.primary_button"
              size="lg"
            >
              Check CitrusBurn Official Website
            </AffiliateButton>
          </div>
        </div>
      </section>

      {/* ===== USER REVIEWS SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-4">
              What Users Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="font-bold text-xl ml-2">4.8 / 5</span>
            </div>
            <p className="text-muted-foreground">Based on 12,000+ Users</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: "Michael R.",
                location: "Texas, USA",
                avatar: "/assets/generated/avatar-michael.dim_100x100.jpg",
                quote:
                  "I was looking for something simple to add to my routine. CitrusBurn helped me stay more consistent with my daily wellness habits.",
                ocid: "reviews.item.1",
              },
              {
                name: "Sarah L.",
                location: "California, USA",
                avatar: "/assets/generated/avatar-sarah.dim_100x100.jpg",
                quote:
                  "I like that CitrusBurn fits easily into my routine. After a few weeks I felt more energetic and motivated.",
                ocid: "reviews.item.2",
              },
              {
                name: "David K.",
                location: "Florida, USA",
                avatar: "/assets/generated/avatar-david.dim_100x100.jpg",
                quote:
                  "I appreciate the plant-based formula. It's easy to take and works well with my healthy lifestyle.",
                ocid: "reviews.item.3",
              },
              {
                name: "Emily S.",
                location: "New York, USA",
                avatar: "/assets/generated/avatar-emily.dim_100x100.jpg",
                quote:
                  "Adding CitrusBurn to my routine was simple. I liked the natural ingredients and how easy it is to stay consistent.",
                ocid: "reviews.item.4",
              },
            ].map((review) => (
              <Card
                key={review.name}
                data-ocid={review.ocid}
                className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm">
            Trusted by thousands of users looking to support their daily
            wellness routine.
          </p>
        </div>
      </section>

      {/* ===== DAILY ROUTINE SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-6">
            How CitrusBurn Fits Into Your Daily Routine
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CitrusBurn capsules are designed to be taken daily as part of a
            healthy lifestyle. When combined with balanced nutrition and
            physical activity, many users choose supplements like CitrusBurn to
            support their overall wellness routine.
          </p>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Is CitrusBurn available in stores?",
                a: "No. CitrusBurn is typically available through the official website.",
                ocid: "faq.item.1",
              },
              {
                q: "Is there a refund policy?",
                a: "Many purchases from the official website include a satisfaction policy. Check the official site for full details.",
                ocid: "faq.item.2",
              },
              {
                q: "How long should it be used?",
                a: "Results and experiences vary depending on lifestyle and consistency.",
                ocid: "faq.item.3",
              },
            ].map((item, i) => (
              <AccordionItem
                key={item.ocid}
                value={`item-${i}`}
                data-ocid={item.ocid}
                className="border border-border rounded-xl px-2 shadow-xs bg-white"
              >
                <AccordionTrigger className="font-semibold text-left hover:text-brand px-4 py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4 pb-4 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== LIMITED TIME OFFER SECTION ===== */}
      <section className="py-16 bg-gray-50/70">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] mb-4">
            Limited Time Online Offer
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Some users prefer ordering CitrusBurn directly from the official
            website because promotional discounts and bundle offers may be
            available there for a limited time.
          </p>
          <div className="border-2 border-brand rounded-2xl p-6 bg-orange-50/50 mb-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🔒", label: "Secure Checkout" },
              { icon: "🚚", label: "Fast Shipping" },
              { icon: "✅", label: "Satisfaction Policy Available" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 py-3"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="font-semibold text-sm text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <AffiliateButton
            data-ocid="offer.cta.primary_button"
            size="lg"
            className="text-base px-8"
          >
            Check Official Website &amp; See Current Discount
          </AffiliateButton>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] text-white mb-6">
            Want to learn more about CitrusBurn and see the latest offers?
          </h2>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              data-ocid="final.cta.primary_button"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-base px-10 py-6 shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              Check Official Website
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Contact",
              "Disclaimer",
            ].map((link) => (
              <a
                key={link}
                href="/"
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-xs text-gray-500 text-center leading-relaxed mb-6">
            The information provided on this page is for informational purposes
            only and is not intended as medical advice. These statements have
            not been evaluated by the Food and Drug Administration. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
            Individual results may vary. This page contains affiliate links and
            we may receive a commission if you make a purchase through them.
            This is an independent review page and not the official CitrusBurn
            website.
          </div>
          <p className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg p-3">
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            data-ocid="mobile.sticky.primary_button"
            className="w-full bg-brand hover:bg-brand-hover text-white font-bold text-sm py-3 shadow-brand cursor-pointer"
          >
            Check CitrusBurn Official Website
          </Button>
        </a>
      </div>
    </div>
  );
}
