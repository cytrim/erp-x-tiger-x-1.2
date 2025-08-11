/* © 2025 Tiger X Panel — Proprietary/UI modules by Jan Köppke. Do not copy without permission.
*/

import React from 'react';
import { Layout, Menu, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const { Header, Sider, Content } = Layout;

export default function AppLayout({ children }) {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const key = (() => {
    if (pathname.startsWith('/customers')) return 'customers';
    if (pathname.startsWith('/products')) return 'products';
    if (pathname.startsWith('/quotes')) return 'quotes';
    if (pathname.startsWith('/payments')) return 'payments';
    if (pathname.startsWith('/settings')) return 'settings';
    if (pathname.startsWith('/invoices')) return 'invoices';
    return 'dashboard';
  })();

  return (
    <Layout>
      <Sider collapsible>
        <div style={{ padding:16 }}>
          <div className="brand">Tiger X <span className="brand-accent">Panel</span></div>
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[key]}
          items={[
            { key:'dashboard', label:<Link to="/">{t('nav.dashboard')}</Link> },
            { key:'customers', label:<Link to="/customers">{t('nav.customers')}</Link> },
            { key:'products', label:<Link to="/products">{t('nav.products')}</Link> },
            { key:'quotes', label:<Link to="/quotes">{t('nav.quotes')}</Link> },
            { key:'invoices', label:<Link to="/invoices">{t('nav.invoices')}</Link> },
            { key:'payments', label:<Link to="/payments">{t('nav.payments')}</Link> }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap:12 }}>
          <Space size={12}>
            <Link to="/settings">{t('nav.settings')}</Link>
            <LanguageSwitcher />
          </Space>
        </Header>
        <Content style={{ margin:16 }}>{children}</Content>
      </Layout>
    </Layout>
  );
}