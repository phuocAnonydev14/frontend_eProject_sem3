'use client';

import Head from 'next/head';
import * as React from 'react';
import {Typography} from "antd";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      
      <div>
        <Typography.Text>Hi</Typography.Text>
        
      </div>
    </main>
  );
}
