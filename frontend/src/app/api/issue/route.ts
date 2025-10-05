import { NextRequest, NextResponse } from 'next/server';
import { UserInfo } from '@/lib/types/user';
import { getMockDataFromTopic } from '@/lib/data/fallback';

export async function POST(request: NextRequest) {
  let body: UserInfo | null = null;

  try {
    body = await request.json();
    console.log(body)

    // Make the request to your backend
    const response = await fetch('http://localhost:8080/api/createissue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log("THIS RUNS")

    const data = await response.json();
    console.log('Response from backend:', data);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to create issue', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error creating issue:', error);
    console.log('Falling back to mock data');

    const topicMockData = getMockDataFromTopic(body?.topic ?? 'default');
    return NextResponse.json(topicMockData, { status: 200 });
  }
}
