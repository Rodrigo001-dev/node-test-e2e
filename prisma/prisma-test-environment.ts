import type { Config } from '@jest/types';
import { exec } from 'node:child_process';
import dotenv from 'dotenv';
import NodeEnvironment from 'jest-environment-node';
import { Client } from 'pg';
import util from 'node:util';
import crypto from 'node:crypto';

dotenv.config({ path: '.env.testing' });

const execSync = util.promisify(exec);

const prismaBinary = './node_modules/.bin/prisma';

export default class PrismaTestEnvironment extends NodeEnvironment {
  private schema: string;
  private connectionString: string;

  constructor(config: Config.ProjectConfig) {
    super(config);

    const dbUser = process.env.DATABASE_USER;
    const dbPass = process.env.DATABASE_PASS;
    const dbHost = process.env.DATABASE_HOST;
    const dbPort = process.env.DATABASE_PORT;
    const dbName = process.env.DATABASE_NAME;

    this.schema = `test_${crypto.randomUUID()}`;
    // criando um banco de dados específico para uma suite de teste
    this.connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`;
  }

  // vai rodar antes de cada suite(arquivo) de teste e2e
  async setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    // rodando as migrations(cria as tabelas no banco)
    await execSync(`${prismaBinary} migrate deploy`);

    return super.setup();
  }

  // vai rodar depois de cada suite(arquivo) de teste e2e
  async teardown() {
    const client = new Client({
      connectionString: this.connectionString,
    });

    await client.connect();
    // deletando o schema
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}