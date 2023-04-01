import Head from 'next/head';
import React from 'react';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import Link from 'next/link';
import element from '../../components/text.json';

export default function Layout({ children }) {
  return (
    <>
    <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <aside>
              <nav>
                <ul>
                  {element.map((e) => {
                    return (
                      <p>
                        <Link href={`/HTML/${e.route}`}>{e.tag}</Link>
                        <br />
                      </p>
                    );
                  })}
                </ul>
              </nav>
            </aside>
          </div>
          <div className='col-8'>
            <main className='flex-1'>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
