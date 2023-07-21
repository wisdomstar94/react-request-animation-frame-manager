import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-request-animation-frame-manager test',
  description: 'react-request-animation-frame-manager test',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
