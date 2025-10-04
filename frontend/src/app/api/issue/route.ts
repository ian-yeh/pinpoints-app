import { NextRequest, NextResponse } from 'next/server';
import { mockData } from '@/lib/data/data';

import { UserInfo } from '@/lib/types/user';

export async function POST(request: NextRequest) {
  try {
    const body: UserInfo = await request.json();

    // Make the request to your backend
    const response = await fetch('http://localhost:8080/api/createissue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

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
    return NextResponse.json(mockData, { status: 200 });
  }
}
