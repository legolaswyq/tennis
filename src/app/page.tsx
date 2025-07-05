'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Load SimplybookWidget script
    const script1 = document.createElement('script');
    script1.src = '//widget.simplybook.net/v2/widget/widget.js';
    script1.type = 'text/javascript';
    document.head.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.innerHTML = `
        var widget = new SimplybookWidget({"widget_type":"button","url":"https:\/\/testwalter2.simplybook.net","theme":"simple_beauty_theme","theme_settings":{"sb_base_color":"#dd3649","header_color":"#f2f2f2","timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","display_item_mode":"block","body_bg_color":"#f2f2f2","sb_review_image":"","dark_font_color":"#474747","light_font_color":"#ffffff","btn_color_1":"#dd3649","sb_company_label_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#e5f2ff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},"button_title":"Book now","button_background_color":"#dd3649","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
      `;
      document.head.appendChild(script2);
    };

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="simplybook"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const handleBookingClick = () => {
    // Try to trigger the SimplybookWidget
    if (typeof window !== 'undefined') {
      const widget = (window as typeof window & { simplybookWidget?: { openWidget?: () => void; show?: () => void } }).simplybookWidget;
      if (widget && typeof widget.openWidget === 'function') {
        widget.openWidget();
      } else if (widget && typeof widget.show === 'function') {
        widget.show();
      } else {
        // Fallback: try to click the floating button
        const floatingButton = document.querySelector('.simplybook-widget-button');
        if (floatingButton) {
          (floatingButton as HTMLElement).click();
        } else {
          // Last resort: redirect to the booking URL directly
          window.open('https://testwalter.simplybook.net', '_blank');
        }
      }
    }
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Custom Layout */}
      <section
        className="relative flex items-center justify-center min-h-[480px] md:min-h-[520px] lg:min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/services/squad-coaching.png)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-16 gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">WELCOME TO 365 TENNIS</h1>
            <p className="text-lg md:text-2xl mb-4">Learn tennis in a fun, welcoming and encouraging environment.</p>
            <p className="text-base md:text-lg mb-8 italic font-semibold">
              365 Tennis. Auckland &amp; Waikato&apos;s largest coaching company,<br />
              New Zealand owned and operated. Exceptional coaching,<br />
              sportsmanship, fitness and fun from a team trained in high-performance tennis centres all over the world.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-tennis-green-500 hover:bg-tennis-green-400 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
            >
              CONTACT US
            </button>
          </div>
          {/* Right Card */}
          <div className="flex-shrink-0 w-full md:w-auto mt-8 md:mt-0">
            <div className="bg-white bg-opacity-95 rounded-lg shadow-xl px-8 py-8 text-center max-w-xs mx-auto">
              <div className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">LOVE IT OR IT&apos;S FREE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Club Locations */}
            <div className="bg-tennis-green-800 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">OUR CLUB LOCATIONS</h2>
              <p className="text-lg mb-6 text-center">
                365 Tennis operates from a range of locations across Auckland and Waikato.
              </p>
              <div className="text-center">
                <Link
                  href="/locations"
                  className="inline-flex items-center text-white hover:text-tennis-green-200 font-semibold text-lg transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* School Locations */}
            <div className="bg-purple-800 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">OUR SCHOOL LOCATIONS</h2>
              <p className="text-lg mb-6 text-center">
                Discover your options to get on the court and learn to play with 365 Tennis.
              </p>
              <div className="text-center">
                <Link
                  href="/locations"
                  className="inline-flex items-center text-white hover:text-purple-200 font-semibold text-lg transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tennis-green-800 mb-4">OUR PROGRAMS</h2>
            <p className="text-xl text-gray-600">Comprehensive tennis programs for all ages and skill levels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Junior Programs</h3>
              <p className="text-gray-600">Age-appropriate tennis programs for kids aged 3-17</p>
            </div>
            
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Adult Coaching</h3>
              <p className="text-gray-600">Private and group lessons for adult players</p>
            </div>
            
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Performance</h3>
              <p className="text-gray-600">High-performance training for competitive players</p>
            </div>
            
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Holiday Camps</h3>
              <p className="text-gray-600">Fun and intensive camps during school holidays</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-tennis-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Tennis Journey?</h2>
          <p className="text-xl text-tennis-green-100 mb-8">Join thousands of players who have improved their game with 365 Tennis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center px-8 py-4 bg-white text-tennis-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              BOOK NOW
            </button>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-tennis-green-600 transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
