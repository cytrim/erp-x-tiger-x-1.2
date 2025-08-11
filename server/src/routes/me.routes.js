/* © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission.
*/

import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getPreferences, updatePreferences } from '../controllers/me.controller.js';

const r = Router();
r.use(requireAuth);
r.get('/preferences', getPreferences);
r.put('/preferences', updatePreferences);
r.patch('/preferences', updatePreferences);
export default r;