import { NextResponse } from 'next/server';

export async function GET(request) { 
    const response = await fetch('https://getaitools6-2ttopirmva-ew.a.run.app/categories', {
        method: 'GET'})
        const data = await response.json();
  return NextResponse.json(data);
}