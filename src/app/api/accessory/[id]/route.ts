import { NextResponse } from 'next/server';
import db from '@/db';
import { Accessory } from '@/types/types';

export async function GET() {
  try {
    const result = await db.query('SELECT * FROM accessory');
    const accessory: Accessory[] = result.rows;
    return NextResponse.json(accessory);
  } catch (error) {
    console.error('Error fetching accessory:', error);
    return NextResponse.error();
  }
}

// import { NextRequest, NextResponse } from 'next/server';
// import { accessories } from '@/data/accessories'; // Adjust the path according to your project structure

// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   const { id } = params;
//   const accessory = accessories.find((acc) => acc.id === parseInt(id, 10));

//   if (!accessory) {
//     return NextResponse.json({ error: 'Accessory not found' }, { status: 404 });
//   }

//   return NextResponse.json(accessory);
// }
