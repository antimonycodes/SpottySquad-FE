import React, { useState, useEffect } from "react";
import {
  Lightbulb,
  Target,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  User,
  ChevronRight,
  Plus,
  Star,
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowRight,
  Brain,
  Rocket,
  DollarSign,
  Eye,
  MessageSquare,
  Zap,
  Trophy,
  Globe,
  Briefcase,
  Heart,
  Shield,
  Camera,
  Play,
  Download,
  Share2,
  Filter,
  Sparkles,
  Users2,
  Building2,
  PieChart,
  LineChart,
  FileText,
  Video,
  Mic,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Link,
  ExternalLink,
} from "lucide-react";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("generate");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [generatedIdeas, setGeneratedIdeas] = useState([]);
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      type: "ai",
      content:
        "Hi! I'm your AI business partner. I've analyzed thousands of successful startups. Ready to find your next big idea?",
    },
  ]);

  const questions = [
    "Who can you help? (Be specific about the target audience)",
    "Who cares deeply about this problem? (Identify the pain points)",
    "Who can buy a solution? (Define the economic buyer)",
    "What are you really good at? (Your unique skills & expertise)",
    "What do you wish someone would build for you?",
    "What are your biggest daily frustrations?",
    "What could you work on for the next 10 years without getting bored?",
    "What can't you stop talking about? (Your passion areas)",
    "What do people ask you for help with?",
    "What do you love doing in your free time?",
  ];

  const criteria = [
    {
      name: "Feels like play",
      key: "play",
      description: "You'd do this even if not paid",
    },
    {
      name: "Set to $5M/year",
      key: "revenue",
      description: "Large addressable market",
    },
    { name: "Profitable", key: "profit", description: "Strong unit economics" },
    {
      name: "Highly scalable",
      key: "scalable",
      description: "Can grow without linear costs",
    },
    {
      name: "Sustainable",
      key: "sustainable",
      description: "Long-term competitive moat",
    },
    {
      name: "Love the problem",
      key: "problem",
      description: "Genuinely care about solving this",
    },
    {
      name: "Love customers",
      key: "customers",
      description: "Enjoy interacting with target users",
    },
    {
      name: "Intent to build",
      key: "build",
      description: "Commitment to see it through",
    },
    {
      name: "Competitive advantage",
      key: "advantage",
      description: "Unique positioning vs competitors",
    },
    {
      name: "Founder/problem fit",
      key: "fit",
      description: "Your background matches the problem",
    },
  ];

  const sampleIdeas = [
    {
      id: 1,
      title: "AI-Powered Remote Team Culture Platform",
      description:
        "Help distributed teams build strong culture through AI-generated activities and insights",
      score: 8.7,
      marketSize: "$2.3B",
      trendScore: 95,
      criteria: {
        play: 9,
        revenue: 8,
        profit: 8,
        scalable: 9,
        sustainable: 8,
        problem: 9,
        customers: 8,
        build: 8,
        advantage: 9,
        fit: 8,
      },
      validation: { interviews: 15, signups: 234, conversion: 12 },
      competitors: ["Slack", "Microsoft Teams", "Zoom"],
      funding: "$50K needed",
      timeline: "6 months to MVP",
      success_probability: 78,
    },
    {
      id: 2,
      title: "Micro-Learning for Busy Professionals",
      description:
        "5-minute daily learning modules personalized by AI for career advancement",
      score: 8.4,
      marketSize: "$4.1B",
      trendScore: 88,
      criteria: {
        play: 8,
        revenue: 9,
        profit: 9,
        scalable: 9,
        sustainable: 7,
        problem: 8,
        customers: 8,
        build: 7,
        advantage: 8,
        fit: 9,
      },
      validation: { interviews: 22, signups: 456, conversion: 18 },
      competitors: ["MasterClass", "Coursera", "LinkedIn Learning"],
      funding: "$75K needed",
      timeline: "4 months to MVP",
      success_probability: 82,
    },
    {
      id: 3,
      title: "No-Code Business Plan Generator",
      description:
        "AI creates investor-ready business plans from simple conversation",
      score: 8.9,
      marketSize: "$1.8B",
      trendScore: 92,
      criteria: {
        play: 9,
        revenue: 9,
        profit: 9,
        scalable: 9,
        sustainable: 8,
        problem: 9,
        customers: 9,
        build: 8,
        advantage: 9,
        fit: 9,
      },
      validation: { interviews: 31, signups: 678, conversion: 24 },
      competitors: ["LivePlan", "Bizplan", "Enloop"],
      funding: "$100K needed",
      timeline: "8 months to MVP",
      success_probability: 91,
    },
  ];

  const trendingIdeas = [
    { title: "AI Wellness Coach", growth: "+145%", category: "Health Tech" },
    {
      title: "Carbon Credit Marketplace",
      growth: "+89%",
      category: "ClimaTech",
    },
    { title: "Senior Care Platform", growth: "+67%", category: "AgeTech" },
    {
      title: "Virtual Event Networking",
      growth: "+234%",
      category: "Event Tech",
    },
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      idea: "Pet Health Tracker",
      revenue: "$2.3M ARR",
      time: "18 months",
      avatar: "👩‍💼",
    },
    {
      name: "Mike Rodriguez",
      idea: "Local Service Marketplace",
      revenue: "$5.1M ARR",
      time: "24 months",
      avatar: "👨‍💻",
    },
    {
      name: "Lisa Park",
      idea: "EdTech for Parents",
      revenue: "$1.8M ARR",
      time: "12 months",
      avatar: "👩‍🎓",
    },
  ];

  const navItems = [
    { id: "generate", label: "AI Idea Generator", icon: Lightbulb },
    { id: "validate", label: "Validate & Test", icon: Target },
    { id: "build", label: "Build & Launch", icon: Rocket },
    { id: "grow", label: "Scale & Grow", icon: TrendingUp },
    { id: "ideas", label: "My Portfolio", icon: BookOpen },
    { id: "community", label: "Success Network", icon: Users },
    { id: "marketplace", label: "Expert Services", icon: Briefcase },
    { id: "funding", label: "Investor Connect", icon: DollarSign },
  ];

  const handleAnswerChange = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const generateIdeas = () => {
    // Simulate AI idea generation with market data
    setGeneratedIdeas(sampleIdeas);
  };

  const sendAIMessage = (message) => {
    setAiMessages([
      ...aiMessages,
      { type: "user", content: message },
      {
        type: "ai",
        content:
          "Based on your input, I suggest focusing on the remote work trend. 73% of teams will be remote by 2028. Would you like me to analyze specific opportunities in this space?",
      },
    ]);
  };

  const renderSidebar = () => (
    <div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">IdeaForge</span>
            <div className="text-xs text-gray-500">AI Business Partner</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
              currentPage === item.id
                ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* AI Chat Toggle */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => setShowAIChat(!showAIChat)}
          className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">AI Business Coach</span>
        </button>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );

  const renderQuestionStep = () => (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Question {currentStep + 1} of {questions.length}
          </span>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">~2 min remaining</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${((currentStep + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {questions[currentStep]}
            </h2>
            <p className="text-gray-600">
              Be specific - this helps our AI understand your unique strengths
              and market opportunities.
            </p>
          </div>
        </div>

        <textarea
          value={answers[questions[currentStep]] || ""}
          onChange={(e) =>
            handleAnswerChange(questions[currentStep], e.target.value)
          }
          placeholder="Share your thoughts here... The more detailed, the better insights you'll get."
          className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700"
        />

        {/* AI Suggestions */}
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              AI Suggestion
            </span>
          </div>
          <p className="text-sm text-blue-800">
            {currentStep === 0 &&
              "Consider specific demographics: age, income, profession, pain points..."}
            {currentStep === 1 &&
              "Think about emotional triggers: what keeps them up at night?"}
            {currentStep === 2 &&
              "Who has budget authority? Individual consumers or businesses?"}
            {currentStep === 3 &&
              "Include both hard skills (technical) and soft skills (communication, etc.)"}
            {currentStep > 3 &&
              "Think about patterns in your daily life and work experiences..."}
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 rounded-xl"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Previous</span>
          </button>

          {currentStep < questions.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={generateIdeas}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Generate My Ideas</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderIdeaResults = () => (
    <div className="space-y-8">
      {/* Market Trends Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">🔥 Hot Market Trends</h3>
            <div className="flex items-center space-x-6">
              {trendingIdeas.slice(0, 2).map((trend, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{trend.title}</span>
                  <span className="ml-2 text-green-300">{trend.growth}</span>
                </div>
              ))}
            </div>
          </div>
          <TrendingUp className="w-8 h-8" />
        </div>
      </div>

      {/* Generated Ideas */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Personalized Ideas
            </h2>
            <p className="text-gray-600">
              AI analyzed 10,000+ successful startups to create these
              recommendations
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="grid gap-8">
          {generatedIdeas.map((idea, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all bg-gray-50"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {idea.title}
                    </h3>
                    <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-800">
                        {idea.success_probability}% Success Rate
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    {idea.description}
                  </p>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-5 gap-4 mb-6">
                    <div className="text-center bg-white p-3 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">
                        {idea.score}
                      </div>
                      <div className="text-sm text-gray-600">Overall Score</div>
                    </div>
                    <div className="text-center bg-white p-3 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">
                        {idea.marketSize}
                      </div>
                      <div className="text-sm text-gray-600">Market Size</div>
                    </div>
                    <div className="text-center bg-white p-3 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">
                        {idea.funding}
                      </div>
                      <div className="text-sm text-gray-600">
                        Capital Needed
                      </div>
                    </div>
                    <div className="text-center bg-white p-3 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">
                        {idea.timeline}
                      </div>
                      <div className="text-sm text-gray-600">Time to MVP</div>
                    </div>
                    <div className="text-center bg-white p-3 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">
                        {idea.validation.signups}
                      </div>
                      <div className="text-sm text-gray-600">
                        Interest Level
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-6">
                  <div className="text-right mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold text-gray-900">
                        {idea.score}
                      </span>
                      <span className="text-gray-500">/10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Validation Data */}
              <div className="bg-white rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Market Validation Preview
                </h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Customer Interviews:</span>
                    <span className="ml-2 font-semibold text-gray-900">
                      {idea.validation.interviews} completed
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Landing Page Signups:</span>
                    <span className="ml-2 font-semibold text-green-600">
                      {idea.validation.signups}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Conversion Rate:</span>
                    <span className="ml-2 font-semibold text-blue-600">
                      {idea.validation.conversion}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>Start Building</span>
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Validate First</span>
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Success Stories From Our Community
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-2xl">{story.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {story.name}
                  </div>
                  <div className="text-sm text-gray-600">{story.idea}</div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-600">
                  {story.revenue}
                </div>
                <div className="text-sm text-gray-600">in {story.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGeneratePage = () => {
    if (generatedIdeas.length === 0) {
      return renderQuestionStep();
    } else {
      return renderIdeaResults();
    }
  };

  const renderValidatePage = () => (
    <div className="p-6 space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Validation Tools */}
        <div className="md:col-span-2 space-y-6">
          {/* Customer Interview Kit */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Users2 className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                AI Customer Interview Kit
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Get AI-generated interview questions tailored to your idea
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-medium text-blue-900 mb-2">
                  Sample Questions Generated
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• How do you currently solve this problem?</li>
                  <li>• What's the biggest pain point in your workflow?</li>
                  <li>• How much time/money does this cost you?</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-medium text-green-900 mb-2">
                  Interview Scheduler
                </h4>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Book 5 Interviews
                </button>
                <p className="text-xs text-green-700 mt-2">
                  AI matches you with ideal customers
                </p>
              </div>
            </div>
          </div>

          {/* MVP Builder */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                No-Code MVP Builder
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Build a working prototype in minutes with our AI-powered tools
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium text-purple-900">Landing Page</h4>
                <p className="text-xs text-purple-700">
                  AI-generated copy & design
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <Video className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium text-purple-900">Demo Video</h4>
                <p className="text-xs text-purple-700">
                  Auto-generated explainer
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium text-purple-900">Prototype</h4>
                <p className="text-xs text-purple-700">
                  Interactive wireframes
                </p>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
              Start Building MVP
            </button>
          </div>

          {/* Market Testing */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Live Market Testing
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Get real market feedback with automated A/B testing
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-orange-900">Google Ads Campaign</span>
                <span className="text-sm text-orange-700">
                  $50 budget • 2.3% CTR
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-900">Facebook Validation</span>
                <span className="text-sm text-blue-700">
                  156 signups • 18% conversion
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-green-900">Email Waitlist</span>
                <span className="text-sm text-green-700">
                  234 subscribers • Growing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Progress & Insights */}
        <div className="space-y-6">
          {/* Validation Score */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">
              Validation Score
            </h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">78%</div>
              <p className="text-sm text-gray-600 mb-4">
                Strong market validation
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Problem fit</span>
                <span className="font-medium">9/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Market size</span>
                <span className="font-medium">8/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Competition</span>
                <span className="font-medium">7/10</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">
              Recommended Next Steps
            </h3>
            <div className="space-y-3">
              {[
                {
                  step: "Interview 5 more customers",
                  priority: "High",
                  time: "2 days",
                },
                {
                  step: "Build MVP wireframes",
                  priority: "High",
                  time: "1 week",
                },
                {
                  step: "Set up analytics tracking",
                  priority: "Medium",
                  time: "1 day",
                },
                {
                  step: "Research pricing models",
                  priority: "Medium",
                  time: "3 days",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">
                      {item.step}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.time} • {item.priority} priority
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">AI Insights</h3>
            </div>
            <p className="text-sm text-blue-800 mb-3">
              "Based on similar successful startups, consider pivoting your
              pricing model to freemium with premium features."
            </p>
            <button className="text-xs text-blue-700 hover:text-blue-800 font-medium">
              View detailed analysis →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBuildPage = () => (
    <div className="p-6 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Build Tools */}
        <div className="space-y-6">
          {/* Business Plan Generator */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                AI Business Plan Generator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Create investor-ready business plans in minutes
            </p>
            <div className="space-y-3">
              {[
                {
                  section: "Executive Summary",
                  status: "completed",
                  color: "green",
                },
                {
                  section: "Market Analysis",
                  status: "in-progress",
                  color: "blue",
                },
                {
                  section: "Financial Projections",
                  status: "pending",
                  color: "gray",
                },
                {
                  section: "Go-to-Market Strategy",
                  status: "pending",
                  color: "gray",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium text-gray-900">
                    {item.section}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "in-progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Continue Business Plan
            </button>
          </div>

          {/* Team Builder */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Team & Co-founder Matching
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Find the perfect team members for your startup
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl mb-2">👩‍💻</div>
                <div className="font-medium text-purple-900">CTO Match</div>
                <div className="text-xs text-purple-700">87% compatibility</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl mb-2">👨‍💼</div>
                <div className="font-medium text-purple-900">CMO Match</div>
                <div className="text-xs text-purple-700">92% compatibility</div>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 border border-purple-300 text-purple-700 rounded-xl hover:bg-purple-50">
              Browse Matches
            </button>
          </div>
        </div>

        {/* Right Column - Launch Tools */}
        <div className="space-y-6">
          {/* Launch Checklist */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Launch Checklist
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { task: "Legal structure (LLC/Corp)", completed: true },
                { task: "Brand identity & logo", completed: true },
                { task: "Domain & website", completed: false },
                { task: "Payment processing", completed: false },
                { task: "Analytics setup", completed: false },
                { task: "Marketing materials", completed: false },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      item.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    {item.completed && (
                      <CheckCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span
                    className={`flex-1 ${
                      item.completed
                        ? "text-gray-500 line-through"
                        : "text-gray-900"
                    }`}
                  >
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-900 mb-1">
                Progress: 33% Complete
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Resources & Tools */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Startup Resources
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Legal Templates", icon: Shield, color: "blue" },
                { name: "Pitch Deck", icon: FileText, color: "purple" },
                { name: "Logo Maker", icon: Camera, color: "green" },
                { name: "Website Builder", icon: Globe, color: "orange" },
              ].map((resource, index) => (
                <button
                  key={index}
                  className={`p-4 bg-${resource.color}-50 rounded-xl hover:bg-${resource.color}-100 transition-colors`}
                >
                  <resource.icon
                    className={`w-6 h-6 text-${resource.color}-600 mx-auto mb-2`}
                  />
                  <div
                    className={`text-sm font-medium text-${resource.color}-900`}
                  >
                    {resource.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Expert Help */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-center space-x-2 mb-3">
              <Users2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Get Expert Help</h3>
            </div>
            <p className="text-sm text-green-800 mb-4">
              Connect with vetted experts for specialized help
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-800">Legal Setup</span>
                <span className="text-green-600">$299</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-800">Logo Design</span>
                <span className="text-green-600">$149</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-800">Marketing Plan</span>
                <span className="text-green-600">$399</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
              Browse Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrowPage = () => (
    <div className="p-6 space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Growth Metrics */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Growth Dashboard
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">1,234</div>
                <div className="text-sm text-blue-800">Total Users</div>
                <div className="text-xs text-green-600">↑ 12% this month</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">$12.5K</div>
                <div className="text-sm text-green-800">Monthly Revenue</div>
                <div className="text-xs text-green-600">↑ 23% this month</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">4.2%</div>
                <div className="text-sm text-purple-800">Conversion Rate</div>
                <div className="text-xs text-green-600">↑ 1.1% this month</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">2.8%</div>
                <div className="text-sm text-orange-800">Churn Rate</div>
                <div className="text-xs text-red-600">↑ 0.3% this month</div>
              </div>
            </div>
          </div>

          {/* Growth Experiments */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Active Growth Experiments
              </h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Experiment</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Email Marketing Campaign",
                  status: "running",
                  progress: 65,
                  metric: "Open Rate: 34%",
                  confidence: "85%",
                },
                {
                  name: "Pricing Page A/B Test",
                  status: "completed",
                  progress: 100,
                  metric: "Conversion: 2.1% → 3.8%",
                  confidence: "99%",
                },
                {
                  name: "Referral Program Launch",
                  status: "planning",
                  progress: 25,
                  metric: "Expected: +15% signups",
                  confidence: "TBD",
                },
              ].map((experiment, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">
                      {experiment.name}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        experiment.status === "running"
                          ? "bg-blue-100 text-blue-800"
                          : experiment.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {experiment.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{experiment.metric}</span>
                    <span className="text-gray-600">
                      Confidence: {experiment.confidence}
                    </span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${experiment.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - AI Recommendations */}
        <div className="space-y-6">
          {/* AI Growth Recommendations */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">AI Growth Coach</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm mb-1">
                  Priority Action
                </div>
                <p className="text-xs text-purple-800">
                  Focus on email marketing - your open rates are 23% above
                  industry average
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm mb-1">
                  Opportunity
                </div>
                <p className="text-xs text-purple-800">
                  Consider premium tier - 34% of users hit usage limits
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm mb-1">
                  Warning
                </div>
                <p className="text-xs text-purple-800">
                  Churn risk: 12 customers haven't logged in 30+ days
                </p>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
              Get Detailed Analysis
            </button>
          </div>

          {/* Funding Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2 mb-4">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">Funding Readiness</h3>
            </div>
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-gray-900 mb-1">73%</div>
              <p className="text-sm text-gray-600">Ready for Series A</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: "73%" }}
                ></div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Traction</span>
                <span className="font-medium text-green-600">✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Team</span>
                <span className="font-medium text-green-600">✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Business Model</span>
                <span className="font-medium text-yellow-600">~</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Financial Projections</span>
                <span className="font-medium text-red-600">✗</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 border border-green-300 text-green-700 rounded-xl hover:bg-green-50">
              Connect with Investors
            </button>
          </div>

          {/* Milestone Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">
              Next Milestones
            </h3>
            <div className="space-y-3">
              {[
                {
                  milestone: "Reach $20K MRR",
                  progress: 62,
                  target: "Q2 2025",
                },
                {
                  milestone: "100 Enterprise Customers",
                  progress: 34,
                  target: "Q3 2025",
                },
                {
                  milestone: "Series A Funding",
                  progress: 15,
                  target: "Q4 2025",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-900">
                      {item.milestone}
                    </span>
                    <span className="text-gray-600">{item.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.progress}% complete
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIdeasPage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            My Business Portfolio
          </h2>
          <p className="text-gray-600">
            Track and manage all your business ideas and ventures
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add New Idea</span>
        </button>
      </div>

      {/* Portfolio Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Total Ideas</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">In Development</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$23K</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">8.4</div>
              <div className="text-sm text-gray-600">Avg. Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid gap-6">
        {sampleIdeas.map((idea, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {idea.title}
                  </h3>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      index === 0
                        ? "bg-green-100 text-green-800"
                        : index === 1
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {index === 0
                      ? "Launched"
                      : index === 1
                      ? "Building"
                      : "Validating"}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{idea.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">
                      {index === 0 ? "100%" : index === 1 ? "67%" : "34%"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0
                          ? "bg-green-500"
                          : index === 1
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                      }`}
                      style={{
                        width:
                          index === 0 ? "100%" : index === 1 ? "67%" : "34%",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">
                      {idea.score}
                    </div>
                    <div className="text-xs text-gray-600">Score</div>
                  </div>
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600">
                      {idea.marketSize}
                    </div>
                    <div className="text-xs text-gray-600">Market</div>
                  </div>
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">
                      {index === 0 ? "$12.5K" : index === 1 ? "$3.2K" : "$0"}
                    </div>
                    <div className="text-xs text-gray-600">Revenue</div>
                  </div>
                  <div className="text-center bg-gray-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">
                      {index === 0 ? "234" : index === 1 ? "89" : "45"}
                    </div>
                    <div className="text-xs text-gray-600">Users</div>
                  </div>
                </div>
              </div>

              <div className="ml-6">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-gray-900">{idea.score}</span>
                </div>
                <div className="text-right">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index === 0
                        ? "bg-green-500"
                        : index === 1
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              {index === 0 ? (
                <>
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Scale Business</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </button>
                </>
              ) : index === 1 ? (
                <>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
                    <Rocket className="w-4 h-4" />
                    <span>Continue Building</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Find Co-founder</span>
                  </button>
                </>
              ) : (
                <>
                  <button className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center justify-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Continue Validation</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Feedback</span>
                  </button>
                </>
              )}
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommunityPage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Success Network</h2>
          <p className="text-gray-600">
            Connect with entrepreneurs, get feedback, and learn from success
            stories
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Share Update</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="md:col-span-2 space-y-6">
          {/* Success Story Feed */}
          {[
            {
              user: { name: "Sarah Chen", avatar: "👩‍💼", title: "SaaS Founder" },
              achievement: "Just hit $100K ARR! 🎉",
              story:
                "18 months ago, I had just an idea. Today, PetTracker serves 2,000+ pet owners. Key lessons: talk to customers daily, iterate fast, and don't give up.",
              metrics: {
                revenue: "$100K ARR",
                customers: "2,000+",
                time: "18 months",
              },
              likes: 47,
              comments: 12,
              time: "2h",
            },
            {
              user: {
                name: "Mike Rodriguez",
                avatar: "👨‍💻",
                title: "E-commerce",
              },
              achievement: "Sold my startup for $2.3M! 💰",
              story:
                "Started LocalServices in my garage 3 years ago. Just closed acquisition deal. The journey was tough but worth every moment. Happy to share lessons learned!",
              metrics: { exit: "$2.3M", time: "3 years", team: "8 people" },
              likes: 89,
              comments: 23,
              time: "5h",
            },
            {
              user: {
                name: "Lisa Park",
                avatar: "👩‍🎓",
                title: "EdTech Founder",
              },
              achievement: "Raised $500K seed round! 🚀",
              story:
                "After 47 investor rejections, finally closed our seed round. Building AI tutors for kids. Persistence pays off - keep pushing forward!",
              metrics: {
                funding: "$500K",
                investors: "3 VCs",
                valuation: "$3M",
              },
              likes: 34,
              comments: 8,
              time: "1d",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">{post.user.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {post.user.name}
                  </div>
                  <div className="text-sm text-gray-600">{post.user.title}</div>
                </div>
                <div className="ml-auto text-sm text-gray-500">{post.time}</div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {post.achievement}
              </h3>
              <p className="text-gray-700 mb-4">{post.story}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-gray-50 rounded-xl">
                {Object.entries(post.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="font-semibold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <button className="flex items-center space-x-1 hover:text-red-600">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-600">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">
              🔥 Trending Topics
            </h3>
            <div className="space-y-3">
              {[
                { topic: "#RemoteWork", posts: "234 posts" },
                { topic: "#AIStartup", posts: "189 posts" },
                { topic: "#FundingTips", posts: "156 posts" },
                { topic: "#ProductLaunch", posts: "98 posts" },
                { topic: "#GrowthHacking", posts: "87 posts" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <span className="font-medium text-blue-600">
                    {item.topic}
                  </span>
                  <span className="text-xs text-gray-500">{item.posts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Office Hours */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">
                Expert Office Hours
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm">
                  Tomorrow 2PM PST
                </div>
                <div className="text-xs text-purple-800">
                  Fundraising 101 with Sarah Kim (ex-Sequoia)
                </div>
                <button className="text-xs text-purple-700 hover:text-purple-800 font-medium mt-1">
                  Join Session →
                </button>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm">
                  Friday 3PM PST
                </div>
                <div className="text-xs text-purple-800">
                  Growth Marketing with David Chen
                </div>
                <button className="text-xs text-purple-700 hover:text-purple-800 font-medium mt-1">
                  Register →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">
              Community Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Members</span>
                <span className="font-semibold text-gray-900">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Success Stories</span>
                <span className="font-semibold text-green-600">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Revenue</span>
                <span className="font-semibold text-blue-600">$47.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ideas Launched</span>
                <span className="font-semibold text-purple-600">5,678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarketplacePage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Expert Services Marketplace
          </h2>
          <p className="text-gray-600">
            Get professional help from vetted experts to accelerate your startup
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center space-x-2">
          <Users className="w-4 h-4" />
          <span>Become an Expert</span>
        </button>
      </div>

      {/* Service Categories */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {[
          {
            name: "Legal & Compliance",
            icon: Shield,
            count: 24,
            color: "blue",
          },
          {
            name: "Design & Branding",
            icon: Camera,
            count: 67,
            color: "purple",
          },
          {
            name: "Marketing & Growth",
            icon: TrendingUp,
            count: 89,
            color: "green",
          },
          { name: "Development", icon: Globe, count: 45, color: "orange" },
        ].map((category, index) => (
          <button
            key={index}
            className={`p-4 bg-${category.color}-50 rounded-xl hover:bg-${category.color}-100 transition-colors text-left`}
          >
            <category.icon
              className={`w-8 h-8 text-${category.color}-600 mb-3`}
            />
            <div className={`font-semibold text-${category.color}-900`}>
              {category.name}
            </div>
            <div className={`text-sm text-${category.color}-700`}>
              {category.count} experts
            </div>
          </button>
        ))}
      </div>

      {/* Featured Services */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Complete Legal Startup Package",
            expert: { name: "Sarah Johnson", rating: 4.9, reviews: 127 },
            price: "$1,299",
            duration: "3-5 days",
            description:
              "LLC formation, operating agreement, privacy policy, terms of service, and IP protection",
            category: "Legal",
            featured: true,
          },
          {
            title: "Brand Identity & Logo Design",
            expert: { name: "Mike Chen", rating: 4.8, reviews: 89 },
            price: "$899",
            duration: "5-7 days",
            description:
              "Complete brand package with logo, color palette, typography, and brand guidelines",
            category: "Design",
            featured: true,
          },
          {
            title: "Growth Marketing Strategy",
            expert: { name: "Lisa Rodriguez", rating: 4.9, reviews: 156 },
            price: "$1,599",
            duration: "1-2 weeks",
            description:
              "Custom growth plan with channel analysis, customer acquisition strategy, and KPIs",
            category: "Marketing",
            featured: false,
          },
          {
            title: "MVP Development (No-Code)",
            expert: { name: "David Park", rating: 4.7, reviews: 78 },
            price: "$2,499",
            duration: "2-3 weeks",
            description:
              "Complete MVP using Bubble, Webflow, or Airtable with integrations and testing",
            category: "Development",
            featured: false,
          },
          {
            title: "Investor Pitch Deck Creation",
            expert: { name: "Emma Wilson", rating: 4.9, reviews: 203 },
            price: "$799",
            duration: "3-5 days",
            description:
              "Investor-ready pitch deck with storytelling, financial projections, and design",
            category: "Business",
            featured: true,
          },
          {
            title: "Financial Modeling & Projections",
            expert: { name: "Alex Thompson", rating: 4.8, reviews: 94 },
            price: "$1,199",
            duration: "1 week",
            description:
              "3-year financial model with scenarios, cash flow analysis, and investor metrics",
            category: "Finance",
            featured: false,
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 shadow-lg border ${
              service.featured
                ? "border-yellow-200 ring-2 ring-yellow-100"
                : "border-gray-100"
            } hover:shadow-xl transition-all`}
          >
            {service.featured && (
              <div className="flex items-center space-x-2 mb-3">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-800 bg-yellow-100 px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
            )}

            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {service.category}
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {service.price}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {service.expert.name[0]}
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {service.expert.name}
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span>{service.expert.rating}</span>
                  <span>•</span>
                  <span>{service.expert.reviews} reviews</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Delivery: {service.duration}</span>
              </div>
            </div>

            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFundingPage = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Investor Connect</h2>
          <p className="text-gray-600">
            Connect with investors and access funding opportunities
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Submit Pitch</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Funding Readiness Assessment */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Funding Readiness Assessment
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    73%
                  </div>
                  <p className="text-gray-600">Ready for Series A</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: "73%" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { item: "Traction & Growth", score: 9, status: "excellent" },
                  { item: "Team Strength", score: 8, status: "good" },
                  { item: "Market Opportunity", score: 9, status: "excellent" },
                  { item: "Business Model", score: 7, status: "good" },
                  {
                    item: "Financial Projections",
                    score: 5,
                    status: "needs-work",
                  },
                ].map((criteria, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700">
                      {criteria.item}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">
                        {criteria.score}/10
                      </span>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          criteria.status === "excellent"
                            ? "bg-green-500"
                            : criteria.status === "good"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Improve Readiness Score
            </button>
          </div>

          {/* Matched Investors */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Matched Investors
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Accel Partners",
                  focus: "B2B SaaS, AI/ML",
                  stage: "Series A",
                  checkSize: "$2-10M",
                  match: 94,
                  portfolio: ["Slack", "Dropbox", "Atlassian"],
                },
                {
                  name: "First Round Capital",
                  focus: "Consumer Tech, SaaS",
                  stage: "Seed to Series A",
                  checkSize: "$500K-5M",
                  match: 87,
                  portfolio: ["Uber", "Warby Parker", "Mint"],
                },
                {
                  name: "Bessemer Venture Partners",
                  focus: "Cloud, AI, Marketplaces",
                  stage: "Series A-B",
                  checkSize: "$5-20M",
                  match: 82,
                  portfolio: ["Shopify", "Twilio", "LinkedIn"],
                },
              ].map((investor, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {investor.name}
                      </h4>
                      <p className="text-sm text-gray-600">{investor.focus}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="text-lg font-bold text-green-600">
                          {investor.match}%
                        </div>
                        <div className="text-sm text-gray-600">match</div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {investor.stage}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>Check Size: {investor.checkSize}</span>
                    <span>
                      Portfolio: {investor.portfolio.slice(0, 2).join(", ")}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                    Request Introduction
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Funding Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Platform Stats</h3>
            <div className="space-y-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">$127M</div>
                <div className="text-sm text-green-800">Total Raised</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">234</div>
                <div className="text-sm text-blue-800">Funded Startups</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">89%</div>
                <div className="text-sm text-purple-800">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Recent Success Stories */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Funding</h3>
            <div className="space-y-3">
              {[
                {
                  company: "TechFlow AI",
                  amount: "$2.3M",
                  stage: "Series A",
                  time: "2 days ago",
                },
                {
                  company: "EcoCommerce",
                  amount: "$800K",
                  stage: "Seed",
                  time: "1 week ago",
                },
                {
                  company: "HealthTrack Pro",
                  amount: "$1.5M",
                  stage: "Seed+",
                  time: "2 weeks ago",
                },
              ].map((funding, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">
                      {funding.company}
                    </span>
                    <span className="font-semibold text-green-600">
                      {funding.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{funding.stage}</span>
                    <span>{funding.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">Investor Events</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm">
                  Demo Day 2024
                </div>
                <div className="text-xs text-purple-800 mb-1">
                  Dec 15, 2024 • Virtual
                </div>
                <div className="text-xs text-purple-700">50+ VCs attending</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <div className="font-medium text-purple-900 text-sm">
                  Angel Investor Meetup
                </div>
                <div className="text-xs text-purple-800 mb-1">
                  Dec 22, 2024 • San Francisco
                </div>
                <div className="text-xs text-purple-700">
                  Networking & pitches
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // AI Chat Component
  const renderAIChat = () => {
    if (!showAIChat) return null;

    return (
      <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                AI Business Coach
              </div>
              <div className="text-xs text-green-600">● Online</div>
            </div>
          </div>
          <button
            onClick={() => setShowAIChat(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {aiMessages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask me anything about your business..."
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  sendAIMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderHeader = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {navItems.find((item) => item.id === currentPage)?.label}
          </h1>
          <p className="text-gray-600 mt-1">
            {currentPage === "generate" &&
              "AI-powered idea generation with market validation"}
            {currentPage === "validate" &&
              "Test your ideas with real market data"}
            {currentPage === "build" &&
              "No-code tools to build and launch fast"}
            {currentPage === "grow" &&
              "Scale your business with growth frameworks"}
            {currentPage === "ideas" &&
              "Track and manage your business portfolio"}
            {currentPage === "community" &&
              "Connect with successful entrepreneurs"}
            {currentPage === "marketplace" &&
              "Access expert services and resources"}
            {currentPage === "funding" &&
              "Connect with investors and funding opportunities"}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search ideas, trends..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case "generate":
        return renderGeneratePage();
      case "validate":
        return renderValidatePage();
      case "build":
        return renderBuildPage();
      case "grow":
        return renderGrowPage();
      case "ideas":
        return renderIdeasPage();
      case "community":
        return renderCommunityPage();
      case "marketplace":
        return renderMarketplacePage();
      case "funding":
        return renderFundingPage();
      default:
        return renderGeneratePage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {renderSidebar()}
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderHeader()}
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
      {renderAIChat()}
    </div>
  );
};

export default Dashboard;
