
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Legal"
            title="Terms of Service"
            subtitle="Effective Date: April 1, 2025. Last Updated: May 09, 2025."
          />
          
          <div className="max-w-4xl mx-auto mt-16 prose prose-sm dark:prose-invert">
            <div className="mb-10">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the Processimo platform. These Terms constitute a legally binding agreement between you and Processimo governing your access to and use of the platform, including any associated services, features, content, and functionality.
              </p>
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    By accessing or using Processimo, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the platform. These Terms apply to all visitors, users, and others who access or use Processimo.
                  </p>
                  <p>
                    We may revise these Terms at any time. By continuing to access or use our platform after those revisions become effective, you agree to be bound by the revised Terms.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>"Platform"</strong> refers to the Processimo website, application, and all services, features, and content provided by Processimo.</li>
                    <li><strong>"User Account"</strong> refers to the account created by a user to access and use the Platform.</li>
                    <li><strong>"User Content"</strong> refers to all information, data, text, software, images, and other materials that users upload, create, or provide to the Platform.</li>
                    <li><strong>"AI Agent"</strong> refers to any specialized artificial intelligence agent created, trained, or deployed using the Platform.</li>
                    <li><strong>"Workflow"</strong> refers to any sequence of processes or tasks that involve one or more AI Agents on the Platform.</li>
                    <li><strong>"Subscription"</strong> refers to the paid service plan that provides access to specific features and capabilities of the Platform.</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">3. User Obligations</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>By using Processimo, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide accurate and complete information when creating your User Account.</li>
                    <li>Maintain the security and confidentiality of your login credentials.</li>
                    <li>Use the Platform in compliance with all applicable laws and regulations.</li>
                    <li>Not use the Platform for any illegal, harmful, or unauthorized purposes.</li>
                    <li>Not attempt to gain unauthorized access to any part of the Platform or any associated systems or networks.</li>
                    <li>Not interfere with or disrupt the operation of the Platform or the servers or networks hosting it.</li>
                    <li>Not upload, transmit, or distribute any viruses, malware, or other harmful code.</li>
                    <li>Not use automated scripts, bots, or other means to access or interact with the Platform, except as explicitly permitted by Processimo.</li>
                    <li>Not reverse engineer, decompile, or otherwise attempt to extract the source code of the Platform.</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">4. Account Management</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    You are responsible for all activities that occur under your User Account. You must immediately notify Processimo of any unauthorized use of your account or any other breach of security.
                  </p>
                  <p>
                    Processimo reserves the right to suspend or terminate your account at any time if you violate these Terms or engage in any activity that Processimo determines, in its sole discretion, to be harmful to the Platform, other users, or Processimo itself.
                  </p>
                  <p>
                    You may terminate your account at any time by following the instructions on the Platform. Upon termination, you will lose access to all features and data associated with your account, except as otherwise provided in these Terms or required by law.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">5. Payment Terms</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    Processimo offers various Subscription plans with different features and pricing. The specific terms of your Subscription, including the price, billing cycle, and included features, will be presented to you during the sign-up process.
                  </p>
                  <p>
                    By subscribing to a paid plan, you authorize Processimo to charge the payment method you provide on a recurring basis according to your selected billing cycle until you cancel your Subscription.
                  </p>
                  <p>
                    All fees are exclusive of taxes, which may be added to the final amount charged. You are responsible for paying all taxes associated with your use of the Platform.
                  </p>
                  <p>
                    Subscription fees are non-refundable, except as required by law or as expressly stated in these Terms. If you cancel your Subscription, you will continue to have access to the paid features until the end of your current billing cycle.
                  </p>
                  <p>
                    Processimo reserves the right to change its pricing and Subscription plans at any time. Any price changes will take effect at the start of the next billing cycle after notice has been provided to you.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    The Platform, including all of its content, features, and functionality, is owned by Processimo and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You retain ownership of any User Content you upload to the Platform. By uploading User Content, you grant Processimo a non-exclusive, worldwide, royalty-free license to use, store, and process that content solely for the purpose of providing and improving the Platform and its services.
                  </p>
                  <p>
                    You represent and warrant that you have all necessary rights, licenses, and permissions to upload your User Content and to grant the license described above.
                  </p>
                  <p>
                    You acknowledge that AI Agents created using the Platform may be trained on or incorporate your User Content. You retain ownership of your User Content and any original outputs generated by your AI Agents based on your specific instructions.
                  </p>
                  <p>
                    Processimo owns all rights, title, and interest in and to the Platform's AI models, algorithms, and underlying technology. Nothing in these Terms transfers ownership of Processimo's intellectual property to you.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    To the maximum extent permitted by law, Processimo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your access to or use of, or inability to access or use, the Platform;</li>
                    <li>Any conduct or content of any third party on the Platform;</li>
                    <li>Any content obtained from the Platform;</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content;</li>
                    <li>The performance or outputs of any AI Agent created or deployed using the Platform.</li>
                  </ul>
                  <p>
                    Processimo's total liability for any claim arising out of or relating to these Terms or the Platform shall not exceed the amount paid by you to Processimo during the 12 months preceding the claim.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">8. Privacy Policy</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use, and disclose information about you.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any dispute arising from or relating to these Terms or your use of the Platform shall be resolved exclusively in the courts located in San Francisco, California, and you consent to the personal jurisdiction of such courts.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">10. Changes to Terms</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    Processimo reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you may not continue to use the Platform.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p>
                    Email: <a href="mailto:processimo.ai@gmail.com" className="text-primary hover:underline">processimo.ai@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
