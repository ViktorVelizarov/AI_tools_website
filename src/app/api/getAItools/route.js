import { NextResponse } from 'next/server';

export async function GET(request) { 
    const response = await fetch('https://getaitools3-2ttopirmva-ew.a.run.app/', {
        method: 'GET'})
        const data = await response.json();
        console.log("data:", data);
  return NextResponse.json(data);
}