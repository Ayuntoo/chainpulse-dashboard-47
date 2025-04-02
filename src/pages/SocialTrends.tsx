
import { useState } from "react";
import { ArrowLeft, TrendingUp, TrendingDown, MessageSquare, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";
import { socialTrendingTopics } from "@/lib/mockData";

export default function SocialTrends() {
  const navigate = useNavigate();
  const { loading, trending, refreshData } = useStats();
  
  // Sample student activity posts
  const popularPosts = [
    {
      author: "Student Council",
      handle: "@student_council",
      content: "Our annual talent show is just around the corner! Sign-ups are open until Friday. Show off your skills and win amazing prizes! #TalentShow2023",
      likes: 324,
      retweets: 154,
      time: "4 hours ago"
    },
    {
      author: "Science Club",
      handle: "@science_club",
      content: "Congratulations to our science fair winners! Amazing projects on renewable energy and biotechnology. Next year will be even bigger! #ScienceFair",
      likes: 218,
      retweets: 98,
      time: "7 hours ago"
    },
    {
      author: "Principal Johnson",
      handle: "@principal_johnson",
      content: "Proud to announce that our school has been recognized for academic excellence for the third year in a row! Congratulations to all students and teachers!",
      likes: 432,
      retweets: 286,
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
                <h1 className="text-2xl font-bold">School Activities</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
                <p className="text-muted-foreground mb-6">
                  Most discussed school events and activities across social platforms in the last week.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4">Topic</th>
                        <th className="text-left py-3 px-4">Mentions</th>
                        <th className="text-left py-3 px-4">Sentiment</th>
                        <th className="text-left py-3 px-4">Weekly Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialTrendingTopics.map((topic, index) => (
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
                  <School size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold">School Announcements</h2>
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
                          <MessageSquare size={14} />
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
