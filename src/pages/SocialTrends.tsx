
import { useState } from "react";
import { ArrowLeft, TrendingUp, TrendingDown, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";

export default function SocialTrends() {
  const navigate = useNavigate();
  const { loading, trending, refreshData } = useStats();
  
  // Sample social data
  const trendingTopics = [
    { topic: "#Bitcoin", mentions: "124.5K", sentiment: "positive", change: "+15%" },
    { topic: "#Ethereum", mentions: "98.3K", sentiment: "positive", change: "+8%" },
    { topic: "#Solana", mentions: "76.1K", sentiment: "positive", change: "+22%" },
    { topic: "#Cardano", mentions: "45.6K", sentiment: "neutral", change: "+3%" },
    { topic: "#BNB", mentions: "32.8K", sentiment: "positive", change: "+7%" },
  ];
  
  const popularPosts = [
    {
      author: "CryptoAnalyst",
      handle: "@crypto_analyst",
      content: "Bitcoin just broke above the key resistance level. This could be the start of the next major move to the upside. $BTC $ETH",
      likes: 3240,
      retweets: 1540,
      time: "4 hours ago"
    },
    {
      author: "Blockchain Dev",
      handle: "@blockchain_dev",
      content: "Ethereum's next upgrade will significantly reduce gas fees and improve transaction speeds. A game-changer for DeFi applications. $ETH",
      likes: 2180,
      retweets: 980,
      time: "7 hours ago"
    },
    {
      author: "DeFi Explorer",
      handle: "@defi_explorer",
      content: "A new vulnerability was found in a popular DeFi protocol. All users should withdraw funds immediately while the team addresses the issue. Details in thread.",
      likes: 4320,
      retweets: 2860,
      time: "2 hours ago"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header onRefresh={refreshData} isLoading={loading} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-screen-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="rounded-full">
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-2xl font-bold">Social Trends</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
                <p className="text-muted-foreground mb-6">
                  Most discussed cryptocurrency topics across social media in the last 24 hours.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4">Topic</th>
                        <th className="text-left py-3 px-4">Mentions</th>
                        <th className="text-left py-3 px-4">Sentiment</th>
                        <th className="text-left py-3 px-4">24h Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trendingTopics.map((topic, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-4 font-medium">{topic.topic}</td>
                          <td className="py-3 px-4 text-muted-foreground">{topic.mentions}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                              topic.sentiment === 'positive' ? 'bg-chart-green/20 text-chart-green' :
                              topic.sentiment === 'negative' ? 'bg-chart-red/20 text-chart-red' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {topic.sentiment === 'positive' ? <TrendingUp size={12} className="mr-1" /> :
                               topic.sentiment === 'negative' ? <TrendingDown size={12} className="mr-1" /> : null}
                              {topic.sentiment}
                            </span>
                          </td>
                          <td className={`py-3 px-4 ${topic.change.startsWith('+') ? 'text-chart-green' : 'text-chart-red'}`}>
                            {topic.change}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="lg:col-span-4 bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <Twitter size={20} className="text-[#1DA1F2]" />
                  <h2 className="text-xl font-semibold">Popular Posts</h2>
                </div>
                <div className="space-y-6">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <div>
                          <div className="font-medium">{post.author}</div>
                          <div className="text-sm text-muted-foreground">{post.handle}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{post.time}</div>
                      </div>
                      <p className="text-sm mb-2">{post.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          {post.retweets}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp size={14} />
                          {post.likes}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
