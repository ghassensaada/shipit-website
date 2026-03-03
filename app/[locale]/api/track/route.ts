import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { trackingNumber } = await req.json();

  const mockStatus = {
    trackingNumber,
    status: 'In transit',
    lastUpdate: new Date().toISOString(),
    location: 'Tunis Hub',
    eta: '2–3 business days',
  };

  return NextResponse.json(mockStatus);
}
