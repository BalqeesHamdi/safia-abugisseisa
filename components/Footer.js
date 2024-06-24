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
          <Image src={`${process.env.BASE_URL}/logo_sia.svg`} alt='' width={100} height={100}/>
        </div>
        {pathname === '/' && <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experties">Experties</Link></li>
          <li><Link href="/people">People</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>}
        {pathname === '/Home_ar' && <ul dir="rtl" >
          <li><Link href="#intro">عن المكتب</Link></li>
          <li><Link href="#mission">مهمتنا</Link></li>
          <li><Link href="#vision">رؤيتنا</Link></li>
          <li><Link href="#experties">خبراتنا</Link></li>
          <li><Link href="#team">فريقنا</Link></li>
          <li><Link href="#news">آخر الأخبار</Link></li>
        </ul>}
      </div>
      <div className="rights">
        <p>@2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;