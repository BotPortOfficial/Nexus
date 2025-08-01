import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import { TicketConfig, LanguageStrings } from '../types/index.js';
import { logger } from './logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadConfig(): Promise<{
  ticketOptions: { Ticket: TicketConfig };
  lang: LanguageStrings;
}> {
  logger.debug('🔄 Loading configuration and language files');

  try {
    const ticketOptionsRaw = await fs.readFile(
        path.join(__dirname, '..', '..', 'config', 'ticketOptions.json'),
        'utf8'
    );
    logger.debug('✅ Configuration has been loaded.');
    const ticketOptions = JSON.parse(ticketOptionsRaw);
    logger.debug('Current configuration:', ticketOptions);

    let lang: LanguageStrings = {};
    try {
      const langRaw = await fs.readFile(
          path.join(__dirname, '..', '..', 'lang', 'sv.json'),
          'utf8'
      );
      logger.debug('✅ Language configuration loaded');
      lang = JSON.parse(langRaw);
      logger.debug('lang parsed:', lang);
    } catch (err) {
      logger.error('Error loading language configuration:', err);
    }

    return { ticketOptions, lang };
  } catch (err) {
    logger.error('Error loading configuration files:', err);
    throw err;
  }
}

export function getLangString(
    lang: LanguageStrings,
    key: string,
    fallback: string
): string {
  return (lang?.['ticket.js'] && lang['ticket.js'][key]) || fallback;
}