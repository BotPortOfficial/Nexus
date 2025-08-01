import {initDatabases, ErrorHandler, logger, validateEnvironmentVariables, setupBot} from '@botport/tickets';

async function main() {
  try {
    logger.info('Starting XenShop Discord Bot Framework...');

    const missingVars = validateEnvironmentVariables();
    if (missingVars.length > 0) {
      logger.error(`❌  Missing required environment variables: ${missingVars.join(', ')}`);
      logger.error('💡 Please check your .env file in the config directory');
      process.exit(1);
    }

    logger.info('Initializing database connections...');
    await initDatabases();
    logger.success('✅ Database connections established');

    const client = await setupBot();

    logger.info('🔐 Connecting to Discord...');
    await client.login(process.env.TOKEN);
  } catch (error) {
    logger.error('🚨 Critical error during bot initialization:');
    ErrorHandler.handleError(error, 'Bot Initialization', logger);
    logger.error('💡 Check your configuration and try again');
    process.exit(1);
  }
}

main().catch(error => {
  console.error('🚨 Unhandled error in main():', error);
  process.exit(1);
});
