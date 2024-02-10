import {
  CHAIN,
  CONTRACT_ADDRESS,
  FRAME_METADATA,
  SITE_URL,
  TOKEN_ID,
} from '@/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: 'Geek House mint!',
  other: FRAME_METADATA,
};

export default function Home() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex' }}>
      <h1
        style={{
          margin: 'auto',
          fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        }}
      >
        <a
          href={`https://zora.co/collect/base:0x1f2906a6fb92fd8622ea600a388e3510f585214d/1`}
          style={{ color: 'inherit' }}
        >
          GeeK-House mint!
        </a>
      </h1>
    </div>
  );
}
