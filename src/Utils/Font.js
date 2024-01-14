import { Poppins, Lora } from 'next/font/google';

export const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700']
});

export const merriweather = Lora({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700']
});
