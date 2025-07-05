'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function BookingPage() {
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

  const programs = [
    {
      title: 'Adult Coaching',
      description: 'Professional tennis coaching for adults of all skill levels. Private and group lessons available.',
      icon: '/icons/adult.svg',
    },
    {
      title: 'Private Coaching',
      description: 'One-on-one personalized tennis instruction tailored to your specific needs and goals.',
      icon: '/icons/private.svg',
    },
    {
      title: 'Squad Coaching',
      description: 'Small group training sessions focusing on technique, strategy, and match play.',
      icon: '/icons/squad.svg',
    },
    {
      title: 'Holiday Camps',
      description: 'Fun and intensive training camps during school holidays for junior players.',
      icon: '/icons/holiday.svg',
    },
    {
      title: 'Racquet Stringing',
      description: 'Professional racquet stringing service to keep your equipment in top condition.',
      icon: '/icons/tennis-racquet.svg',
    },
  ];



  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Choose from our range of tennis programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 mr-3">
                  <Image
                    src={program.icon}
                    alt={program.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                const widget = (window as typeof window & { simplybookWidget?: { openWidget?: () => void; show?: () => void } }).simplybookWidget;
                if (widget && typeof widget.openWidget === 'function') {
                  widget.openWidget();
                } else if (widget && typeof widget.show === 'function') {
                  widget.show();
                } else {
                  const floatingButton = document.querySelector('.simplybook-widget-button');
                  if (floatingButton) {
                    (floatingButton as HTMLElement).click();
                  } else {
                    window.open('https://testwalter.simplybook.net', '_blank');
                  }
                }
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-tennis-green-500 hover:bg-tennis-green-400 text-white font-bold text-lg rounded-lg transition-colors"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
} 