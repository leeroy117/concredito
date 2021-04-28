import { App } from './app';

async function main() {
    const app = new App(2000);
    await app.listen()
}

main();