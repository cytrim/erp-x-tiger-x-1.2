/* © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission. */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 16 }}>
      {/* TigerX QuickLinks */}
      <div style={{ marginBottom: 16 }}>
        <Link to="/payments" className="ant-btn ant-btn-primary" style={{ marginRight: 8 }}>
          💳 {t('nav.payments', 'Payments')}
        </Link>
        <Link to="/settings" className="ant-btn">
          {t('nav.settings', 'My Settings')}
        </Link>
      </div>
    </div>
  );
}
