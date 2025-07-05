'use client';

import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import BookingModal from './BookingModal';

const BookingModalWrapper: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  
  return (
    <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
  );
};

export default BookingModalWrapper; 