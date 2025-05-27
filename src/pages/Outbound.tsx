import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Phone, Users, Calendar, Target, CheckCircle, Check, Mail, MessageCircle } from 'lucide-react';
const Outbound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Outbound Calls
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fully automate reminders, follow-ups, and proactive customer engagement campaigns with intelligent AI calling.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Proactive Customer Engagement</h2>
              <p className="text-lg text-gray-300 mb-8">
                Transform your customer outreach with AI-powered calling that feels natural and personal. 
                From appointment reminders to sales follow-ups, reach every customer at the right time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Automated appointment reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Personalized follow-up campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Lead nurturing sequences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Customer satisfaction surveys</span>
                </div>
              </div>
              
              <Button onClick={() => scrollToSection('contact')} className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </div>
            
            <div className="relative">
              <Card className="glass-card border-purple-500/20 p-8 animate-float">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Outreach</h3>
                  <p className="text-gray-300">Targeted, timely, and totally automated</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="glass-card border-purple-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Appointment Reminders</h3>
                <p className="text-gray-400 text-sm">Reduce no-shows with timely, friendly reminders</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Sales Follow-ups</h3>
                <p className="text-gray-400 text-sm">Automated follow-up sequences that convert</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-cyan-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Customer Surveys</h3>
                <p className="text-gray-400 text-sm">Gather feedback and improve satisfaction</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Lead Nurturing</h3>
                <p className="text-gray-400 text-sm">Convert prospects with strategic touchpoints</p>
              </CardContent>
            </Card>
          </div>

          {/* Campaign Types */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-12">Campaign Types</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Reminder Campaigns</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Appointment confirmations</li>
                    <li>• Payment due dates</li>
                    <li>• Renewal notifications</li>
                    <li>• Event reminders</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Sales Campaigns</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Lead qualification calls</li>
                    <li>• Follow-up sequences</li>
                    <li>• Upselling opportunities</li>
                    <li>• Win-back campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Process */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-12">How Outbound Works</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Setup Campaign</h3>
                <p className="text-gray-300 text-sm">Define your target list and message</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Schedule Calls</h3>
                <p className="text-gray-300 text-sm">AI calls at optimal times</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Natural Conversation</h3>
                <p className="text-gray-300 text-sm">Personalized, context-aware dialogue</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Track Results</h3>
                <p className="text-gray-300 text-sm">Monitor performance and optimize</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                  Common Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Everything you need to know about VOCLY AI
                </p>
              </div>

              <div className="max-w-4xl mx-auto animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
                <Accordion type="single" collapsible className="space-y-6">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        What can VOCLY AI actually do?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        VOCLY AI can handle inbound calls, make outbound calls for appointments and follow-ups, 
                        qualify leads, book appointments, and provide 24/7 customer service with human-like conversation capabilities.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        How is this different from other AI tools?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Unlike text-based AI tools, VOCLY AI specializes in voice interactions with natural conversation flow, 
                        real-time responses, and integration with your existing business systems for seamless operations.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold transition-colors text-slate-50">
                        Is my data secure with VOCLY AI?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Yes, we use enterprise-grade encryption and security protocols. All call data is stored securely 
                        and you maintain full control over your customer information.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        What kind of support do you offer?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        We provide 24/7 technical support, dedicated account managers for enterprise clients, 
                        and comprehensive onboarding to ensure successful implementation.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        How quickly can I get started?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Most clients can be up and running within 24-48 hours. Our team handles the setup and 
                        integration with your existing systems.
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Accordion>
              </div>

              {/* Custom Solution CTA */}
              <div className="text-center animate-fade-in mt-16" style={{
              animationDelay: '0.4s'
            }}>
                <div className="backdrop-blur-sm border border-slate-700/50 rounded-2xl max-w-2xl mx-auto px-0 py-0 bg-gray-900 bg-[g_0f172a]">
                  <p className="text-xl text-gray-300 mb-8">
                    Need a custom solution? Let's talk about your specific requirements.
                  </p>
                  <Button onClick={() => scrollToSection('contact')} className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>;
};
export default Outbound;