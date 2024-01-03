'use client';

import Head from 'next/head';
import * as React from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';

export default function HomePage() {
  return (
    <main>
      <div
        className='container mx-auto my-4 flex h-96 items-center bg-center px-4'
        id='mainHead'
      >
        <div className='mx-4'>
          <p className='text-center text-5xl'>Pictures, As You Like Them</p>
          <p className='my-1 text-2xl'>Get Yours Today</p>
          <Button size='large' type='primary'>
            Print Now
          </Button>
        </div>
      </div>

      <div className='container mx-auto'>
        <Row gutter={16}>
          <Col span={12} className='flex'>
            <div className='h-[35rem] overflow-hidden'>
              <img
                src='https://www.digitalab.co.uk/wp-content/uploads/2019/08/Matte-Print_Photo-Print_Photographic-Print_Photo-Print9.jpg'
                alt=''
                className='w-full '
              />
            </div>
            <p className='my-2 text-center text-4xl'>Shipped Directly To You</p>
            <p className='mx-2 text-center text-xl'>
              We offer shipping directly to you so you won't need to worry about
              picking up
            </p>
            <Flex justify='center' className='my-2'>
              <Button size='large' type='default'>
                Print With Shipping
              </Button>
            </Flex>
          </Col>
          <Col span={12}>
            <div className='h-[35rem] overflow-hidden '>
              <img
                src='https://smash-images.photobox.com/optimised/58f0978179e0b56c02b10732a522b8ab670e12c1_file_mobile_standard-prints-2217x2956-@3x.jpg'
                alt=''
                className='w-full '
              />
            </div>
            <p className='my-2 text-center text-4xl'>Print Without A Worry</p>
            <p className='mx-2 text-center text-xl'>
              Our prints offer the highest quality to ensure your satisfaction
            </p>
            <Flex justify='center' className='my-2'>
              <Button size='large' type='default'>
                Print With Quality
              </Button>
            </Flex>
          </Col>
        </Row>
        
      </div>
    </main>
  );
}
