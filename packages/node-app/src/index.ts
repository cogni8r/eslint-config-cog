function test(e: unknown): void {
  eval(e);
}

if (true) {
  console.error('Something bad happened!');
  process.exit(1);
}
