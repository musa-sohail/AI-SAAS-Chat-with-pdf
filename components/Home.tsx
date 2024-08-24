'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons

import { MessageCircle, Smartphone, Cloud, Bookmark, Eye, ShieldCheck } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: MessageCircle,
      heading: "PDF Chat Companion",
      description: "Engage in seamless conversations with your PDF documents, extracting information and insights effortlessly."
    },
    {
      icon: Smartphone,
      heading: "Cross-Platform Interaction",
      description: "Enjoy an interactive experience across all your devices, ensuring you stay productive wherever you are."
    },
    {
      icon: Cloud,
      heading: "Cloud Integration",
      description: "Securely store and access your documents in the cloud, making your data available anytime, anywhere."
    },
    {
      icon: Bookmark,
      heading: "Persistent Memory",
      description: "Keep track of your previous chats and interactions, allowing for a more personalized and informed experience."
    },
    {
      icon: Eye,
      heading: "Dynamic PDF Viewing",
      description: "Experience advanced PDF viewing with interactive features, enhancing the way you interact with documents."
    },
    {
      icon: ShieldCheck,
      heading: "Enhanced Security",
      description: "Protect your data with industry-leading security measures, ensuring your documents remain safe and confidential."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 to-indigo-50 text-gray-900">
      <div className="flex justify-end p-4">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-indigo-600 hover:text-indigo-400 transition w-6 h-6" />
        </a>
      </div>
      <main className="flex flex-col items-center">
        <div className="hero-section h-[60vh] flex items-center justify-center">
          <div className="content max-w-4xl mx-4 lg:mx-8 text-center space-y-6 lg:space-y-8">
            <h1 className="text-indigo-600 font-bold lg:text-xl">
              Your Interactive Document Companion
            </h1>
            <p className="font-extrabold text-4xl lg:text-5xl leading-tight">
              Transform Your PDF Into <br className="inline-block" />
              Interactive Conversations.
            </p>
            <h2 className="text-base pt-2 lg:text-lg ">
              Introducing you{" "}
              <span className="text-indigo-600 font-semibold">
                Chat With PDF
              </span>
            </h2>
            <p className="text-center text-lg">
              Revolutionize your PDF interactions with seamless chat capabilities and cloud integration. Access and manage documents from anywhere with enhanced security and personalized features designed to boost productivity and efficiency.
            </p>

            <Button className="bg-indigo-600 text-white py-2 px-6 rounded-md mx-auto hover:bg-indigo-700 transition">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="additional-content w-full max-w-5xl mx-4 lg:mx-auto py-2 lg:py-2 space-y-10">
          <div className="image flex justify-center mb-20 px-4 sm:px-8">
            <Image alt="AI SaaS platform image" src="https://i.imgur.com/VciRSTI.jpeg" width={2432} height={1442} className="rounded-lg shadow-lg" />
          </div>

          <div className="features grid pb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card p-6 bg-transparent rounded-lg shadow-lg flex flex-col items-center text-center space-y-6">
                <feature.icon className="w-12 h-12 text-indigo-600" />
                <h3 className="text-lg font-semibold">{feature.heading}</h3>
                <p className="text-sm py-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
