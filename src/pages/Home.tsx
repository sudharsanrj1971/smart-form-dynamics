import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, RefreshCw, Code2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Complex Validation",
    description: "Password strength meters, real-time feedback, and multi-field validation rules.",
  },
  {
    icon: Zap,
    title: "Dynamic DOM",
    description: "Instant UI updates reflecting validation state without page reloads.",
  },
  {
    icon: RefreshCw,
    title: "Client Routing",
    description: "Smooth navigation between pages with React Router.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Type-safe validation logic with comprehensive error handling.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="data-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <span className="text-sm font-mono text-primary">Task 4: Form Validation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Where{" "}
              <span className="gradient-text">Data</span>
              <br />
              Meets Intelligence
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Advanced form validation with real-time feedback, dynamic DOM manipulation, 
              and seamless client-side routing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:opacity-90 transition-opacity group"
              >
                Try Registration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-lg font-medium text-lg hover:bg-secondary/80 transition-colors"
              >
                View Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">
              Built with Modern Practices
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Implementing complex validation rules and dynamic updates using React best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Cognifyz Technologies • Task 4 Demo
          </p>
        </div>
      </footer>
    </div>
  );
}
