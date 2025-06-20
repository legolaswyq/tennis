'use client';

import { useEffect } from 'react';

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
        var widget = new SimplybookWidget({
          "widget_type":"iframe",
          "url":"https://tennis-365.simplybook.net",
          "theme":"default",
          "theme_settings":{
            "timeline_hide_unavailable":"1",
            "hide_past_days":"0",
            "timeline_show_end_time":"0",
            "timeline_modern_display":"as_slots",
            "sb_base_color":"#48b248",
            "display_item_mode":"block",
            "booking_nav_bg_color":"#48b248",
            "body_bg_color":"#f2f2f2",
            "sb_review_image":"",
            "dark_font_color":"#474747",
            "light_font_color":"#f5fcff",
            "btn_color_1":"#48b248",
            "sb_company_label_color":"#ffffff",
            "hide_img_mode":"1",
            "show_sidebar":"1",
            "sb_busy":"#c7b3b3",
            "sb_available":"#d6ebff"
          },
          "timeline":"modern",
          "datepicker":"top_calendar",
          "is_rtl":false,
          "app_config":{
            "clear_session":0,
            "allow_switch_to_ada":0,
            "predefined":[]
          }
        });
      `;
      document.head.appendChild(script2);
    };

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="simplybook"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">Booking</h1>
      {/* The widget will be injected here */}
    </div>
  );
} 