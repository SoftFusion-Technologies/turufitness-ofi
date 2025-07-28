import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarStaff from './NavbarStaff';
import '../../Styles/staff/dashboard.css';
import '../../Styles/staff/background.css';
// import Footer from '../../components/footer/Footer';
import { useAuth } from '../../AuthContext';
import ParticlesBackground from '../../Components/ParticlesBackground';

const AdminPage = () => {
  const { userLevel } = useAuth();

  return (
    <>
      <section className="relative w-full h-auto mx-auto bg-white">
        <div className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
          <ParticlesBackground />

          <div className="xl:px-0 sm:px-16 px-6 max-w-7xl mx-auto grid grid-cols-2 max-sm:grid-cols-1 max-md:gap-y-10 md:gap-10 py-28 sm:pt-44 lg:pt-28 md:w-5/6">
            {[
              { label: 'Usuarios', link: '/dashboard/usuarios' },
              { label: 'Clientes', link: '/dashboard/clientes' },
              { label: 'Accesos', link: '/dashboard/accesos' },
              { label: 'Planes', link: '/dashboard/planes' }
            ].map(({ label, link }, index) => (
              <div
                key={index}
                className="bg-white font-bignoodle w-[250px] h-[100px] lg:w-[400px] lg:h-[150px] mx-auto rounded-tr-xl rounded-bl-xl shadow-xl overflow-hidden"
              >
                <Link to={link} className="block w-full h-full">
                  <button className="btnstaff w-full h-full flex justify-center items-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
                    {label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
