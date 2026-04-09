"use client";
import { useState, useEffect } from "react";
import { Lock, Save, Plus, Trash2, CalendarClock, MessageSquareWarning } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [content, setContent] = useState({
    english: { dailyEvents: [], monthlyEvents: [], announcements: "" },
    tamil: { dailyEvents: [], monthlyEvents: [], announcements: "" }
  });
  const [langTab, setLangTab] = useState("english");

  // Fetch current data on mount
  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent({
          english: data.english || { dailyEvents: [], monthlyEvents: [], announcements: "" },
          tamil: data.tamil || { dailyEvents: [], monthlyEvents: [], announcements: "" }
        });
      })
      .catch(err => console.error("Failed to load content", err));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password) return;
    
    // Test the password against the server
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify', password })
      });
      
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setMessage({ type: "", text: "" });
      } else {
        setMessage({ type: "error", text: data.error || "Incorrect password" });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error checking password." });
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          payload: content
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Successfully saved published content!" });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save content." });
        if (data.error === "Incorrect Password" || data.error === "Unauthorized") {
          setIsAuthenticated(false);
        }
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error occurred." });
    } finally {
      setIsLoading(false);
    }
  };

  const updateAnnouncement = (val) => {
    setContent(prev => ({
      ...prev,
      [langTab]: { ...prev[langTab], announcements: val }
    }));
  };

  const addEvent = (type) => {
    setContent(prev => ({
      ...prev,
      [langTab]: {
        ...prev[langTab],
        [type]: [...prev[langTab][type], { id: Date.now(), date: "", time: "", event: "" }]
      }
    }));
  };

  const removeEvent = (type, id) => {
    setContent(prev => ({
      ...prev,
      [langTab]: {
        ...prev[langTab],
        [type]: prev[langTab][type].filter(item => item.id !== id)
      }
    }));
  };

  const updateEvent = (type, id, field, value) => {
    setContent(prev => ({
      ...prev,
      [langTab]: {
        ...prev[langTab],
        [type]: prev[langTab][type].map(item => 
          item.id === id ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-orange-600 w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Portal</h1>
          <p className="text-gray-500 mb-8">Enter the master password to edit temple announcements.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {message.type === "error" && (
              <p className="text-red-500 text-sm text-left">{message.text}</p>
            )}
            <button 
              type="submit"
              className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Content Manager</h1>
            <p className="text-gray-500">Update homepage announcements and event scroll boards.</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isLoading}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {message.text && (
          <div className={`p-4 rounded-xl mb-8 font-semibold ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setLangTab("english")}
            className={`px-6 py-2 rounded-xl font-bold transition ${langTab === "english" ? "bg-orange-600 text-white" : "bg-white text-gray-600 shadow-sm border border-gray-200"}`}
          >
            English Content
          </button>
          <button
            onClick={() => setLangTab("tamil")}
            className={`px-6 py-2 rounded-xl font-bold transition ${langTab === "tamil" ? "bg-orange-600 text-white" : "bg-white text-gray-600 shadow-sm border border-gray-200"}`}
          >
            தமிழ் (Tamil) Content
          </button>
        </div>

        <div className="space-y-8">
          {/* Main Announcements */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquareWarning className="text-orange-500 w-6 h-6" />
              <h2 className="text-xl font-bold text-gray-800">Main Announcements ({langTab})</h2>
            </div>
            <textarea
              value={content[langTab].announcements}
              onChange={(e) => updateAnnouncement(e.target.value)}
              placeholder={langTab === "english" ? "e.g. Special pooja is arranged on..." : "உதாரணம்: சிறப்பு பூஜை..."}
              className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">Maximum ~200 words recommended. This shows on the marquee scroller.</p>
          </div>

          {/* Daily Events */}
          <EventEditor 
            title={`Daily Events (${langTab})`}
            type="dailyEvents"
            items={content[langTab].dailyEvents}
            onUpdate={(id, field, val) => updateEvent('dailyEvents', id, field, val)}
            lang={langTab}
          />

          {/* Monthly Events */}
          <EventEditor 
            title={`Monthly Events (${langTab})`}
            type="monthlyEvents"
            items={content[langTab].monthlyEvents}
            onUpdate={(id, field, val) => updateEvent('monthlyEvents', id, field, val)}
            lang={langTab}
          />
        </div>
      </div>
    </div>
  );
}

function EventEditor({ title, items, onUpdate, lang }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <CalendarClock className="text-orange-500 w-6 h-6" />
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-6 border-2 border-dashed border-gray-200 rounded-xl">
          No events added yet. Click "Add Event" to start.
        </p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 relative group">
              <input
                type="text"
                placeholder={lang === "english" ? "Date (e.g. Today)" : "தேதி (உதாரணம்: இன்று)"}
                value={item.date}
                onChange={(e) => onUpdate(item.id, 'date', e.target.value)}
                className="flex-1 sm:max-w-[150px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder={lang === "english" ? "Time (e.g. 06:00 PM)" : "நேரம் (மாலை 06:00)"}
                value={item.time}
                onChange={(e) => onUpdate(item.id, 'time', e.target.value)}
                className="flex-1 sm:max-w-[120px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder={lang === "english" ? "Event (e.g. Maha Pooja)" : "நிகழ்வு (மஹா பூஜை)"}
                value={item.event}
                onChange={(e) => onUpdate(item.id, 'event', e.target.value)}
                className="flex-[2] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
