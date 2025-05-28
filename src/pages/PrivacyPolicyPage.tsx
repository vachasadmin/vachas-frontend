
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-8 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="text-xl font-heading font-bold">Tarang AI</h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: May 15, 2025</p>
            </div>
            <Button variant="outline" size="sm" className="flex gap-2 items-center">
              <FileText className="h-4 w-4" />
              Print
            </Button>
          </div>

          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="lead text-lg">
              At Tarang AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our voice AI services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you register for the Services, 
              express interest in obtaining information about us or our products, or otherwise contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us, 
              the choices you make, and the products and features you use. The personal information we collect may include:
            </p>
            <ul>
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Account credentials</li>
              <li>Business information</li>
              <li>Payment information</li>
              <li>Voice recordings and transcripts from calls made using our platform</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various business and commercial purposes including:</p>
            <ul>
              <li>To provide and maintain our Services</li>
              <li>To process your transactions and manage your account</li>
              <li>To improve our Services and develop new features</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing and promotional communications (with opt-out options)</li>
              <li>To protect our Services and enforce our terms</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>
              We may share your information with third parties in certain situations, including:
            </p>
            <ul>
              <li>Service providers who help us operate our business</li>
              <li>Business partners with your consent</li>
              <li>In connection with corporate transactions (merger, acquisition, etc.)</li>
              <li>When required by law or to protect rights and safety</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect 
              the security of any personal information we process. However, despite our safeguards, no security 
              system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that 
              information you supply will not be intercepted while being transmitted to us over the Internet.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>Right to access the personal information we hold about you</li>
              <li>Right to request correction of inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to object to or restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2>International Data Transfers</h2>
            <p>
              Our servers are located in India. If you are accessing our Services from outside India, please be aware 
              that your information may be transferred to, stored, and processed by us in our facilities and by those 
              third parties with whom we may share your personal information in India and other countries.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated 
              "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage 
              you to review this privacy policy frequently to be informed of how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this policy, or if you would like to exercise your rights, 
              please contact us:
            </p>
            <ul>
              <li>By email: privacy@tarangai.com</li>
              <li>By phone: +91 (800) 123-4567</li>
              <li>By mail: Tarang AI Technologies, 123 Tech Park, Bengaluru 560001, India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tarang AI. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
            <Link to="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
