import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await kv.get('temple_content');
    
    // Default multi-language structure if empty or not fully initialized
    const defaultData = {
      english: {
        dailyEvents: [
          { id: 1, date: "Today", time: "09:00 AM", event: "Morning Pooja" },
          { id: 2, date: "Today", time: "06:00 PM", event: "Evening Pooja" }
        ],
        monthlyEvents: [
          { id: 1, date: "15th", time: "06:00 PM", event: "Pournami Pooja" }
        ],
        announcements: "Welcome to Sree Dharma Sastha Temple Kavampattuvillai. Visit our admin panel to update this text!"
      },
      tamil: {
        dailyEvents: [
          { id: 1, date: "இன்று", time: "காலை 09:00", event: "காலை பூஜை" },
          { id: 2, date: "இன்று", time: "மாலை 06:00", event: "மாலை பூஜை" }
        ],
        monthlyEvents: [
          { id: 1, date: "15ஆம் தேதி", time: "மாலை 06:00", event: "பௌர்ணமி பூஜை" }
        ],
        announcements: "காவம்பாட்டுவிளை ஸ்ரீ தர்ம சாஸ்தா கோவிலுக்கு உங்களை வரவேற்கிறோம். இந்த உரையை புதுப்பிக்க நிர்வாகி பகுதியை (Admin Panel) அணுகவும்!"
      }
    };
    
    return NextResponse.json(data || defaultData);
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
    const { payload, password } = await request.json();
    
    // Fallback password for local testing if env is missing
    const adminPass = process.env.ADMIN_PASSWORD || 'templeadmin123';
    
    if (password !== adminPass) {
      return NextResponse.json({ error: 'Incorrect Password' }, { status: 401 });
    }

    await kv.set('temple_content', payload);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KV Save Error:", error);
    return NextResponse.json({ error: 'Failed to save data. Ensure Vercel KV is linked.' }, { status: 500 });
  }
}
