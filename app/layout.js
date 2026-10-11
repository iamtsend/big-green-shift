import './globals.css';

export const metadata = {
  title: 'Big Green Shift — Team 19',
  description: 'Нарийн боовны шаардлагагүй савлагааг багасгах Team 19 төслийн интерактив үзүүлэн.',
};

export const viewport = {
  themeColor: '#173f31',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initFullscreen() {
                  var btn = document.getElementById('fullscreen');
                  if (!btn) return;
                  btn.onclick = async function() {
                    try {
                      if (!document.fullscreenElement) {
                        await document.documentElement.requestFullscreen();
                      } else {
                        await document.exitFullscreen();
                      }
                    } catch (e) {
                      btn.textContent = 'Браузерийн F11 ашиглаарай';
                    }
                  };
                  document.addEventListener('fullscreenchange', function() {
                    btn.textContent = document.fullscreenElement ? '⛶ Жижиг дэлгэц' : '⛶ Бүтэн дэлгэц';
                  });
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initFullscreen);
                } else {
                  initFullscreen();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

