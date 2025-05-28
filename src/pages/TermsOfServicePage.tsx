
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText } from 'lucide-react';

const TermsOfServicePage = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: May 15, 2025</p>
            </div>
            <Button variant="outline" size="sm" className="flex gap-2 items-center">
              <FileText className="h-4 w-4" />
              Print
            </Button>
          </div>

          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="lead text-lg">
              These Terms of Service ("Terms") govern your access to and use of the Tarang AI platform, services, and website. 
              Please read these Terms carefully before using our Services.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the Tarang AI Services, you agree to be bound by these Terms and our Privacy Policy. 
              If you do not agree to these Terms, you may not access or use the Services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may modify the Terms at any time, in our sole discretion. If we do so, we'll let you know by posting the 
              modified Terms on the Site or through other communications. It's important that you review the Terms whenever 
              we modify them because if you continue to use the Services after we have posted modified Terms, you are 
              indicating to us that you agree to be bound by the modified Terms.
            </p>

            <h2>Services Description</h2>
            <p>
              Tarang AI provides a voice AI platform that enables businesses to automate inbound and outbound calls 
              through AI-powered conversational agents. Our Services include but are not limited to voice AI technology, 
              campaign management tools, analytics, and integrations with third-party services.
            </p>

            <h2>Account Registration and Security</h2>
            <p>
              To use certain features of the Services, you may be required to register for an account. You agree to provide 
              accurate, current, and complete information during the registration process and to update such information to 
              keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. 
              You agree to notify us immediately if you suspect any unauthorized access to or use of your account.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Certain aspects of the Services may be provided for a fee. You will be required to select a payment plan and 
              provide accurate payment information. You agree to pay all charges at the prices in effect when incurred and 
              authorize us to charge your selected payment method for all such charges.
            </p>
            <p>
              All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible 
              for payment of all such taxes, levies, or duties.
            </p>

            <h2>User Content and Conduct</h2>
            <p>
              You are solely responsible for all content you upload to or use with the Services, including call scripts, 
              contact lists, voice recordings, and other materials ("User Content"). You represent and warrant that you own 
              all rights to your User Content or have obtained all necessary permissions and licenses.
            </p>
            <p>
              You agree not to use the Services to:
            </p>
            <ul>
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Engage in unsolicited communications or spamming</li>
              <li>Distribute malware or other harmful code</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the proper working of the Services</li>
            </ul>

            <h2>Intellectual Property Rights</h2>
            <p>
              The Services and their contents, features, and functionality are owned by Tarang AI and are protected by 
              copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              These Terms do not grant you any right, title, or interest in the Services, or any content, features, or 
              functionality of the Services, other than the limited right to use the Services as set forth in these Terms.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
              NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TARANG AI BE LIABLE FOR ANY INDIRECT, 
              PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, 
              DAMAGES FOR LOSS OF USE, DATA, OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE 
              OF THE SERVICES.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of the Services, without prior notice or liability, 
              for any reason, including if you breach these Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its 
              conflict of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: legal@tarangai.com</li>
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

export default TermsOfServicePage;
