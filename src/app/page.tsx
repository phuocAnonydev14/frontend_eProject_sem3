'use client';

import Head from 'next/head';
import * as React from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';
import { LikeOutlined, SmileOutlined, StarOutlined } from '@ant-design/icons';
import {useRouter} from "next/navigation";

export default function HomePage() {
  
  const router = useRouter()
  
  return (
    <main>
      <div
        className='container mx-auto my-4 flex h-96 items-center bg-center px-4'
        id='mainHead'
      >
        <div className='mx-4'>
          <p className='text-center text-5xl'>Pictures, As You Like Them</p>
          <p className='my-1 text-2xl'>Get Yours Today</p>
          <Button onClick={() => router.push("/order")}  size='large' type='primary'>
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
              <Button onClick={() => router.push("/order")} size='large' type='default'>
                Print With Quality
              </Button>
            </Flex>
          </Col>
        </Row>
      </div>

      <div className='container mx-auto my-3 p-3'>
        <p className='my-2 text-center font-sans text-5xl font-bold'>
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

      <div className='container mx-auto my-3 bg-slate-200'>
        <p className='p-5 text-center text-4xl'>
          Upload Your Photos With Any Device
        </p>
      </div>

      <div className='container mx-auto my-3 '>
        <p className='p-5 text-center font-sans text-4xl font-bold'>
          Discover New Ways to Display Your Photos & More
        </p>
        <Row className=''>
          <Col span={8}>
            <div className='flex flex-row items-center'>
              <div>
                <img
                  src='https://web.shutterfly.com/i/landingpages/WF466453_1d_Desktop_5-Up_ArtPrints_290x290.webp'
                  className='h-80 overflow-hidden'
                  alt=''
                />
              </div>
              <div>
                <span className='text-right text-2xl'>Art Prints</span>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className='flex flex-row items-center'>
              <div>
                <img
                  src='https://cdn-image.staticsfly.com/i/landingpages/WF308692_Deliverables/Desktop/2_5up/WF308692_2a_Desktop_5-Up_FramedPrints_290x290.webp'
                  alt=''
                  className='h-80'
                />
              </div>
              <div>
                <span className='text-right text-2xl'>Framed Photos</span>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className='flex flex-row items-center'>
              <div>
                <img
                  src='https://cdn-image.staticsfly.com/i/landingpages/WF308692_Deliverables/Desktop/1_5up/WF308692_1a_Desktop_5-Up_CollagePosters_290x290.webp'
                  alt=''
                  className='h-80'
                />
              </div>
              <div>
                <span className='text-right text-2xl'>Collage Posters</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className='container mx-auto my-3 flex h-56 items-center justify-start'
        id='home_second_banner'
      >
        <div className='mx-5 '>
          <p className='text-4xl text-slate-200'>
            Add Your Designs & Art to Favorite Products
          </p>
          <p className='w-[45rem] text-xl text-slate-100'>
            Use our high-quality printing and materials for any digital files
            you’ve purchased or created yourself and express your creativity
            throughout your home.
          </p>
        </div>
      </div>

      <div className='container mx-auto my-3 bg-slate-700 text-slate-100 p-5'>
        <p className='text-center text-5xl my-5'>Our Promise To You</p>

        <Row className='p-5'>
          <Col span={8}>
            <div className='flex flex-col  items-center justify-center'>
              <SmileOutlined className='text-8xl' />
              <p className='my-2 text-4xl'>Satisfaction Guaranteed</p>
            </div>
          </Col>
          <Col span={8}>
            <div className='flex flex-col items-center justify-center'>
              <StarOutlined className='text-8xl'/>
              <p className='my-2 text-4xl'>Special to You</p>
            </div>
          </Col>
          <Col span={8}>
            <div className='flex flex-col items-center justify-center'>
              <LikeOutlined className='text-8xl' />
              <p className='my-2 text-4xl'>Just The Way You Like</p>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
}
