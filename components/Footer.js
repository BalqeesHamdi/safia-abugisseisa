import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="footer">
      <div>
        <div className="logo">
          <Image src={'/logo_sia.png'} alt='' width={100} height={50}/>

        </div>
        {pathname === '/' && <ul>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experties">Experties</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#news">Latest News</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>}
        {pathname ==='/Home_ar' && <ul dir="rtl">
          <li ><a href="#intro">عن المكتب</a></li>
          <li><a href="#services">خدماتنا</a></li>
          <li><a href="#experties">خبراتنا</a></li>
          <li><a href="#team">فريقنا</a></li>
          <li><a href="#news">آخر الأخبار</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>}
      </div>
      <div className="rights">
        <p>@2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;