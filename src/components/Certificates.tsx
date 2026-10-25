'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const certificates = [
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    image: '/certificates/google-prompting-essentials.png',
  },
  {
    title: 'Programming for Everybody: Getting Started with Python',
    issuer: 'University of Michigan / Coursera',
    image: '/certificates/python-michigan.png',
  },
  {
    title: 'HACKDATAV1',
    issuer: 'GDG Comsats Wah / COMSATS Wah Hackathon',
    image: '/certificates/hackdata.jpg',
  },
];
