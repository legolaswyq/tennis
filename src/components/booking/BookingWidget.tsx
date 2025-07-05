'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

function BookingWidget() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//widget.simplybook.net/v2/widget/widget.js";
    script.onload = () => {
      new window.SimplybookWidget({
        widget_type: "button",
        url: "https://testwalter2.simplybook.net",
        theme: "simple_beauty_theme",
        theme_settings: {
          sb_base_color: "#dd3649",
          header_color: "#f2f2f2",
          timeline_hide_unavailable: "1",
          hide_past_days: "0",
          timeline_show_end_time: "0",
          timeline_modern_display: "as_slots",
          display_item_mode: "block",
          body_bg_color: "#f2f2f2",
          sb_review_image: "",
          dark_font_color: "#474747",
          light_font_color: "#ffffff",
          btn_color_1: "#dd3649",
          sb_company_label_color: "#ffffff",
          hide_img_mode: "0",
          show_sidebar: "1",
          sb_busy: "#c7b3b3",
          sb_available: "#e5f2ff"
        },
        timeline: "modern",
        datepicker: "top_calendar",
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: []
        },
        button_title: "Book now",
        button_background_color: "#dd3649",
        button_text_color: "#ffffff",
        button_position: "right",
        button_position_offset: "55%",
        container_id: "sbw_u8rsg0"
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="sbw_u8rsg0" ref={widgetContainerRef}></div>
  );
}

export default BookingWidget;