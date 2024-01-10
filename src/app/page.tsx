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

      <div className='container mx-auto my-3'>
        <p className='my-2 text-center text-5xl font-bold'>
          Print In Different Shapes and Sizes
        </p>
        <Row gutter={24} className='my-3'>
          <Col span={8}>
            <p className='my-2 text-center text-4xl '>Standard Size</p>
            <div className='h-[35rem] overflow-hidden '>
              <img
                src='https://photo.jessops.com/wp-content/uploads/2018/06/64NEW-768x768.jpg '
                alt=''
                className='h-full '
              />
            </div>
            <Row className='my-2'>
              <Col span={12}>
                <p className='mx-4 text-left text-xl'>4x6</p>
                <p className='mx-4 text-left text-xl'>5x7</p>
                <p className='mx-4 text-left text-xl'>8x10</p>
                <p className='mx-4 text-left text-xl'>Wallet (4)</p>
              </Col>
              <Col span={12}>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $0.20 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $1.09 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $3.95 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $1.99 ea.
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <p className='my-2 text-center text-4xl '>Square Size</p>
            <div className='h-[35rem] overflow-hidden '>
              <img
                src='https://www.printwich.com/images/products/4/6.jpg'
                alt=''
                className='h-full '
              />
            </div>
            <Row className='my-2'>
              <Col span={12}>
                <p className='mx-4 text-left text-xl'>4x4</p>
                <p className='mx-4 text-left text-xl'>8x8</p>
                <p className='mx-4 text-left text-xl'>12x12</p>
              </Col>
              <Col span={12}>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $0.29 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $3.49 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $6.99 ea.
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <p className='my-2 text-center text-4xl'>Large Size</p>
            <div className='h-[35rem] overflow-hidden '>
              <img
                src='https://brantinstore.com/wp-content/uploads/2017/09/large-format-printing.jpg'
                alt=''
                className='h-full '
              />
            </div>
            <Row className='my-2'>
              <Col span={12}>
                <p className='mx-4 text-left text-xl'>11x14</p>
                <p className='mx-4 text-left text-xl'>12x12</p>
                <p className='mx-4 text-left text-xl'>16x20</p>
                <p className='mx-4 text-left text-xl'>20x30</p>
              </Col>
              <Col span={12}>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $10.99 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $6.99 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $19.99 ea.
                </p>
                <p className='mx-4 text-right text-xl text-yellow-600'>
                  $24.99 ea.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </main>
  );
}
