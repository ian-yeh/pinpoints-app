import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, user, issueTitle } = body;
    
    console.log('Generating guidance for:', issueTitle);

    // Make the request to your backend
    const response = await fetch('http://localhost:8080/api/createissue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        user,
        issueTitle
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Backend error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate guidance', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Response from backend:', data);

    // Ensure we're returning the whatToDo array
    return NextResponse.json({ 
      whatToDo: data.data?.whatToDo || data.whatToDo || [] 
    }, { status: 200 });

  } catch (error) {
    console.error('Error generating guidance:', error);
    
    // Fallback response
    return NextResponse.json({ 
      whatToDo: ['Unable to generate personalized guidance at this time. Please try again later.'] 
    }, { status: 200 });
  }
}
