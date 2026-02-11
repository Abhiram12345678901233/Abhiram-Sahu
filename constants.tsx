
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Airline Flight Price Analysis',
    category: 'Exploratory Data Analysis',
    description: 'A deep dive into airline datasets involving rigorous data cleaning, IQR-based outlier detection, and multi-variate EDA to uncover pricing trends and operational patterns.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    color: 'bg-[#5e5ce6]',
    dark: true,
  },
  {
    id: '2',
    title: 'Meta Ads Performance Dashboard',
    category: 'Data Visualization',
    description: 'A comprehensive Power BI suite tracking CTR, CPC, and ROI. Features custom DAX measures and Power Query transformations to visualize campaign effectiveness.',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQH3JIwQqNPK-w/feedshare-shrink_1280/B4DZw3yvOvIAAc-/0/1770462573764?e=1772064000&v=beta&t=wp-xS74xJP-RW4SShw42CrUP4guU94CW0Ys9Y_3cSXM',
    color: 'bg-[#f0fdf4]',
    dark: false,
  },
  {
    id: '3',
    title: 'Sales & Revenue Analysis',
    category: 'Data Extraction & Analysis',
    description: 'Developed custom web scraping scripts to harvest detailed mobile phone specifications and pricing from e-commerce platforms, transforming raw data into actionable revenue insights.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    color: 'bg-[#1e1b4b]',
    dark: true,
  },
  {
    id: '4',
    title: 'Driver Drowsiness Detection',
    category: 'Machine Learning',
    description: 'Developed a real-time safety monitoring system using Haar Cascades and Eye Aspect Ratio (EAR) to detect fatigue. Triggers a high-decibel alarm when closed eyes are detected for 2+ seconds.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    color: 'bg-[#f0f9ff]',
    dark: false,
  },
];
