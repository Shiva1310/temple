import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await kv.get('temple_content');
    
    // Default multi-language structure if empty or not fully initialized
    const defaultData = {
      english: {
        dailyEvents: [
          { id: 1, date: "Event 1", time: "00:00", event: "-" },
          { id: 2, date: "Event 2", time: "00:00", event: "-" },
          { id: 3, date: "Event 3", time: "00:00", event: "-" },
          { id: 4, date: "Event 4", time: "00:00", event: "-" },
          { id: 5, date: "Event 5", time: "00:00", event: "-" }
        ],
        monthlyEvents: [
          { id: 1, date: "Event 1", time: "00:00", event: "-" },
          { id: 2, date: "Event 2", time: "00:00", event: "-" },
          { id: 3, date: "Event 3", time: "00:00", event: "-" },
          { id: 4, date: "Event 4", time: "00:00", event: "-" },
          { id: 5, date: "Event 5", time: "00:00", event: "-" }
        ],
        announcements: "Welcome to Sree Dharma Sastha Temple Kavampattuvillai. Visit our admin panel to update this text!"
      },
      tamil: {
        dailyEvents: [
          { id: 1, date: "நிகழ்வு 1", time: "00:00", event: "-" },
          { id: 2, date: "நிகழ்வு 2", time: "00:00", event: "-" },
          { id: 3, date: "நிகழ்வு 3", time: "00:00", event: "-" },
          { id: 4, date: "நிகழ்வு 4", time: "00:00", event: "-" },
          { id: 5, date: "நிகழ்வு 5", time: "00:00", event: "-" }
        ],
        monthlyEvents: [
          { id: 1, date: "நிகழ்வு 1", time: "00:00", event: "-" },
          { id: 2, date: "நிகழ்வு 2", time: "00:00", event: "-" },
          { id: 3, date: "நிகழ்வு 3", time: "00:00", event: "-" },
          { id: 4, date: "நிகழ்வு 4", time: "00:00", event: "-" },
          { id: 5, date: "நிகழ்வு 5", time: "00:00", event: "-" }
        ],
        announcements: "காவம்பாட்டுவிளை ஸ்ரீ தர்ம சாஸ்தா கோவிலுக்கு உங்களை வரவேற்கிறோம். இந்த உரையை புதுப்பிக்க நிர்வாகி பகுதியை (Admin Panel) அணுகவும்!"
      }
    };
    
    const resultData = data || defaultData;
    
    // Normalize function to ensure exactly 5 items exist
    const normalize5 = (arr, lang) => {
      let result = arr || [];
      // Pad to 5 if too small
      while (result.length < 5) {
        result.push({ 
          id: Date.now() + Math.random(), 
          date: lang === "english" ? "Date" : "தேதி", 
          time: lang === "english" ? "Time" : "நேரம்", 
          event: "-" 
        });
      }
      // Truncate to 5 if too big
      return result.slice(0, 5);
    };

    if (resultData.english) {
      resultData.english.dailyEvents = normalize5(resultData.english.dailyEvents, "english");
      resultData.english.monthlyEvents = normalize5(resultData.english.monthlyEvents, "english");
    }
    if (resultData.tamil) {
      resultData.tamil.dailyEvents = normalize5(resultData.tamil.dailyEvents, "tamil");
      resultData.tamil.monthlyEvents = normalize5(resultData.tamil.monthlyEvents, "tamil");
    }
    
    return NextResponse.json(resultData);
  } catch (error) {
    console.error("KV Fetch Error:", error);
    // If KV not setup perfectly yet locally, return default to prevent breakage
    return NextResponse.json({
      english: { dailyEvents: [], monthlyEvents: [], announcements: "Notice: Vercel KV storage is not yet connected." },
      tamil: { dailyEvents: [], monthlyEvents: [], announcements: "அறிவிப்பு: Vercel KV இன்னும் இணைக்கப்படவில்லை." }
    });
  }
}

export async function POST(request) {
  try {
    const { payload, password, action } = await request.json();
    
    // Fallback password for local testing if env is missing
    const adminPass = process.env.ADMIN_PASSWORD;
    console.log("admin",adminPass,password)
    
    if (password !== adminPass) {
      return NextResponse.json({ error: 'Incorrect Password' }, { status: 401 });
    }

    if (action === 'verify') {
      return NextResponse.json({ success: true, message: 'Password verified' });
    }

    await kv.set('temple_content', payload);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KV Save Error:", error);
    return NextResponse.json({ error: 'Failed to save data. Ensure Vercel KV is linked.' }, { status: 500 });
  }
}
