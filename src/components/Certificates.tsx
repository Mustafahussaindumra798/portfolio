'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const certificates = [
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    image: assetPath('/certificates/google-prompting-essentials.png'),
  },
  {
    title: 'Programming for Everybody: Getting Started with Python',
    issuer: 'University of Michigan / Coursera',
    image: assetPath('/certificates/python-michigan.png'),
  },
  {
    title: 'HACKDATAV1',
    issuer: 'GDG Comsats Wah / COMSATS Wah Hackathon',
    image: assetPath('/certificates/hackdata.jpg'),
  },
];
