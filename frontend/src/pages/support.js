import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function Support() {
  const isBrowser = useIsBrowser();
  console.log('isBrowser', isBrowser)

  // Fungsi untuk merender chat form
  const renderChatForm = () => {
    if (isBrowser) {
      return (
        <div id="chat_form">
          <script
            src="https://app.simplebotinstall.com/js/chat_form_plugin.js"
            data-bot-id="36269"
            async
          />
        </div>
      );
    }
    return <div id="chat_form" />;
  };

  return (
    <Layout>
      <Head>
        <title>Support</title>
        <meta name="description" content="Halaman Support Phibase" /> 
      </Head>

      <div className="container margin-vert--lg">
        <div className="text-center margin-bottom--lg">
          <h1 className="hero__title">Support Center</h1>
          <p className="hero__subtitle">
            Selamat datang di Pusat Bantuan Phibase
          </p>
          <div className="margin-bottom--lg">
            <p>
              Silakan ajukan pertanyaan Anda tentang aplikasi web Phibase di bawah ini.
              Tim support kami siap membantu Anda 24/7.
            </p>
            <p>
              Anda dapat menanyakan segala hal terkait:
            </p>
            <ul className="clean-list">
              <li>✓ Cara penggunaan fitur</li>
              <li>✓ Masalah teknis</li>
              <li>✓ Saran dan feedback</li>
              <li>✓ Informasi layanan</li>
            </ul>
          </div> 
        </div>
        
        {renderChatForm()}
      </div>
    </Layout>
  );
}
