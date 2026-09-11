/**
 * Build-time database queries for publisher records.
 *
 * These helpers keep publisher lookup logic centralized and injectable so the
 * data layer can be tested independently from Astro page rendering.
 */

import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Returns every publisher ordered by display name.
 *
 * @param db - The database client used to read publisher rows.
 * @returns A list of publisher records containing each publisher id and name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}