//test
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
