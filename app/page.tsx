import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Clock, Target, Star, ArrowRight, MessageSquare, Trophy } from "lucide-react"

export default function TandemExchangeLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8" />
            <span className="text-2xl font-bold">TandemExchange</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-secondary-foreground/80 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-secondary-foreground/80 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="hover:text-secondary-foreground/80 transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="hover:text-secondary-foreground/80 transition-colors">
              FAQ
            </a>
          </nav>
          <Button variant="secondary" className="hidden md:inline-flex">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🚀 Join 10,000+ professionals already learning
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Learn German faster.
            <br />
            Get hired sooner.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Language learning is hard—especially when you're juggling work, applications, and life in Germany. Connect
            with native speakers for real conversations that prepare you for interviews, workplace collaboration, and
            career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Start Free - Find a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Find partners in minutes
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Fair credit system
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The challenges you face</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Traditional learning methods don't prepare you for real German workplace communication
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Slow progress alone", desc: "Apps and drills don't prepare you for real conversations" },
              { title: "High costs", desc: "Private lessons are expensive and not sustainable" },
              { title: "Career pressure", desc: "B1/B2 German is often the difference between 'maybe' and 'yes'" },
              { title: "No practice circle", desc: "You don't always know native speakers to practice with" },
            ].map((problem, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-destructive/50">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2 text-destructive">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The TandemExchange solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with native speakers for fair, flexible practice that accelerates your German learning
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Find & be found",
                desc: "Add your profile, goals, and schedule. Search by level, city/online, topics like job interviews, tech, healthcare.",
              },
              {
                icon: <MessageSquare className="h-12 w-12 text-primary" />,
                title: "Request & accept",
                desc: "Send partner requests with profile reviews. Clear, no-pressure matching system.",
              },
              {
                icon: <Trophy className="h-12 w-12 text-primary" />,
                title: "Credit system",
                desc: "Teach your native language → earn credits. Spend credits to learn German. Fair exchanges across any language pair.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20"
              >
                <CardContent className="p-0">
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Benefits */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why it matters for your career in Germany</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Interview confidence",
                desc: "Speak confidently in interviews and probation periods",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Workplace communication",
                desc: "Understand emails, stand-ups, and client calls",
              },
              {
                icon: <Trophy className="h-8 w-8 text-primary" />,
                title: "Show commitment",
                desc: "Demonstrate integration commitment to employers",
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-primary" />,
                title: "Level up faster",
                desc: "Move from A2 → B1/B2 with consistent native input",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground">Get started in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Create your profile",
                desc: "Native language, German level, goals (job hunt, everyday life), availability",
              },
              { step: "2", title: "Find a partner", desc: "Search, filter, and send requests. They review and accept" },
              {
                step: "3",
                title: "Meet & swap",
                desc: "Use our 50/50 timer and job-focused prompts. Keep sessions short and regular",
              },
              {
                step: "4",
                title: "Earn & spend credits",
                desc: "Teach to earn, spend to learn—match with anyone, anytime",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Get your first session this week
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for busy professionals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Short, structured sessions",
                desc: "20–30 min sessions fit any schedule",
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Job-relevant prompts",
                desc: "Introductions, small talk, stand-ups, feedback talks",
              },
              {
                icon: <Trophy className="h-8 w-8 text-primary" />,
                title: "Clear progress",
                desc: "Track sessions and new phrases",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success stories</h2>
            <p className="text-xl text-muted-foreground">
              See how TandemExchange helped professionals land their dream jobs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Software Engineer",
                content:
                  "TandemExchange helped me go from A2 to B2 in 6 months. I landed my dream job at a Berlin startup!",
                rating: 5,
              },
              {
                name: "Carlos R.",
                role: "Marketing Manager",
                content:
                  "The job-focused conversations were exactly what I needed. Now I confidently present to German clients.",
                rating: 5,
              },
              {
                name: "Priya K.",
                role: "Data Scientist",
                content:
                  "The credit system is brilliant. I help others with English and get German practice in return. Win-win!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do I need a perfect language match?",
                a: "No. Earn credits by teaching your native language and spend them to learn German with anyone.",
              },
              {
                q: "Is this tutoring?",
                a: "It's peer-to-peer practice with native speakers—practical, conversational, and affordable.",
              },
              {
                q: "What if I'm shy or beginner (A1–A2)?",
                a: "Use our guided prompts and keep sessions short. Confidence grows fast with real practice.",
              },
              {
                q: "Does it work online and in-person?",
                a: "Yes. Filter by location or meet online—whatever fits your life.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to make German your career edge?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who've accelerated their German learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Join TandemExchange - Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">Find a partner. Speak more. Get hired.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-6 w-6" />
                <span className="text-lg font-bold">TandemExchange</span>
              </div>
              <p className="text-sm opacity-75">Learn German faster. Get hired sooner.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 TandemExchange. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
