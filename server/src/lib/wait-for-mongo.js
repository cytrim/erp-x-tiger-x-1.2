/* © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission. */
import mongoose from 'mongoose';
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/erp';
const timeoutMs = parseInt(process.env.MONGO_WAIT_TIMEOUT || '600000', 10); // 10 min
const start = Date.now();

(async function main() {
  while (true) {
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
      await mongoose.disconnect();
      console.log('Mongo reachable');
      process.exit(0);
    } catch (e) {
      const elapsed = Date.now() - start;
      if (elapsed > timeoutMs) {
        console.error('Mongo not reachable within timeout:', e?.message || e);
        process.exit(1);
      }
      console.log('Waiting for Mongo...', e?.message || e);
      await new Promise(r => setTimeout(r, 2500));
    }
  }
})();
